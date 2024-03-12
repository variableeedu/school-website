export function BlogCard(props: { 
  description: string 
  src:any
}) {
  return (
    <>
      <div className="w-[300px] space-y-4 ">
        <img  src={props.src} alt="" />
        <div>{props.description}</div>
      </div>
    </>
  );
}
