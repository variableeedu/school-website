export function GarlleryCard(props: {
  asrc: string;
  bsrc: string;
  csrc: string;
  dsrc: string;
  esrc: string;
  fsrc: string;
}) {
  return (
    <>
      <div className="flex    flex-col space-y-8  ">
        <div className=" flex h-[470px] space-x-8">
          <img className=" w-[500px]  " src={props.csrc} alt="" />
          <img className=" w-[750px] " src={props.asrc} alt="" />
        </div>
        <div className=" flex h-[480px] space-x-8">
          <img className="  w-[700px] " src={props.bsrc} alt="" />
          <img className=" w-[550px]  " src={props.dsrc} alt="" />
        </div>
        <div className=" flex h-[470px] space-x-8">
          <img className="w-[400px]  " src={props.esrc} alt="" />
          <img className=" w-[500px] " src={props.fsrc} alt="" />
          <img className=" w-[320px]  " src={props.dsrc} alt="" />
        </div>
      </div>
    </>
  );
}
