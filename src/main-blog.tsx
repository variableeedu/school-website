import { Blog } from "./blog";
import { Button } from "./button";

export function MainBlog() {
  return (
    <div className="p-8 flex flex-col  space-y-12 ">
      <div className="   text-[37px] flex  font-medium space-x-4">
        <div className="">FROM OUR</div>
        <div className=" text-blue-300"> BLOG</div>
      </div>
      <div className="flex text-[22px] justify-between">
        <Blog />
      </div>
        <Button  title="More Articles →" />
    </div>
  );
}
