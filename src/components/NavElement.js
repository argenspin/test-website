import React from "react";

function NavElement({ name }) {
  return (
    <div className=" text-gray-500 hover:text-gray-200 cursor-pointer duration-300 font-semibold text-xl">
      {name}
    </div>
  );
}

export default NavElement;
