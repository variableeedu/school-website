// import img1 from "./assets/painting.png"
import { BlogCard } from "./blog-card";
import { FaComments } from "react-icons/fa";

export function Blog() {
  return (
    <>
      <BlogCard
      title="September 10, 2021 by Admin"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
          culpa veritatis, ratione numquam magni iure quaerat tempore esse
          cumque,  optio eligendi molestiae!"
          icon={FaComments }
          number={10}
        src="painting1.png"/>
        
        
      <BlogCard
      title="September 10, 2021 by Admin"

        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
        culpa veritatis, ratione numquam magni iure quaerat tempore esse
        cumque,  optio eligendi molestiae!"
          icon={FaComments }
          
          number={13}
          

          src="play1.png"
      />
      <BlogCard
      title="September 10, 2021 by Admin"

        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
        culpa veritatis, ratione numquam magni iure quaerat tempore esse
        cumque, optio eligendi molestiae!"
        icon={FaComments }
        number={10}

        src="music.png"
      />
    </>
  );
}
