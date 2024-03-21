import { useState } from "react";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

export function Header() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="flex h-24 bg-gray-100   w-full p-8 text-[22px] space-x-20 ">
        <a className="">Rapkhen</a>
        <a href="/home" className="">
          Home
        </a>
        <a href="about" className="">
          About us
        </a>
        <a href="management" className="">
          Management
        </a>
        <a href="newsevent" className="">
          News & Event
        </a>
        <a href="gallery" className="">
          Gallery
        </a>
        <a href="contact" className="">
          Contact us
        </a>
        <WiMoonAltThirdQuarter className="h-10 w-10 rounded-full bg-gray-200" />
      </div>
    </>
  );
}
