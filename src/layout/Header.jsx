import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full h-[87px] flex items-center justify-between px-5 z-20">
      <img src="/logo.png" alt="logo" />

      <button>
        <img src="/menu-button-temp.png" alt="toggle menu" />
      </button>
    </div>
  );
};

export default Header;
