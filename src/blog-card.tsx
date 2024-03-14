import { IconType } from "react-icons";
export function BlogCard(props: {
  title: string;
  description: string;
  src: any;
  icon: IconType;
  number: number;
}) {
  return (
    <>
      <div className="w-[360px]  space-y-4 ">
        <img className="rounded-lg " src={props.src} alt="" />
        <div>{props.description}</div>
        <div className=" font-bold">{props.title}</div>

        <div className=" font-bold flex    text-[30px]">
          <props.icon size={40} />

          {props.number}
        </div>
      </div>
    </>
  );
}
