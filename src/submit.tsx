import { Button } from "./button";

export function Submit(){
    return<>
     <div className="flex  p-24 bg-gray-200 flex-col justify-center space-y-10 items-center">
        <div className=" text-blue-400  flex flex-col font-medium justify-center items-center text-[40px]   ">
          <div className=" ">JOIN OUR NEWSLETTER </div>
          <div className=" ">AND BE THE FIRST TO KNOW!</div>
        </div>
        <input
          type="email"
          className=" text-[27px] p-4 h-[90px] border-blue-400 rounded-lg  border-2 w-[1000px]"
        />
        <Button title="Submit" className="h-16 text-[28px]" />
      </div>
    </>
}