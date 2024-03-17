import { IconType } from "react-icons";

export function StaffCard(props: {
  title: string;
  description: string;
  icon: IconType;
  fbsrc: string;
  igsrc: string;
  imgsrc: string;
}) {
  return (
    <div className="     justify-evenly  w-full  ">
      <div className=" flex flex-col  items-center   w-[320px] space-y-2 ">
        <img className="  h-34 w-36 rounded-full " src={props.imgsrc} alt="" />
        <div className="font-bold  text-[25px]">{props.title} </div>
        <div className="text-blue-300"> {props.description}</div>
        <div className=" flex space-x-5">
          <img className="h-7 w-7" src={props.fbsrc} alt="" />
          <img className="h-7 w-7" src={props.igsrc} alt="" />
          <props.icon size={27} className="text-green-500" />
        </div>
      </div>
    </div>
  );
}
