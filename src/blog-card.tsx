import { IconType } from "react-icons";
export function BlogCard(props: {
  title: string;
  description: string;
  topic?: string;
  src: any;
  icon: IconType;
  number: number;
}) {
  return (
    <>
      <div className="w-[360px] text-[22px]   space-y-4 ">
        <img
          className="rounded-lg h-[400px] w-[400px] "
          src={props.src}
          alt=""
        />
        <div>{props.description}</div>
        <div className=" font-bold">{props.title}</div>
        <div className=" flex space-x-36 ">
          <div className=" font-bold flex    text-[30px]">
            <props.icon size={40} />

            {props.number}
          </div>
          <div className=" text-[15px] font-bold pt-3 text-red-500">
           {props.topic}
          </div>
        </div>
      </div>
    </>
  );
}
