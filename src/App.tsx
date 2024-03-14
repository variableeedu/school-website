import { useState } from "react";
import { Header } from "./header";
import { MainActivity } from "./main-acitvity";
import { MainBlog } from "./main-blog";
import { SiWhatsapp } from "react-icons/si";
import { StaffCard } from "./staff-card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col  w-full h-screen">
      <Header />
      <MainActivity />
      <MainBlog />
      <div className="p-8 space-y-12   bg-gray-100">
        <div className="  text-[37px] flex  font-medium space-x-4">
          <div className="">MEET OUR </div>
          <div className=" text-blue-300"> STAFF</div>
        </div>

        <StaffCard />
      </div>
    </div>
  );
}

export default App;
