const API_BASE_URL = 'https://api.outmate.ai/api'; // Or your production URL

export const getTips = async (category) => {
  try {
    const query = category && category !== 'All' ? `?category=${category}` : '';
    const response = await fetch(`${API_BASE_URL}/tips${query}`);
    if (!response.ok) throw new Error('Failed to fetch tips');
    return await response.json();
  } catch (error) {
    console.error("Tips API Error:", error);
    return [];
  }
};