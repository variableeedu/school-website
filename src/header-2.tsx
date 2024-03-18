export function Header2 (props:{title:string
description:string}) {
  return (
    <>
      <div className=" p-16 text-white text-[20px] bg-blue-400">
        <div className=" text-[50px]">{props.title}</div>
        <div className=" flex space-x-3">
          <div className="">Home →</div>
          <div className="  font-bold ">{props.description}</div>
        </div>
      </div>
    </>
  );
}
