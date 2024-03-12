import { IconType } from "react-icons";

export function ActivityCard(props: {
  title: string;
  description: string;
  icon: IconType;
}) {
  return (
    <>
      <div className=" w-[370px]  space-y-5">
        <props.icon className="h-14 rounded-2xl  p-3 w-14 bg-blue-400 text-white" />
        <div className=" font-bold text-[30px]"> {props.title}</div>
        <div className="text-[21px]">
          {props.description}
        </div>
      </div>
    </>
  );
}
