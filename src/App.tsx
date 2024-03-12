import { useState } from "react";
import { Header } from "./header";
import { MainActivity } from "./main-acitvity";
import { Blog } from "./blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col  w-full h-screen">
      <Header />
      <MainActivity />
      <div className="p-8 flex flex-col  space-y-10 ">
        <div className="   text-[37px] flex  font-medium space-x-4">
          <div className="">FROM OUR</div>
          <div className=" text-blue-300"> BLOG</div>
        </div>
        <div className="flex text-[22px] justify-between">
        <Blog/>
      </div>
      </div >
    </div>
  );
}

export default App;
