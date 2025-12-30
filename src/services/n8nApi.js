const API_BASE_URL = 'http://localhost:5000/api'||'https://api.outmate.ai/api'; // Update this when deploying

// ✅ GET WORKFLOWS
export const getWorkflows = async (page = 1, search = '', category = '') => {
  try {
    let query = `${API_BASE_URL}/workflows?page=${page}&limit=12&search=${search}`;
    if (category && category !== 'All') query += `&category=${category}`;

    const response = await fetch(query);
    if (!response.ok) throw new Error('Failed to fetch workflows');
    return await response.json();
  } catch (error) {
    console.error("Error fetching workflows:", error);
    return { workflows: [], totalPages: 0, totalWorkflows: 0 };
  }
};

// ✅ GET SINGLE WORKFLOW
export const getWorkflowDetails = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/workflows/${id}`);
    if (!response.ok) throw new Error('Failed to fetch details');
    return await response.json();
  } catch (error) {
    console.error("Error fetching workflow details:", error);
    return null;
  }
};