import { Button } from "./button";
import { GarlleryCard } from "./gallery-card";

export function MainGallery({}) {
  return (
    <>
      <div className="p-8   space-y-10  ">
        <div className="  text-[37px] flex  font-medium space-x-4">
          <div className="">FROM OUR </div>
          <div className=" text-blue-300"> GALLERY</div>
        </div>
        <GarlleryCard
          csrc="p3.png"
          asrc="p1.png"
          bsrc="p2.png"
          dsrc="p4.png"
          esrc="p5.png"
          fsrc="p6.png"
        />
        <Button title="More Photos →"/>
      </div>
    </>
  );
}
