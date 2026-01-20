import React from "react";
import { useTheme } from "../../../../hooks/useTheme";
// 1. Import Form
import TalentForm from "./TalentForm";

const AllTalent = () => {
  const { isLight } = useTheme();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10">
        <h1 className={`text-3xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
          All Talent
        </h1>
        <p className={`text-sm mt-1 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
          Manage and edit your talent profiles here.
        </p>
      </div>

      {/* 2. RENDER THE FORM */}
      <TalentForm />
      
    </div>
  );
};

export default AllTalent;