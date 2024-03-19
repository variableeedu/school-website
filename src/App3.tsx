import { Header } from "./header";
import { Header2 } from "./header-2";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Heading } from "./heading";
import { StaffCard } from "./staff-card";
import { SiWhatsapp } from "react-icons/si";
import { Submit } from "./submit";
import { LogoPage } from "./logo";

function App3() {
  return (
    <div className="">
      <Header />
      <Header2 title="Management" description="Management" />
      <div className="p-8 flex flex-col space-y-10">
        <div className=" flex space-x-12  ">
          <div className="space-y-4">
            <div className="   ">
              <Heading title=" THE FOUNDER" />
              <div className=" pl-10  text-[21px] font-medium">
                MR.LOREM IPSUM
              </div>
            </div>
            <div className="space-y-4 ">
              <div className="  text-[23px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores quia ex voluptas soluta dignissimos minus dolorem
                provident nulla perferendis. Alias libero dolor soluta culpa
                commodi possimus delectus distinctio assumenda, totam officiis
                commodi possimus delectus distinctio assumenda, totam officiis
                hic? Quo quae ipsa id consectetur ab expedita reprehenderit
                dolore enim laudantium facere, hic odit corporis unde iste
                dolore enim laudantium facere, hic odit corporis unde iste
                aspernatur nesciunt obcaecati tenetur dolores commodi explicabo.
              </div>
              <div className="   flex  space-x-9">
                <FaFacebook className="text-blue-700" size={26} />
                <img className="h-6" src="instagram.png" alt="" />
                <FaWhatsapp className="text-green-600" size={27} />
                <FaTwitter className="text-blue-500" size={27} />
              </div>
            </div>
          </div>
          <img className="h-[500px] w-[600px]" src="3p1.png" alt="" />
        </div>
      </div>
      <div className="p-8 bg-gray-200">
        <Heading title="MEET OUR MANAGEMENT" />
        <div className=" flex pt-10 p-20 border-2 ">
          <StaffCard
            icon={SiWhatsapp}
            fbsrc="facebook.png"
            imgsrc="6.png"
            igsrc="instagram.png"
            title="Netwon Repsum"
            description="Headmaster"
          />
          <StaffCard
            icon={SiWhatsapp}
            fbsrc="facebook.png"
            imgsrc="7.png"
            igsrc="instagram.png"
            title="Netwon Repsum"
            description="Headmaster"
          />
          <StaffCard
            icon={SiWhatsapp}
            fbsrc="facebook.png"
            imgsrc="8.png"
            igsrc="instagram.png"
            title="Netwon Repsum"
            description="Headmistress"
          />
        </div>
        <Heading title="MEET OUR STAFF" />
        <div className="">
          <div className="flex pt-9">
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="1.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Teacher"
            />
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="2.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Teacher"
            />
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="3.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Teacher"
            />
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="4.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Teacher"
            />
          </div>
          <div className=" flex pt-10 p-20 border-2 ">
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="9.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Headmaster"
            />
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="12.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Headmaster"
            />
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="11.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Headmistress"
            />
          </div>
        </div>
        <div className="">
          <Heading title="MEET OUR NON-STAFF" />
          <div className="flex pt-10">
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="17.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Headmistress"
            />{" "}
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="13.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Headmistress"
            />{" "}
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="14.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Headmistress"
            />{" "}
            <StaffCard
              icon={SiWhatsapp}
              fbsrc="facebook.png"
              imgsrc="15.png"
              igsrc="instagram.png"
              title="Netwon Repsum"
              description="Headmistress"
            />
          </div>
        </div>
      </div>
      <Submit/>
      <LogoPage/>
    </div>
  );
}
export default App3;
