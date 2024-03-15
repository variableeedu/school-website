import { useState } from "react";
import { Header } from "./header";
import { MainActivity } from "./main-acitvity";
import { MainGallery } from "./main-gallery";
import { MainBlog } from "./main-blog";
import { MainStaff } from "./main-staff";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col  w-full h-screen">
      <Header />
      <MainActivity />
      <MainBlog />
      <MainStaff />
      <MainGallery />
    </div>
  );
}

export default App;
