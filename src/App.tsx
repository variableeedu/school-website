import { useState } from "react";
import { Header } from "./header";
import { MainActivity } from "./main-acitvity";
import { MainGallery } from "./main-gallery";
import { MainBlog } from "./main-blog";
import { MainStaff } from "./main-staff";
import { Button } from "./button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col  w-full h-screen">
      <Header />
      <MainActivity />
      <MainBlog />
      <MainStaff />
      <MainGallery />
      <div className=" flex flex-col justify-center items-center ">
        <div className="text-blue-500 text-[40px] font-serif"> Join Us! Today</div>
        <div className="w-[800px] text-[20px] flex justify-center items-center">
        
          Rapkhan is an autstanding nursury & primary school targeting education
          System, helping Kides to read and write to establish strong identity
          on the internet with real developing  Knowledge & understanding
        </div>
        
      <Button title="Contact us →"/>
      </div>
    </div>
  );
}

export default App;
