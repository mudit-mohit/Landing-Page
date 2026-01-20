import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTheme } from "../../hooks/useTheme";

const Login = () => {
  const { isLight } = useTheme();
  const navigate = useNavigate();

  const DUMMY_USER = "admin";
  const DUMMY_PASS = "admin123";

  const [formData, setFormData] = useState({ id: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.id === DUMMY_USER && formData.password === DUMMY_PASS) {
      // ✅ 1. SAVE SESSION: Mark user as logged in
      localStorage.setItem("isAdminLoggedIn", "true");
      
      // 2. Redirect to Dashboard
      navigate("/vendor/dashboard");
    } else {
      setError("Invalid Login ID or Password");
    }
  };

  // ... (Rest of the design/JSX remains exactly the same)
  const pageBackground = {
    background: isLight 
      ? `
        radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        radial-gradient(circle at 100% 90%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        linear-gradient(to bottom, #f5f3ff, #f0f9ff, #fdf4ff)
      ` 
      : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh"
  };

  return (
    <div style={pageBackground} className="flex items-center justify-center w-full min-h-screen px-6">
      <Helmet>
        <title>Admin Login | GenSquad</title>
      </Helmet>

      <div className={`
        w-full max-w-[440px] p-8 sm:p-10 rounded-3xl shadow-2xl border animate-fade-in-up
        ${isLight 
          ? "bg-white border-white/50 shadow-purple-500/10" 
          : "bg-[#121212] border-white/10 shadow-black/50"
        }
      `}>
        <div className="text-center mb-10">
          <h1 className={`text-3xl font-space font-bold mb-2 ${isLight ? "text-gray-900" : "text-white"}`}>
            Welcome Back
          </h1>
          <p className={`text-sm ${isLight ? "text-gray-500" : "text-[#888]"}`}>
            Enter your credentials to access the dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-600" : "text-[#ccc]"}`}>Login ID</label>
            <div className={`flex items-center px-4 py-3 rounded-xl border transition-all focus-within:border-purple-500 ${isLight ? "bg-gray-50 border-gray-200" : "bg-[#1a1a1a] border-[#333]"}`}>
              <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="Enter Login ID" className={`w-full bg-transparent outline-none text-sm font-medium ${isLight ? "text-gray-900 placeholder-gray-400" : "text-white placeholder-[#666]"}`} />
            </div>
          </div>
          <div>
            <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-600" : "text-[#ccc]"}`}>Password</label>
            <div className={`flex items-center px-4 py-3 rounded-xl border transition-all focus-within:border-purple-500 ${isLight ? "bg-gray-50 border-gray-200" : "bg-[#1a1a1a] border-[#333]"}`}>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className={`w-full bg-transparent outline-none text-sm font-medium ${isLight ? "text-gray-900 placeholder-gray-400" : "text-white placeholder-[#666]"}`} />
            </div>
          </div>
          {error && <div className="text-red-500 text-xs font-bold text-center bg-red-500/10 py-2 rounded-lg">{error}</div>}
          <button type="submit" className="w-full py-3.5 rounded-xl bg-[#8b5cf6] hover:bg-[#7c4dff] text-white font-bold shadow-lg shadow-purple-500/30 transition-all active:scale-95 mt-2">Sign In</button>
        </form>
        
        <div className="mt-8 text-center"><p className={`text-xs ${isLight ? "text-gray-400" : "text-[#444]"}`}>Demo Access: <span className="font-mono">admin</span> / <span className="font-mono">admin123</span></p></div>
      </div>
    </div>
  );
};

export default Login;