import { Header } from "./header";
import { Header2 } from "./header-2";
import { MdWatchLater } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Button } from "./button";
function App4() {
  return (
    <div className="">
      <Header />
      <Header2 title=" News & Event" description="News & Event" />
      <div className=" border-4 p-8">
        <div className="border-2 flex   space-x-10">
          <div className=" space-y-4">
            <img className="h-[600px] w-[2300px] " src="4p1.png" alt="" />
            <div className=" text-[25px] font-bold text-blue-400">
              RECENT EVENT
            </div>
            <div className="flex  space-x-16 text-[29px] font-bold">
              <div className=" flex  ">
                <BsFillPersonFill className="h-10" />
                <div className=" ">Admin</div>
              </div>
              <div className=" flex  ">
                <MdWatchLater className="h-10" />
                <div className="">December 10, 2023</div>
              </div>

              <div className=" flex  ">
                <FaComments className="h-10" />
                <div className="">No Comment</div>
              </div>
            </div>
            <div className=" text-[24px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              dolorem, possimus nemo veniam cupiditate dignissimos vel commodi
              id fugiat sed consectetur, ad sint ut repellendus libero officiis,
              minus in iste.
            </div>

            <Button title=" Read more →"
            className="text-[25px] h-[70px] " />
          </div>
          <div className="">
            <div className=" flex flex-col space-y-2 ">
              <img className="h-[250px] w-[410px] " src="4p2.png" alt="" />
              <div className=" font-bold text-[20px] text-blue-300">
                TOP STORY
              </div>
              <div className=" text-[24px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                debitis earum voluptatum molestiae nulla.
              </div>
              <div className="font-bold text-[20px] text-red-500">READMORE</div>
              <div className="pt-8 space-y-2">
                <img className="h-[250px] w-[410px] " src="4p3.png" alt="" />
                <div className=" font-bold text-[20px] text-blue-300">
                  TOP STORY
                </div>
                <div className=" text-[24px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="font-bold text-[20px] text-red-500">
                  READMORE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App4;
