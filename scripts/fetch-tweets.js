import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ==========================================
// 1. CONFIGURATION
// ==========================================
const RAPID_API_KEY = '298ea72f92mshf2e44e4e7cabc9dp1ad588jsnffd7764b0420';
const RAPID_API_HOST = 'twitter241.p.rapidapi.com';

const TOPICS = [
    '"Go To Market" Strategy', '"GTM" SaaS', '"Product Led Growth"',
    '"Revenue Operations"', '"Demand Generation"', 'AEO Marketing', '"B2B Marketing"'
];

const SEARCH_QUERY = `(${TOPICS.join(' OR ')}) lang:en -filter:replies`;

// ==========================================
// 2. FILE PATHS
// ==========================================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const RAW_OUTPUT_FILE = path.join(__dirname, '../src/data/tweets.json');
const FILTERED_OUTPUT_FILE = path.join(__dirname, '../src/data/filtered_tweets.json');
const OUTPUT_DIR = path.dirname(RAW_OUTPUT_FILE);

// ==========================================
// 3. ROBUST LOGIC (Extracted from GtmPostGrid.jsx)
// ==========================================

// ✅ RECURSIVE TWEET FINDER (Exact logic from your frontend)
const findTweetsInRawData = (obj, tweets = []) => {
    if (!obj || typeof obj !== 'object') return tweets;

    // Check if this object is a Tweet
    if (obj.__typename === 'Tweet' && (obj.legacy || obj.note_tweet || obj.details)) {
        tweets.push(obj);
        return tweets;
    }

    // Recursively search arrays
    if (Array.isArray(obj)) {
        for (const item of obj) findTweetsInRawData(item, tweets);
        return tweets;
    }

    // Recursively search object keys
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            findTweetsInRawData(obj[key], tweets);
        }
    }
    return tweets;
};

// ✅ RECURSIVE MEDIA FINDER (Exact logic from your frontend)
const findMediaInTweet = (obj, media = []) => {
    if (!obj || typeof obj !== 'object') return media;

    // Common indicators: original_img_url, media_url_https
    if (obj.original_img_url || obj.media_url_https) {
        const url = obj.original_img_url || obj.media_url_https;
        // Avoid duplicates
        if (!media.find(m => m.url === url)) {
            let type = 'photo';
            if (obj.__typename === 'ApiVideo' || obj.type === 'video') type = 'video';
            if (obj.variants || obj.video_info) type = 'video';

            media.push({
                type,
                url,
                width: obj.original_img_width || obj.sizes?.large?.w,
                height: obj.original_img_height || obj.sizes?.large?.h
            });
        }
    }

    // Recursively search
    if (Array.isArray(obj)) {
        for (const item of obj) findMediaInTweet(item, media);
    } else {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                findMediaInTweet(obj[key], media);
            }
        }
    }
    return media;
};

// ==========================================
// 4. MAIN EXECUTION
// ==========================================

