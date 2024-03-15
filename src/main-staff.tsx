import { StaffCard } from "./staff-card";
import { SiWhatsapp } from "react-icons/si";

export function MainStaff() {
  return (
  <div className="p-8 space-y-12    bg-gray-100">
    <div className="  text-[37px] flex  font-medium space-x-4">
      <div className="">MEET OUR </div>
      <div className=" text-blue-300"> STAFF</div>
    </div>
    

    <div className="flex">
      <StaffCard
        title="Newton M.Raphson"
        description="Headmistress"
        icon={SiWhatsapp}
        fbsrc="facebook.png"
        igsrc="instagram.png"
        imgsrc="1.png"
      />
      <StaffCard
        title="Newton M.Raphson"
        description="Headmistress"
        icon={SiWhatsapp}
        fbsrc="facebook.png"
        igsrc="instagram.png"
        imgsrc="2.png"
      />
      <StaffCard
        title="Newton M.Raphson"
        description="Headmistress"
        icon={SiWhatsapp}
        fbsrc="facebook.png"
        igsrc="instagram.png"
        imgsrc="3.png"
      />
      <StaffCard
        title="Newton M.Raphson"
        description="Headmistress"
        icon={SiWhatsapp}
        fbsrc="facebook.png"
        igsrc="instagram.png"
        imgsrc="4.png"
      />
      </div>
    </div>
  );
}
