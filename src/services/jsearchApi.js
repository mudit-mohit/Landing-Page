export const fetchJobs = async ({ query, datePosted, jobType, remote }) => {
  // Replace with your actual RapidAPI Key
  const RAPID_API_KEY = '298ea72f92mshf2e44e4e7cabc9dp1ad588jsnffd7764b0420'; 
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  // Construct query string for Marketing/GTM focus
  const remoteParam = remote ? 'remote' : '';
  const queryString = `${query} ${remoteParam} in USA`.trim(); 

  try {
    const response = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(queryString)}&page=1&num_pages=1&date_posted=${datePosted || 'all'}&employment_types=${jobType || ''}`, 
      options
    );

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("JSearch API Error:", error);
    return [];
  }
};