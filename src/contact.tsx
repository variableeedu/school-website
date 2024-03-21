import { Button } from "./button";
import { Header } from "./header";
import { Header2 } from "./header-2";
import { Heading } from "./heading";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { Submit } from "./submit";
import { LogoPage } from "./logo";
export function App6() {
  return (
    <div className="">
      <Header />
      <Header2 title="Contact" description="Contact" />
      <div className="p-8">
        <div className=" flex p-8  space-x-14 bg-blue-400">
          <div className=" flex  space-y-5 flex-col">
            <Heading title="CONTACT INFO" className=" text-white" />
            <div className="bg-white p-7  flex space-x-10 rounded-lg h-[180px] w-[490px]">
              <BiSolidPhoneCall size={140} className="text-gray-300" />
              <div className="text-[23px] space-y-2 w-[210px]  ">
                <div className="font-medium"> call us directly on </div>
                <div className=" text-[20px]">
                  +912 234 834 324 +922 233 454 765
                </div>
              </div>
            </div>
            <div className="bg-white p-7 flex space-x-10 rounded-lg h-[180px] w-[490px]">
              <MdMarkEmailUnread size={140} className="text-gray-300" />
              <div className="text-[22px] space-y-2 w-[210px]  ">
                <div className="font-medium"> Mail us directly on</div>
                <div className=" text-[20px]">
                  Info20@gmail.com Info20@gmail.com
                </div>
              </div>
            </div>
            <div className="bg-white p-7 flex space-x-10 rounded-lg h-[180px] w-[490px]">
              <ImLocation2 size={140} className="text-gray-300" />
              <div className="text-[22px] space-y-2 w-[210px]  ">
                <div className="font-medium">Find us</div>
                <div className=" text-[20px]">
                  4 low castle agbole aro app. Fidelity bank amida, abeakuta.
                </div>
              </div>
            </div>
          </div>
          <div className="flex  space-y-5 flex-col">
            <Heading title="GET IN TOUCH" className="text-white" />
            <div className="bg-white rounded-lg h-[70px] w-[670px]"></div>
            <div className="bg-white rounded-lg h-[70px] w-[670px]"></div>
            <div className="bg-white rounded-lg h-[70px] w-[670px]"></div>
            <div className="bg-white rounded-lg h-[210px] w-[670px]"></div>
            <div className="  flex pt-4 justify-end">
              <Button title="Send message" className="border-2 border-white" />
            </div>
          </div>
        </div>
        <img className=" pt-8 w-full h-[700px]" src="map.png" alt="" />
      </div>
      <Submit/>
      <LogoPage/>
    </div>
  );
}
export default App6;
