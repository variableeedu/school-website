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
      <div className="flex    flex-col  ">
        <div className=" flex space-x-4">
          <img className=" w-[500px] " src={props.csrc} alt="" />
          <img className=" w-[770px]" src={props.asrc} alt="" />
        </div>
        <img className=" h-14 w-[400px] " src={props.bsrc} alt="" />
        <img className="  " src={props.dsrc} alt="" />
        <img className="  " src={props.esrc} alt="" />
        <img className="  " src={props.fsrc} alt="" />
      </div>
    </>
  );
}
