import React from "react";
import bannerImage from "./../svg/bannerImage";

function Home() {
  return (
    <div className="relative min-h-screen  overflow-hidden bg-gray-300 bg-img ">
      <div className="">
        {/* <div className=" z-0 ">{bannerImage}</div> */}
        <div className="bg-gray-200 h-auto w-[650px] z-1 absolute bottom-40 left-44 px-6 py-8 shadow-2xl rounded flex flex-col items-start space-y-4 pr-16">
          <h1 className="text-4xl font-bold text-center">ERP Solutions</h1>
          <p className="text-gray-500 text-2xl">
            Customised Odoo implementation with business requirements and
            training
          </p>
          <div className=" bg-blue-500/80 shadow-sm rounded-full px-4 py-1 text-white hover:text-gray-200 cursor-pointer duration-300 font-semibold text-xl">
            Contact US
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
