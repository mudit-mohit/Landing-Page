// Currently pointing to Localhost because the GTM Backend code is on your laptop.
// Once you deploy the backend changes to AWS, switch this to 'https://api.outmate.ai/api'
const API_BASE_URL = 'https://api.outmate.ai/api';

export const getGtmTweets = async (category = 'All') => {
  try {
    const response = await fetch(`${API_BASE_URL}/gtm-tweets?category=${category}`);
    if (!response.ok) throw new Error('Failed to fetch GTM tweets');
    return await response.json();
  } catch (error) {
    console.error("GTM Hub Error:", error);
    return [];
  }
};