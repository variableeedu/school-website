import { Button } from "./button";
import { Activies } from "./activies";
export function MainActivity() {
  return (
    <>
      <div className=" p-8 bg-clip-bg bg-transparent bg-gradient-to-r from-gray-300 to-gray-300">
        <div className="space-y-8">
          <div className="  font-bold text-[35px]">
            <div>Lorem Ipsum dolor</div>
            <div className="text-blue-400">sit amet.</div>
          </div>
          <div className="flex  space-x-20">

          <div className=" w-[500px] text-[27px]">
            Lorem ipsum, dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </div>
          <img  className="rounded-full pb-28 h-[500px] w-[500px] "src="pro1.png" alt="" />
          </div>
          <Button title="More Info  →" />
        </div>
        <div className=" pt-20 pb-12 text-[37px] flex  font-medium space-x-4">
          <div className="">SOME OF OUR </div>
          <div className=" text-blue-300"> ACTIVIES</div>
        </div>
        <div className=" flex  justify-between">
          <Activies />
        </div>
      </div>
    </>
  );
}
