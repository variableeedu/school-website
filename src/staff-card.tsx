import { SiWhatsapp } from "react-icons/si";

export function StaffCard(){

     return <div className="     justify-evenly flex ">
     <div className=" flex flex-col  items-center  w-[400px] space-y-2 ">
       <img className="  h-34 w-36 bg-pink-200" src="girl.png" alt="" />
       <div className="font-bold  text-[25px]">Newton M.Raphson </div>
       <div className="text-blue-300">Headmistress </div>
       <div className=" flex space-x-5">
         <img className="h-7 w-7" src="facebook.png" alt="" />
         <img className="h-7 w-7" src="instagram.png" alt="" />
         <SiWhatsapp size={27} className="text-green-500" />
       </div>
     </div>
     </div>
}