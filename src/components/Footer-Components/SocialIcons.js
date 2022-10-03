import React from "react";
import { SocialIcon } from "react-social-icons";

function SocialIcons({ url }) {
  const style = {
    border: "1px solid white",
    borderRadius: "100%",
  };
  return (
    <div className="hover:bg-gray-500 text-green-600 rounded-full duration-300">
      <SocialIcon
        fgColor="white"
        bgColor="transparent"
        style={style}
        url={url}
      />
    </div>
  );
}

export default SocialIcons;
