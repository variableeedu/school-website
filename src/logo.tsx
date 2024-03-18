import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export function LogoPage(){
    return<>
     <div className=" flex flex-col text-white space-y-10 justify-center items-center p-10 bg-blue-400">
        <div className="text-[32px] font-bold">Logo</div>
        <div className="h-[2px] w-full bg-white "></div>
        <div className="flex  text-[24px] space-x-20 ">
          <div className="">Home</div>
          <div className="">About us</div>
          <div className="">Management</div>
          <div className="">News & Event</div>
          <div className="">Gallery</div>
          <div className="">Contact us</div>
        </div>
        <div className="   flex  space-x-12">
          <FaFacebook  size={28}/>
          <FaTwitter  size={28}/>
          <FaInstagram  size={28}/>
          <FaWhatsapp  size={28}/>
          <FaTelegramPlane  size={28}/>
        </div>
        <div className="">Copyright@ 2003. All Right Reserved</div>
      </div>
    </>
}