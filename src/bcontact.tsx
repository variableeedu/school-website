import { Button } from "./button";

export function BContact() {
  return (
    <>
      <div className=" flex flex-col p-10 bg-gray-200 space-y-8 justify-center items-center ">
        <div className="text-blue-500 text-[45px] font-serif">
          {" "}
          Join Us! Today
        </div>
        <div className="w-[1000px] text-[25px]  ">
          Rapkhan is an autstanding nursury & primary school targeting education
          System, helping Kides to read and write to establish strong identity
          on the internet with real developing Knowledge & understanding
        </div>

        <Button title="Contact us →" />
      </div>
    </>
  );
}
