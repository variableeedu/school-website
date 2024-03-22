import { Button } from "./button";
import { Header } from "./header";
import { Header2 } from "./header-2";
import { MdWatchLater } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { Heading } from "./heading";
import { Submit } from "./submit";
import { LogoPage } from "./logo";

export function App7() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Header />
      <Header2
        title="News & Event"
        description="End of the session  party"
        text="News & event →"
      />
      <div className="p-8 space-y-3">
        <Button title=" ←  Back" className="text-[26px] w-44 pr-3" />
        <img className="" src="fun.png" alt="" />
        <div className="font-bold">TOP EVENT</div>
        <div className="flex  space-x-16 text-[29px] font-bold">
          <div className=" flex  ">
            <BsFillPersonFill className="h-10" />
            <div className=" ">Admin</div>
          </div>
          <div className=" flex  ">
            <MdWatchLater className="h-10" />
            <div className="">December 10, 2023</div>
          </div>

          <div className=" flex  ">
            <FaComments className="h-10" />
            <div className="">No Comment</div>
          </div>
        </div>
        <div className=" text-[24px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sed,
          est architecto rem, fuga sequi excepturi ipsa nihil error earum nam
          maxime similique quasi sint, iure sapiente reprehenderit. Voluptatem
          praesentium vel, ipsam, nulla, odit quae deleniti quibusdam est
          deserunt nemo illo velit. Culpa ullam doloribus, quia illo blanditiis
          laboriosam inventore provident labore nisi consectetur quis? Tempore,
          non nobis, id quidem odit quae dolore eos illum quas dolorum ducimus
          libero dicta aut iure amet rem eaque cupiditate sint sequi excepturi
          sed?
        </div>
        <div className="text-[24px] pt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, magni
          repellat in culpa dolores omnis porro consequatur nihil laborum quis
          nesciunt animi maxime quia neque rem exercitationem quae facere.
          Assumenda delectus molestiae esse maiores ex, corrupti sequi,
          aspernatur officia vitae fugit dolorum rerum eum iusto inventore
          voluptatum reiciendis adipisci tenetur? Ex suscipit expedita cumque
          odit nisi dolor eius mollitia accusamus minima impedit. Repellat dicta
          esse animi, recusandae eveniet eligendi temporibus quos? Est, officiis
          blanditiis nostrum eum similique molestias ut quasi ipsa dolor id
          ullam voluptatibus quas placeat quibusdam error animi, dignissimos
          doloribus labore ipsum quod.
        </div>
        <div className="pt-8">
          <Heading title="Leave A Reply" />
        </div>
        <div className=" font-medium text-[24px]">
          Your email address will not be published
        </div>
        <div className=" space-y-6">
          <div className="h-14 rounded-md bg-gray-300"></div>
          <div className="h-14 rounded-md bg-gray-300"></div>
          <div className="h-80 rounded-md bg-gray-300"></div>
        </div>
        <div className=" flex  justify-end pt-4">
          <Button title="Post Comment" />
        </div>
      </div>
      <Submit />
      <LogoPage />
    </div>
  );
}
export default App7;
