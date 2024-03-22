import { Header } from "./header";
import { Header2 } from "./header-2";
import { MdWatchLater } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Button } from "./button";
import { Heading } from "./heading";
import { BlogCard } from "./blog-card";
import { Submit } from "./submit";
import { LogoPage } from "./logo";
function App4() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Header />
      <Header2 title=" News & Event" description="News & Event" />
      <div className="  p-8">
        <div className=" flex   space-x-10">
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

            <Button title=" Read more →" className="text-[25px] h-[70px] " />
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
              <div className="font-bold text-[20px] text-red-500">
                READMORE ❯ ❯ ❯
              </div>
              <div className="pt-8 space-y-2">
                <img className="h-[250px] w-[410px] " src="4p3.png" alt="" />
                <div className=" font-bold text-[20px] text-blue-300">
                  TOP STORY
                </div>
                <div className=" text-[24px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="font-bold text-[20px] text-red-500">
                  READMORE ❯ ❯ ❯
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 bg-gray-100">
        <Heading title="LATEST NEWS & EVENT" />
        <div className="space-y-14">
          <div className=" flex justify-between">
            <BlogCard
              title="September 10, 2021 by Admin"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
          culpa veritatis, ratione numquam magni iure quaerat tempore esse
          cumque,  optio eligendi molestiae!"
              icon={FaComments}
              number={14}
              topic=" Read more ❯❯❯ "
              src="4p5.png"
            />
            <BlogCard
              title="September 10, 2021 by Admin"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
          culpa veritatis, ratione numquam magni iure quaerat tempore esse
          cumque,  optio eligendi molestiae!"
              icon={FaComments}
              number={16}
              src="4p6.png"
              topic=" Read more ❯❯❯ "
            />{" "}
            <BlogCard
              title="September 10, 2021 by Admin"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
          culpa veritatis, ratione numquam magni iure quaerat tempore esse
          cumque,  optio eligendi molestiae!"
              icon={FaComments}
              number={14}
              src="4p7.png"
              topic=" Read more ❯❯❯ "
            />
          </div>
          <div className="flex justify-between">
            <BlogCard
              title="September 10, 2021 by Admin"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
        culpa veritatis, ratione numquam magni iure quaerat tempore esse
        cumque,  optio eligendi molestiae!"
              icon={FaComments}
              number={15}
              topic=" Read more ❯❯❯ "
              src="painting1.png"
            />
            <BlogCard
              title="September 10, 2021 by Admin"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
        culpa veritatis, ratione numquam magni iure quaerat tempore esse
        cumque,  optio eligendi molestiae!"
              icon={FaComments}
              number={17}
              topic=" Read more ❯❯❯ "
              src="play1.png"
            />{" "}
            <BlogCard
              title="September 10, 2021 by Admin"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
        culpa veritatis, ratione numquam magni iure quaerat tempore esse
        cumque,  optio eligendi molestiae!"
              icon={FaComments}
              number={18}
              topic=" Read more ❯❯❯ "
              src=".png"
            />
          </div>
          <div className=" flex justify-between">
            <BlogCard
              title="September 10, 2021 by Admin"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
          culpa veritatis, ratione numquam magni iure quaerat tempore esse
          cumque,  optio eligendi molestiae!"
              icon={FaComments}
              number={15}
              topic=" Read more ❯❯❯ "
              src="4p8.png"
            />
            <BlogCard
              title="September 10, 2021 by Admin"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
          culpa veritatis, ratione numquam magni iure quaerat tempore esse
          cumque,  optio eligendi molestiae!"
              icon={FaComments}
              number={17}
              topic=" Read more ❯❯❯ "
              src="4p9.png"
            />{" "}
            <BlogCard
              title="September 10, 2021 by Admin"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
          culpa veritatis, ratione numquam magni iure quaerat tempore esse
          cumque,  optio eligendi molestiae!"
              icon={FaComments}
              number={18}
              topic=" Read more ❯❯❯ "
              src="4p10.png"
            />
          </div>
          <div className=" flex  justify-between">
            <div className=" flex space-x-[1px] ">
              <Button title="❮ Prev" className="w-[80px] rounded-r-none " />
              <Button title="Next ❯" className="w-[80px] rounded-l-none  " />
            </div>
            <div className="flex  space-x-[1px]">
              <Button title="Page" className="w-[80px] rounded-r-none " />
              <Button title="2 ⮟" className="w-[80px] rounded-l-none  " />
            </div>
          </div>
        </div>
      </div>
      <Submit />
      <LogoPage />
    </div>
  );
}
export default App4;
