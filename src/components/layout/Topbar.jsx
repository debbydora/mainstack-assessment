import React from "react";

const Topbar = () => {
  return (
    <nav className="w-full py-4 px-[60px]">
      <div className="container flex justify-between items-center mx-auto ">
        <p className="text-fontblack text-xl leading-6 font-bold -tracking-[0.015em] ml-4 mt-0.5 lg:ml-0 lg:mt-0">
          Dashboard
        </p>
      </div>
    </nav>
  );
};

export default Topbar;
