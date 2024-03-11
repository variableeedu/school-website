import { WiMoonAltThirdQuarter } from "react-icons/wi";

export function Header(){
    return <>
    <div className="flex h-24   w-full p-8 text-[22px] space-x-20 border-2"> 
      <div className="">Rapkhen</div>
      <div className="">Home</div>
      <div className="">About us</div>
      <div className="">Management</div>
      <div className="">News & Event</div>
      <div className="">Gallery</div>
      <div className="">Contact  us</div> 
      <WiMoonAltThirdQuarter   className="h-10 w-10 rounded-full bg-gray-200" />
    </div></>
}