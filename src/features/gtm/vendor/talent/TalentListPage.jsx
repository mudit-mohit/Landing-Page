import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../hooks/useTheme";
import TalentForm from "./TalentForm";
import { getAllTalent } from "../../../../services/api"; // Import API service

const TalentListPage = () => {
  const { isLight } = useTheme();
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTalent, setEditingTalent] = useState(null);

  // 1. FETCH REAL DATA
  const fetchTalents = async () => {
    try {
      setLoading(true);
      const data = await getAllTalent();
      setTalents(data);
    } catch (error) {
      console.error("Failed to fetch talent:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTalents();
  }, []);

  // Handler to close edit mode and refresh list
  const handleEditComplete = () => {
    setEditingTalent(null);
    fetchTalents(); // Refresh data to show changes
  };

  // --- RENDER EDIT MODE ---
  if (editingTalent) {
    return (
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => setEditingTalent(null)}
            className={`p-2 rounded-full border transition-colors ${isLight ? "bg-white border-gray-200 hover:bg-gray-50" : "bg-[#121212] border-[#333] hover:bg-[#222]"}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <div>
            <h1 className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
              Edit Profile
            </h1>
            <p className={`text-sm ${isLight ? "text-gray-500" : "text-[#888]"}`}>
              Updating details for <span className="text-[#B45CFF]">{editingTalent.fullName}</span>
            </p>
          </div>
        </div>

        {/* Pass data AND the success callback */}
        {/* We add a 'key' here so React resets the form state when switching profiles */}
        <TalentForm 
           key={editingTalent._id} 
           initialData={editingTalent} 
           onSuccess={handleEditComplete} 
        />
      </div>
    );
  }

  // --- RENDER LIST MODE ---
  return (
    <div className="w-full">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className={`text-3xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
            Talent List
          </h1>
          <p className={`text-sm mt-1 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
            View and manage your {talents.length} active profiles.
          </p>
        </div>
        <div className="flex gap-3">
           <input placeholder="Search talent..." className={`px-4 py-2 rounded-xl border text-sm outline-none ${isLight ? "bg-white border-gray-200" : "bg-[#121212] border-[#333] text-white"}`} />
        </div>
      </div>

      <div className={`rounded-2xl border overflow-hidden ${isLight ? "bg-white border-gray-200 shadow-sm" : "bg-[#121212] border-[#222]"}`}>
        
        {loading ? (
          <div className="p-10 text-center text-gray-500">Loading profiles...</div>
        ) : talents.length === 0 ? (
          <div className="p-10 text-center text-gray-500">No profiles found. Add one in the "Add Talent" tab.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className={`border-b text-xs font-bold uppercase tracking-wider ${isLight ? "border-gray-100 text-gray-500 bg-gray-50" : "border-[#333] text-[#888] bg-[#1a1a1a]"}`}>
                <th className="p-5">Name</th>
                <th className="p-5">Title</th>
                <th className="p-5">Status</th>
                <th className="p-5">Email</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {talents.map((talent) => (
                <tr 
                  key={talent._id} // MongoDB uses _id
                  className={`border-b last:border-0 transition-colors ${isLight ? "border-gray-100 hover:bg-gray-50" : "border-[#222] hover:bg-[#1a1a1a]"}`}
                >
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      {/* Show uploaded image or fallback avatar */}
                      <img 
                        src={talent.profileImage || `https://ui-avatars.com/api/?name=${talent.fullName}&background=random`} 
                        alt="" 
                        className="w-10 h-10 rounded-full object-cover" 
                      />
                      <span className={`font-bold ${isLight ? "text-gray-900" : "text-white"}`}>{talent.fullName}</span>
                    </div>
                  </td>
                  <td className={`p-5 ${isLight ? "text-gray-600" : "text-[#ccc]"}`}>{talent.title}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold 
                      ${talent.status === 'Active' ? 'bg-green-100 text-green-700' : 
                        talent.status === 'On Project' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'}
                    `}>
                      {talent.status}
                    </span>
                  </td>
                  <td className={`p-5 ${isLight ? "text-gray-500" : "text-[#888]"}`}>{talent.email}</td>
                  <td className="p-5 text-right">
                    <button 
                      onClick={() => setEditingTalent(talent)}
                      className="text-[#B45CFF] font-bold hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TalentListPage;