async function fetchAndProcessTweets() {
    console.log('🚀 Starting GTM Content Engine...');
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    // --- STEP 1: LOAD OR FETCH RAW DATA ---
    let rawData;
    if (fs.existsSync(RAW_OUTPUT_FILE)) {
        console.log(`📂 Found local raw data. Loading from ${RAW_OUTPUT_FILE}...`);
        try {
            rawData = JSON.parse(fs.readFileSync(RAW_OUTPUT_FILE, 'utf-8'));
        } catch (e) {
            console.log("❌ Error reading local file.");
        }
    }

    if (!rawData) {
        // Fetch logic... (Only runs if no local file)
        const url = `https://${RAPID_API_HOST}/search-v3?type=Latest&count=40&query=${encodeURIComponent(SEARCH_QUERY)}`;
        const options = { method: 'GET', headers: { 'x-rapidapi-key': RAPID_API_KEY, 'x-rapidapi-host': RAPID_API_HOST } };
        try {
            console.log(`🔎 Querying API...`);
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            rawData = await response.json();
            fs.writeFileSync(RAW_OUTPUT_FILE, JSON.stringify(rawData, null, 2));
            console.log(`💾 Raw data saved.`);
        } catch (error) {
            console.error('❌ API Failed:', error.message);
            return;
        }
    }

    // --- STEP 2: EXTRACT & FILTER ---
    console.log(`🧹 Processing Data...`);

    // 1. Find all tweet objects using the robust recursive finder
    const rawTweets = findTweetsInRawData(rawData);
    console.log(`   - Found ${rawTweets.length} raw tweet objects.`);

    // 2. Process them using your exact frontend logic
    const processedTweets = rawTweets.map(tweet => {
        try {
            // --- EXTRACT DETAILS ---
            const details = tweet.details;
            const legacy = tweet.legacy;
            const noteTweet = tweet.note_tweet?.note_tweet_results?.result;

            // TEXT
            const text = noteTweet?.text || details?.full_text || legacy?.full_text;

            // --- EXTRACT USER (Crucial Fix) ---
            const userResult = tweet.core?.user_results?.result;
            const userCore = userResult?.core; // Sometimes inside core
            const userLegacy = userResult?.legacy || userResult?.core; // Fallback

            // Safe Accessors
            const userName = userCore?.name || userLegacy?.name;
            const userHandle = userCore?.screen_name || userLegacy?.screen_name;
            const userAvatar = userResult?.avatar?.image_url || userLegacy?.profile_image_url_https;
            const userVerified = userResult?.verification?.is_blue_verified || userLegacy?.verified;

            if (!text || !userName) return null;

            // --- FILTERS (SPAM/LENGTH) ---
            const textLower = text.toLowerCase();
            const spamKeywords = ['crypto', 'nft', 'airdrop', 'giveaway', 'solana', 'buy now'];
            if (spamKeywords.some(k => textLower.includes(k))) return null;
            if (text.length < 30 && !textLower.includes("http")) return null;

            // --- EXTRACT METRICS ---
            const counts = tweet.counts || details || legacy;
            const metrics = {
                likes: counts?.favorite_count || 0,
                retweets: counts?.retweet_count || 0,
                replies: counts?.reply_count || 0,
                views: tweet.views?.count || details?.views?.count || legacy?.views?.count || 0
            };

            // --- EXTRACT MEDIA (Using the robust helper) ---
            let media = findMediaInTweet(tweet);
            // Deduplicate media by URL
            media = media.filter((m, index, self) => index === self.findIndex((t) => t.url === m.url));

            // --- CATEGORIZE ---
            let category = "Strategy";
            const t = text.toLowerCase();
            if (t.includes("hiring") || t.includes("job")) category = "Jobs";
            else if (t.includes("sales") || t.includes("sdr")) category = "Sales";
            else if (t.includes("marketing")) category = "Marketing";
            else if (t.includes("plg")) category = "PLG";

            return {
                id: tweet.rest_id,
                text: text,
                createdAt: details?.created_at_ms || legacy?.created_at,
                category: category,
                metrics: metrics,
                author: {
                    name: userName,
                    handle: userHandle,
                    avatar: userAvatar,
                    verified: !!userVerified
                },
                media: media,
                url: `https://twitter.com/${userHandle}/status/${tweet.rest_id}`
            };

        } catch (e) {
            return null;
        }
    })
    .filter(Boolean)
    .filter((v, i, a) => a.findIndex(t => t.id === v.id) === i); // Deduplicate

    // Save Data
    fs.writeFileSync(FILTERED_OUTPUT_FILE, JSON.stringify(processedTweets, null, 2));
    
    console.log(`✅ Success! Saved ${processedTweets.length} tweets.`);
    if(processedTweets.length > 0) {
        console.log("🔍 Sample User:", processedTweets[0].author.name);
        console.log("🔍 Sample Avatar:", processedTweets[0].author.avatar);
    }
}

fetchAndProcessTweets();