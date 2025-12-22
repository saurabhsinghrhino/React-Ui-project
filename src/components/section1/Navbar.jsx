import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <h4 className="bg-black text-white px-7 uppercase py-3 rounded-full text-sm">
        Target Audience
      </h4>
      <button className="bg-gray-300 text-black px-7 py-3 rounded-full uppercase tracking-wider text-xs">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
