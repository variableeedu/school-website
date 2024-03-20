import { useState } from "react";
import { Header } from "./header";
import { MainActivity } from "./main-acitvity";
import { MainGallery } from "./main-gallery";
import { MainBlog } from "./main-blog";
import { MainStaff } from "./main-staff";
import { Contact } from "./contact";
import { LogoPage } from "./logo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col max-w-[1400px] mx-auto w-full h-screen">
      <Header />
      <MainActivity />
      <MainBlog />
      <MainStaff />
      <MainGallery />
      <Contact />
     <LogoPage/>
    </div>
  );
}

export default App;
