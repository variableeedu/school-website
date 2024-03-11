import { useState } from "react";
import { Header } from "./header";
import { Button } from "./button";
import { MdSportsVolleyball } from "react-icons/md";
import { FiMusic } from "react-icons/fi";
import { FaPaintBrush } from "react-icons/fa";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col   w-full h-screen">
      <Header />

      <div className=" p-8 bg-gray-200">
        <div className="space-y-8">
          <div className="  font-bold text-[35px]">
            <div>Lorem Ipsum dolor</div>
            <div className="text-blue-400">sit amet.</div>
          </div>
          <div className=" text-[27px]">
            Lorem ipsum, dolor sit amet, consectetur <br />
            adipisicing elit, sed do eiusmod temp
            <br /> incididunt ut labore et dolore magna <br />
            aliqua. Ut enim ad minim veniam.{" "}
          </div>
          <Button />
        </div>
        <div className=" pt-20 pb-12 text-[35px] flex  font-medium space-x-4">
          <div className="">SOME OF OUR </div>
          <div className=" text-blue-300"> ACTIVIES</div>
        </div>
        <div className="  space-y-5">
          <MdSportsVolleyball className="h-14 rounded-2xl  p-3 w-14 bg-blue-400 text-white" />
          <div className=" font-bold text-[30px]"> Sport</div>
          <div className="text-[22px]">
            {" "}
            Sports are games such as football
            <br /> and other leisure activities which <br /> need physical
            effort and skill
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
{
  /* <FiMusic />
<FaPaintBrush /> */
}
