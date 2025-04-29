import React from "react";

const NavButton = ({ text, isActive, onClick }) => {
  return (
    <button 
   
      className={`px-4 py-2 rounded-lg cursor-pointer text-white font-medium transition-all duration-200 ${
        isActive
          ? "bg-[#141414] border border-[#262626] shadow-md"
          : "hover:bg-[#141414] hover:border-[#262626] border border-transparent"
      }`}
      
    >
      {text}
    </button>
  );
};

export default NavButton;
