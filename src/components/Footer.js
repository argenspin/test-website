import React from "react";
import ContactDetails from "./Footer-Components/ContactDetails";
import Description from "./Footer-Components/Description";
import Headline from "./Footer-Components/Headline";
import Links from "./Footer-Components/Links";
import SocialIcons from "./Footer-Components/SocialIcons";

function Footer() {
  return (
    <footer className="h-auto  bg-gray-800 flex flex-col md:flex-row space-y-5 md:space-x-20 items-start justify-start px-10 py-5 text-white">
      <div className="flex md:flex-col md:space-y-8 justify-start items-start space-x-2 h-full ">
        <div className="flex flex-col space-y-3">
          <Headline />
        </div>
        <div className="pl-5 flex items-start justify-start h-full">
          <Links />
        </div>
      </div>
      <div className="flex flex-col items-start md:h-56 md:justify-around space-y-5 w-full text-lg">
        <Description />
        <div className="flex items-center justify-between h-full  w-full md:px-6 py-1">
          <div className="flex items-center md:space-x-3 w-full ">
            <div className="p-3 font-semibold text-lg w-full">
              <ContactDetails data="+91-7894561230" type="phone" />
              <ContactDetails data="test@gmail.com" type="email" />
            </div>
          </div>
          <div className="hidden md:flex  md:flex-row md:space-x-4 ">
            <SocialIcons url="https://www.instagram.com/odoo.official/" />
            <SocialIcons url="https://twitter.com/Odoo" />
            <SocialIcons url="https://www.facebook.com/odoo/" />
          </div>
        </div>
        <div className="flex md:hidden justify-around items-center w-full  ">
          <SocialIcons url="https://www.instagram.com/odoo.official/" />
          <SocialIcons url="https://twitter.com/Odoo" />
          <SocialIcons url="https://www.facebook.com/odoo/" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
