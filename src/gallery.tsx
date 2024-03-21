import { GarlleryCard } from "./gallery-card";
import { Header } from "./header";
import { Header2 } from "./header-2";
import { Heading } from "./heading";
import { Button } from "./button";
import { Submit } from "./submit";
import { LogoPage } from "./logo";
export function App5() {
  return (
    <div className=" max-w-[1400px] mx-auto">
      <Header />
      <Header2 title="Gallery" description="Gallery" />
      <div className="p-8">
        <Heading title="THE SCHOOL GALLERY" />
        <GarlleryCard
          csrc="p3.png"
          asrc="p1.png"
          bsrc="p2.png"
          dsrc="p4.png"
          esrc="p5.png"
          fsrc="p6.png"
        />
        <div className=" flex pt-8 justify-between">
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
      <Submit />
      <LogoPage />
    </div>
  );
}
export default App5;
