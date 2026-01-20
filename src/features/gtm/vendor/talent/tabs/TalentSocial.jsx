import React, { useState } from "react";
import { updateTalent } from "../../../../../services/api";

const TalentSocial = ({ isLight, initialData }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!initialData?._id) {
      alert("Please create the Talent Identity first.");
      return;
    }

    setLoading(true);
    const form = e.target;
    
    // Construct the Social Object
    const socialData = {
      linkedin: form.linkedin.value,
      github: form.github.value,
      portfolio: form.portfolio.value,
      huggingface: form.huggingface.value,
      stackoverflow: form.stackoverflow.value,
      twitter: form.twitter.value
    };

    // We send it as a FormData to match the unified API endpoint, 
    // even though we aren't uploading files here.
    const formData = new FormData();
    formData.append("social", JSON.stringify(socialData));

    try {
      await updateTalent(initialData._id, formData);
      alert("Social Links Saved!");
    } catch (err) {
      console.error(err);
      alert("Error saving data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
          SOCIAL & EXTERNAL LINKS
        </h2>
        <p className={`text-sm mt-1 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
          Connect your professional presence to your profile.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <InputField name="linkedin" label="LinkedIn URL" defaultValue={initialData?.social?.linkedin} placeholder="https://linkedin.com/in/username" isLight={isLight} />
        <InputField name="github" label="GitHub URL" defaultValue={initialData?.social?.github} placeholder="https://github.com/username" isLight={isLight} />
        <InputField name="portfolio" label="Portfolio / Website" defaultValue={initialData?.social?.portfolio} placeholder="https://yourportfolio.com" isLight={isLight} />
        <InputField name="huggingface" label="Hugging Face URL" defaultValue={initialData?.social?.huggingface} placeholder="https://huggingface.co/username" isLight={isLight} />
        <InputField name="stackoverflow" label="StackOverflow URL" defaultValue={initialData?.social?.stackoverflow} placeholder="https://stackoverflow.com/users/..." isLight={isLight} />
        <InputField name="twitter" label="Twitter / X" defaultValue={initialData?.social?.twitter} placeholder="https://x.com/username" isLight={isLight} />
      </div>

      <div className="mt-12 flex justify-end gap-4">
        <button type="button" className={`px-8 py-3 rounded-xl text-sm font-bold transition-colors ${isLight ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-[#333] text-white hover:bg-[#444]"}`}>
          Cancel
        </button>
        <button 
          type="submit" 
          disabled={loading}
          className="px-8 py-3 rounded-xl text-sm font-bold text-white transition-colors bg-[#8b5cf6] hover:bg-[#7c4dff]"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

const InputField = ({ name, label, placeholder, isLight, defaultValue }) => (
  <div>
    <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>{label}</label>
    <input name={name} type="text" defaultValue={defaultValue} placeholder={placeholder} className={`w-full px-4 py-3 rounded-xl border outline-none ${isLight ? "bg-gray-50 border-gray-200 text-gray-900" : "bg-[#1a1a1a] border-[#333] text-white"}`} />
  </div>
);

export default TalentSocial;