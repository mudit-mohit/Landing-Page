import axios from 'axios';

// ✅ 1. Define the Base URL (Root of your API)
// ✅ 1. Define the Base URL (Root of your API)
const API_BASE_URL = 'http://localhost:5000/api';

// ✅ 2. Define the Talent URL (Derived from Base)
const API_URL = `${API_BASE_URL}/talent`;

// ==========================================
// 🚀 N8N WORKFLOWS API
// ==========================================

// ✅ GET WORKFLOWS (Updated to accept category)
export const getWorkflows = async (page = 1, search = '', category = '') => {
    try {
        // Construct Query
        let query = `${API_BASE_URL}/workflows?page=${page}&limit=12&search=${search}`;
        if (category) query += `&category=${category}`;

        const response = await fetch(query);
        if (!response.ok) throw new Error('Failed to fetch workflows');
        return await response.json();
    } catch (error) {
        console.error("Error fetching workflows:", error);
        return { workflows: [], totalPages: 0, totalWorkflows: 0 };
    }
};


// ✅ GET SINGLE WORKFLOW (for the JSON Modal)
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

// ==========================================
// 👤 TALENT API (Existing)
// ==========================================

export const createTalent = async (formData) => {
    const response = await axios.post(API_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

export const updateTalent = async (id, data) => {
    const response = await axios.put(`${API_URL}/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

export const getAllTalent = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// ✅ ADDED: Alias for compatibility with new templates
export const getTalents = getAllTalent;

export const getTalentById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// ✅ NEW: Fetch Experts for Specific Page
export const getExperts = async (subSection, page) => {
    try {
        const response = await axios.get(API_URL);
        const allTalent = response.data;

        // Filter based on the new fields
        return allTalent.filter(t =>
            t.subSection?.toLowerCase() === subSection?.toLowerCase() &&
            t.page?.toLowerCase() === page?.toLowerCase()
        );
    } catch (error) {
        console.error("Failed to fetch experts", error);
        return [];
    }
};
