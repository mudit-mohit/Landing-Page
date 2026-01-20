import React, { useState } from "react";
import { updateTalent } from "../../../../../services/api";

const TalentProfileDetails = ({ isLight, initialData }) => {
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState(initialData?.about || "");
  const [skills, setSkills] = useState(initialData?.topSkills || []);
  const [tools, setTools] = useState(initialData?.tools || []);
  const [experiences, setExperiences] = useState(initialData?.experiences || []);
  const [educations, setEducations] = useState(initialData?.education || []);
  const [certifications, setCertifications] = useState(initialData?.certifications || []);
  
  const [activeModal, setActiveModal] = useState(null);
  const [toolInput, setToolInput] = useState("");

  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : "?";

  // --- FINAL SUBMIT HANDLER ---
  const handleFinalSave = async () => {
    if (!initialData?._id) {
      alert("Please create the Talent Identity first.");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("about", about);
    formData.append("topSkills", JSON.stringify(skills));
    formData.append("tools", JSON.stringify(tools));
    formData.append("experiences", JSON.stringify(experiences));
    formData.append("education", JSON.stringify(educations));
    formData.append("certifications", JSON.stringify(certifications));

    try {
      await updateTalent(initialData._id, formData);
      alert("Profile Details Saved Successfully!");
    } catch (err) {
      console.error(err);
      alert("Error saving details.");
    } finally {
      setLoading(false);
    }
  };

  // --- LOCAL HANDLERS ---
  const handleToolKeyDown = (e) => {
    if (e.key === "Enter" && toolInput.trim() !== "") {
      setTools([...tools, toolInput.trim()]);
      setToolInput("");
    }
  };

  const handleSaveSkill = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newSkill = {
      name: formData.get("name"),
      usage: formData.get("usage"),
      exp: formData.get("exp"),
      color: "#B45CFF" 
    };
    setSkills([...skills, newSkill]);
    setActiveModal(null);
  };

  const handleSaveExperience = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newExp = {
      current: formData.get("current") === "on" ? "yes" : "no",
      type: formData.get("type"),
      expYears: formData.get("expYears"),
      expMonths: formData.get("expMonths"),
      company: formData.get("company"),
      role: formData.get("role"),
      location: formData.get("location"),
      joinMonth: formData.get("joinMonth"),
      joinYear: formData.get("joinYear"),
      currency: formData.get("currency"),
      salary: formData.get("salary"),
      description: formData.get("description"),
      displayTitle: formData.get("role"),
      displaySubtitle: `${formData.get("company")} • ${formData.get("type")}`,
      displayMeta: `${formData.get("location") || "Remote"} • ${formData.get("joinMonth")} ${formData.get("joinYear")}`,
      displayDesc: formData.get("description")
    };
    setExperiences([...experiences, newExp]);
    setActiveModal(null);
  };

  const handleSaveEduCert = (e, type) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let newItem;
    
    if (type === 'edu') {
       newItem = {
          institute: formData.get("institute"),
          degree: formData.get("degree"),
          startMonth: formData.get("startMonth"),
          startYear: formData.get("startYear"),
          endMonth: formData.get("endMonth"),
          endYear: formData.get("endYear"),
          description: formData.get("description"),
          
          displayTitle: formData.get("institute"),
          displaySubtitle: formData.get("degree"),
          displayMeta: `${formData.get("startYear")} - ${formData.get("endYear")}`,
          displayDesc: formData.get("description")
       };
       setEducations([...educations, newItem]);
    } else {
       // Certifications
       newItem = {
          institution: formData.get("institution"), // Needs to match input name="institution"
          company: formData.get("company"),         // Needs to match input name="company"
          joinMonth: formData.get("joinMonth"),
          joinYear: formData.get("joinYear"),
          description: formData.get("description"),

          displayTitle: formData.get("institution"),
          displaySubtitle: formData.get("company"),
          displayMeta: `Issued: ${formData.get("joinYear")}`,
          displayDesc: formData.get("description")
       };
       setCertifications([...certifications, newItem]);
    }
    setActiveModal(null);
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const years = Array.from({length: 40}, (_, i) => new Date().getFullYear() - i);

  return (
    <div className="animate-fade-in-up flex flex-col gap-10">
      
      {/* 1. Header / About */}
      <div>
        <h2 className={`text-2xl font-bold mb-1 ${isLight ? "text-gray-900" : "text-[#E6E6E6]"}`}>
          TALENT PROFILE
        </h2>
        <p className={`text-xs mb-6 ${isLight ? "text-gray-500" : "text-[#BDBDBD]"}`}>
          Manage skill sets, experience, and education details.
        </p>
        <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-600" : "text-[#E6E6E6]"}`}>
          About Section <span className="text-[#B45CFF]">*</span>
        </label>
        <textarea 
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="about section..." 
          className={`w-full h-[140px] p-4 rounded-lg border outline-none text-sm resize-none transition-all ${isLight ? "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#B45CFF]" : "bg-[#2E2E2E] border-[#ffffff10] text-[#E6E6E6] placeholder-[#8b8b8b] focus:border-[#B45CFF]"}`} 
        />
      </div>

      {/* 2. Skills */}
      <div>
        <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-600" : "text-[#E6E6E6]"}`}>Skills <span className="text-[#B45CFF]">*</span></label>
        <div onClick={() => setActiveModal('skill')} className={`w-full h-[44px] px-4 rounded-md border flex items-center cursor-text mb-6 transition-all ${isLight ? "bg-gray-50 border-gray-200 text-gray-900 hover:border-[#B45CFF]" : "bg-[#1f1f1f] border-transparent text-[#E6E6E6] hover:border-[#B45CFF]"}`}>
          <span className={isLight ? "text-gray-400" : "text-[#666]"}>Click to add skill...</span>
        </div>
        {skills.length > 0 && (
          <div className={`rounded-lg overflow-hidden ${isLight ? "shadow-sm border border-gray-100" : "shadow-lg"}`}>
            <div className="h-[36px] bg-[#B45CFF] flex items-center px-5 text-white text-xs font-semibold">
              <span className="w-1/3">Top Skills</span><span className="w-1/3 text-center">Current Usage</span><span className="w-1/3 text-right">Experience</span>
            </div>
            <div className={`p-4 flex flex-col gap-3 ${isLight ? "bg-white" : "bg-[#2F2F2F]"}`}>
              {skills.map((skill, i) => (
                <div key={i} className={`flex items-center text-sm pb-3 border-b ${isLight ? "border-gray-100 last:border-0" : "border-[#ffffff08] last:border-0"}`}>
                  <div className="w-1/3 flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ background: skill.color }}></span><span className={isLight ? "text-gray-900" : "text-[#E6E6E6]"}>{skill.name}</span></div>
                  <div className={`w-1/3 text-center ${isLight ? "text-gray-500" : "text-[#BDBDBD]"}`}>{skill.usage}%</div>
                  <div className={`w-1/3 text-right ${isLight ? "text-gray-900" : "text-[#E6E6E6]"}`}>{skill.exp}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. Tools */}
      <div>
        <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-600" : "text-[#E6E6E6]"}`}>Tools & Technologies <span className="text-[#B45CFF]">*</span></label>
        <div className={`flex items-center px-4 h-[44px] rounded-md mb-6 ${isLight ? "bg-gray-50 border border-gray-200" : "bg-[#1f1f1f]"}`}>
          <svg width="16" height="16" className="text-gray-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input type="text" placeholder="Type tool name and press Enter..." className="bg-transparent outline-none text-sm w-full text-inherit" value={toolInput} onChange={(e) => setToolInput(e.target.value)} onKeyDown={handleToolKeyDown} />
        </div>
        {tools.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
             {tools.map((tool, i) => (
              <div key={i} className={`flex flex-col items-center justify-center p-5 rounded-xl transition-transform hover:-translate-y-1 duration-200 cursor-default ${isLight ? "bg-white border border-gray-100 shadow-sm" : "bg-[#2f2f2f]"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 font-bold text-lg ${isLight ? "bg-purple-100 text-purple-600" : "bg-[#383838] text-purple-400"}`}>{getInitial(tool)}</div>
                <span className={`text-sm ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>{tool}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Experiences */}
      <SectionCard title="Experiences" onAdd={() => setActiveModal("experience")} isLight={isLight}>
        {experiences.length === 0 ? <p className={`text-sm italic p-4 text-center ${isLight ? "text-gray-400" : "text-[#666]"}`}>No experience added yet.</p> : experiences.map((item, i) => <ListItem key={i} title={item.displayTitle} subtitle={item.displaySubtitle} meta={item.displayMeta} desc={item.displayDesc} isLight={isLight} />)}
      </SectionCard>

      {/* 5. Educations */}
      <SectionCard title="Educations" onAdd={() => setActiveModal("education")} isLight={isLight}>
        {educations.length === 0 ? <p className={`text-sm italic p-4 text-center ${isLight ? "text-gray-400" : "text-[#666]"}`}>No education added yet.</p> : educations.map((item, i) => <ListItem key={i} title={item.displayTitle} subtitle={item.displaySubtitle} meta={item.displayMeta} desc={item.displayDesc} isLight={isLight} />)}
      </SectionCard>

      {/* 6. Certifications */}
      <SectionCard title="Certifications" onAdd={() => setActiveModal("certification")} isLight={isLight}>
         {certifications.length === 0 ? <p className={`text-sm italic p-4 text-center ${isLight ? "text-gray-400" : "text-[#666]"}`}>No certifications added yet.</p> : certifications.map((item, i) => <ListItem key={i} title={item.displayTitle} subtitle={item.displaySubtitle} meta={item.displayMeta} desc={item.displayDesc} isLight={isLight} />)}
      </SectionCard>

      {/* Footer Buttons */}
      <div className="mt-12 flex justify-end gap-4 pt-6 border-t border-gray-100 dark:border-[#333]">
        <button type="button" className={`px-8 py-3 rounded-xl text-sm font-bold transition-colors ${isLight ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-[#333] text-white hover:bg-[#444]"}`}>Cancel</button>
        <button onClick={handleFinalSave} disabled={loading} className="px-8 py-3 rounded-xl text-sm font-bold text-white transition-colors bg-[#8b5cf6] hover:bg-[#7c4dff]">{loading ? "Saving..." : "Save Changes"}</button>
      </div>

      {/* --- MODALS --- */}
      
      {/* Skill Modal */}
      {activeModal === 'skill' && (
        <ModalWrapper onClose={() => setActiveModal(null)} title="Add Skill" isLight={isLight}>
          <form onSubmit={handleSaveSkill} className="space-y-4">
             <div><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Skill Name</label><input name="name" type="text" placeholder="e.g. React" required className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} /></div>
             <div className="flex gap-4"><div className="w-1/2"><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Usage (%)</label><input name="usage" type="number" placeholder="25" className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} /></div><div className="w-1/2"><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Experience</label><input name="exp" type="text" placeholder="2 Years" className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} /></div></div>
             <div className="flex justify-end gap-3 pt-4"><button type="button" onClick={() => setActiveModal(null)} className={`px-4 py-2 rounded text-sm ${isLight ? "bg-gray-200" : "bg-[#333] text-white"}`}>Cancel</button><button type="submit" className="px-4 py-2 rounded text-sm bg-[#B45CFF] text-white">Add</button></div>
          </form>
        </ModalWrapper>
      )}

      {/* Experience Modal */}
      {activeModal === 'experience' && (
        <ModalWrapper onClose={() => setActiveModal(null)} title="Add Experience" isLight={isLight}>
          <form onSubmit={handleSaveExperience} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1"><label className={`block text-xs font-bold mb-3 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Is This Your Current Employment?</label><div className="flex gap-4"><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="current" defaultChecked className="accent-[#B45CFF] w-4 h-4" /><span className={`text-sm ${isLight ? "text-gray-600" : "text-[#BDBDBD]"}`}>Yes</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="current" className="accent-[#B45CFF] w-4 h-4" /><span className={`text-sm ${isLight ? "text-gray-600" : "text-[#BDBDBD]"}`}>No</span></label></div></div>
                <div className="flex-1"><label className={`block text-xs font-bold mb-3 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Employment Type</label><div className="flex gap-4"><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="type" value="Full-Time" defaultChecked className="accent-[#B45CFF] w-4 h-4" /><span className={`text-sm ${isLight ? "text-gray-600" : "text-[#BDBDBD]"}`}>Full-Time</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="type" value="Internship" className="accent-[#B45CFF] w-4 h-4" /><span className={`text-sm ${isLight ? "text-gray-600" : "text-[#BDBDBD]"}`}>Internship</span></label></div></div>
            </div>
            <div><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Total Experience</label><div className="flex gap-4"><input name="expYears" type="number" placeholder="0 Years" className={`w-1/2 p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} /><input name="expMonths" type="number" placeholder="0 Months" className={`w-1/2 p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} /></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Company Name</label><input name="company" type="text" className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} /></div><div><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Job Role</label><input name="role" type="text" className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} /></div></div>
            <div><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Joining Date <span className="text-[#B45CFF]">*</span></label><div className="flex gap-4"><select name="joinMonth" className={`w-1/2 p-3 rounded-md border outline-none cursor-pointer ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`}><option value="">Select Month</option>{months.map(m => <option key={m} value={m}>{m}</option>)}</select><select name="joinYear" className={`w-1/2 p-3 rounded-md border outline-none cursor-pointer ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`}><option value="">Select Year</option>{years.map(y => <option key={y} value={y}>{y}</option>)}</select></div></div>
            <div><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Current Salary <span className="text-[#B45CFF]">*</span></label><div className="flex gap-4"><select name="currency" className={`w-[80px] p-3 rounded-md border outline-none cursor-pointer text-center ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`}><option>₹</option><option>$</option><option>€</option></select><input name="salary" type="number" placeholder="4,000.00" className={`flex-1 p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} /></div></div>
            <div><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Job Profile Description</label><textarea name="description" className={`w-full h-[100px] p-3 rounded-md border outline-none resize-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`}></textarea></div>
            <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-[#333]"><button type="button" onClick={() => setActiveModal(null)} className={`px-6 py-2.5 rounded-xl border font-medium ${isLight ? "border-gray-300 text-gray-600 hover:bg-gray-50" : "border-[#444] text-[#BDBDBD] hover:bg-[#333]"}`}>Cancel</button><button type="submit" className="px-8 py-2.5 rounded-xl bg-[#B45CFF] text-white font-bold hover:bg-[#9d44e6]">Save</button></div>
          </form>
        </ModalWrapper>
      )}

      {/* Education/Cert Modal */}
      {(activeModal === 'education' || activeModal === 'certification') && (
        <ModalWrapper onClose={() => setActiveModal(null)} title={activeModal === 'education' ? "Add Education" : "Add Certification"} isLight={isLight}>
           <form onSubmit={(e) => handleSaveEduCert(e, activeModal === 'education' ? 'edu' : 'cert')} className="space-y-4">
              <div>
                <label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>
                  {activeModal === 'education' ? 'Institute Name*' : 'Institution Name*'}
                </label>
                {/* ✅ FIX: Dynamic Name */}
                <input name={activeModal === 'education' ? "institute" : "institution"} type="text" className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} required />
              </div>

              <div>
                <label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>
                  {activeModal === 'education' ? 'Degree*' : 'Company Name*'}
                </label>
                {/* ✅ FIX: Dynamic Name */}
                <input name={activeModal === 'education' ? "degree" : "company"} type="text" className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} required />
              </div>

              {activeModal === 'education' ? (
                  <div className="flex gap-4">
                      <div className="w-1/2"><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Start Date*</label><div className="flex gap-2"><select name="startMonth" className={`w-1/2 p-3 rounded-md border outline-none cursor-pointer ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`}>{months.map(m => <option key={m}>{m}</option>)}</select><select name="startYear" className={`w-1/2 p-3 rounded-md border outline-none cursor-pointer ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`}>{years.map(y => <option key={y}>{y}</option>)}</select></div></div>
                      <div className="w-1/2"><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>End Date*</label><div className="flex gap-2"><select name="endMonth" className={`w-1/2 p-3 rounded-md border outline-none cursor-pointer ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`}>{months.map(m => <option key={m}>{m}</option>)}</select><select name="endYear" className={`w-1/2 p-3 rounded-md border outline-none cursor-pointer ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`}>{years.map(y => <option key={y}>{y}</option>)}</select></div></div>
                  </div>
              ) : (
                  <div><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>Joining Date*</label><div className="flex gap-4"><select name="joinMonth" className={`w-1/2 p-3 rounded-md border outline-none cursor-pointer ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`}>{months.map(m => <option key={m}>{m}</option>)}</select><select name="joinYear" className={`w-1/2 p-3 rounded-md border outline-none cursor-pointer ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`}>{years.map(y => <option key={y}>{y}</option>)}</select></div></div>
              )}
              <div><label className={`block text-xs font-bold mb-2 ${isLight ? "text-gray-700" : "text-[#E6E6E6]"}`}>{activeModal === 'education' ? 'Description*' : 'Job Profile Description*'}</label><textarea name="description" className={`w-full h-[80px] p-3 rounded-md border outline-none resize-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} required></textarea></div>
              <div className="flex justify-end gap-4 pt-4"><button type="button" onClick={() => setActiveModal(null)} className={`px-6 py-2 rounded font-medium ${isLight ? "bg-gray-200" : "bg-[#333] text-white"}`}>Cancel</button><button type="submit" className="px-6 py-2 rounded bg-[#B45CFF] text-white">Save</button></div>
           </form>
        </ModalWrapper>
      )}

    </div>
  );
};

const SectionCard = ({ title, onAdd, children, isLight }) => (
  <div className={`rounded-xl border p-6 ${isLight ? "bg-white border-gray-100 shadow-sm" : "bg-[#333233] border-transparent shadow-md"}`}>
    <div className="flex justify-between items-center mb-6"><h3 className={`text-lg font-bold ${isLight ? "text-gray-900" : "text-white"}`}>{title}</h3><button onClick={onAdd} className={`w-8 h-8 rounded flex items-center justify-center border transition-colors ${isLight ? "border-purple-200 text-purple-600 hover:bg-purple-50" : "border-[#B45CFF] text-[#B45CFF] hover:bg-[#B45CFF] hover:text-white"}`}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg></button></div><div className="flex flex-col gap-0">{children}</div>
  </div>
);

const ListItem = ({ title, subtitle, meta, desc, isLight }) => (
  <div className={`flex gap-4 py-5 border-b last:border-0 ${isLight ? "border-gray-100" : "border-[#ffffff08]"}`}>
    <div className="flex-grow"><div className="flex justify-between items-start"><div><h4 className={`text-base font-bold ${isLight ? "text-gray-900" : "text-[#E6E6E6]"}`}>{title}</h4><p className={`text-sm mt-0.5 ${isLight ? "text-gray-500" : "text-[#BDBDBD]"}`}>{subtitle}</p><p className={`text-xs mt-0.5 ${isLight ? "text-gray-400" : "text-[#888]"}`}>{meta}</p></div><button className={`p-2 rounded border transition-colors ${isLight ? "border-purple-100 text-purple-500 hover:bg-purple-50" : "border-[#B45CFF] text-[#B45CFF] hover:bg-[#B45CFF] hover:text-white"}`}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button></div><p className={`text-sm mt-3 leading-relaxed line-clamp-2 ${isLight ? "text-gray-600" : "text-[#E6E6E6]"}`}>{desc}</p></div>
  </div>
);

const ModalWrapper = ({ onClose, title, children, isLight }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={onClose}></div>
    <div className={`relative w-full max-w-[920px] rounded-[20px] shadow-2xl p-8 animate-fade-in-up max-h-[90vh] overflow-y-auto ${isLight ? "bg-white" : "bg-[#1f1f1f] border border-[#333]"}`}>
      <div className="flex justify-between items-start mb-8"><h3 className={`text-[28px] font-bold ${isLight ? "text-gray-900" : "text-white"}`}>{title}</h3><button onClick={onClose} className={`p-2 rounded-full ${isLight ? "bg-gray-100 text-gray-500 hover:bg-gray-200" : "bg-[#333] text-[#888] hover:bg-[#444]"}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button></div>{children}
    </div>
  </div>
);

export default TalentProfileDetails;