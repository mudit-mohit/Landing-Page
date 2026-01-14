const API_BASE_URL = 'http://localhost:5000/api';

export const getTools = async (category = 'All') => {
  try {
    const query = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : '';
    const response = await fetch(`${API_BASE_URL}/tools${query}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching tools:", error);
    return [];
  }
};

export const getFeaturedTools = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/tools?featured=true`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching featured tools:", error);
    return [];
  }
};

export const getToolCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/tools/meta/categories`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getToolBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tools/${slug}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching tool details:", error);
    return null;
  }
};