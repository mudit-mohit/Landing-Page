// Update base URL to 'https://api.outmate.ai/api' when deploying
const API_BASE_URL = 'https://api.outmate.ai/api'; 

export const getPromptCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/prompts/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error("Prompt Library Error:", error);
    return [];
  }
};

export const getPromptsByCategory = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/prompts/${slug}`);
    if (!response.ok) throw new Error('Failed to fetch prompts');
    return await response.json();
  } catch (error) {
    console.error("Prompt Error:", error);
    return null;
  }
};

// ✅ Fetch Single Prompt
export const getPromptById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/prompts/detail/${id}`);
    if (!response.ok) throw new Error('Failed to fetch prompt details');
    return await response.json();
  } catch (error) {
    console.error("Prompt Detail Error:", error);
    return null;
  }
};