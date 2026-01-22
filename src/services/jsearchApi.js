// ✅ 1. DEFINE API KEY & HOST CONSTANTS GLOBALLY
// Moved to the top so BOTH functions can use them
const RAPID_API_KEY = '26ad49ebd7msh633a14550fc4e09p15d20djsn440225ff6883';
const RAPID_API_HOST = 'jsearch.p.rapidapi.com';

// ✅ FETCH JOBS LIST
export const fetchJobs = async ({ query, datePosted, jobType, remote }) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': RAPID_API_HOST
    }
  };

  // Construct query string
  const remoteParam = remote ? 'remote' : '';
  const safeQuery = query || 'GTM Strategy'; // Default fallback
  const queryString = `${safeQuery} ${remoteParam} in USA`.trim();

  try {
    const response = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(queryString)}&page=1&num_pages=1&date_posted=${datePosted || 'all'}&employment_types=${jobType || ''}`,
      options
    );

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("JSearch API Error:", error);
    return [];
  }
};

// ✅ FETCH SINGLE JOB DETAILS
export const getJobDetails = async (jobId) => {
  // Uses RAPID_API_HOST from the top scope
  const url = `https://${RAPID_API_HOST}/job-details?job_id=${jobId}&extended_publisher_details=false`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': RAPID_API_KEY, // Uses RAPID_API_KEY from the top scope
      'x-rapidapi-host': RAPID_API_HOST
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();

    // The API returns an array, we return the first item
    return data.data ? data.data[0] : null;
  } catch (error) {
    console.error("Job Detail API Error:", error);
    return null;
  }
};