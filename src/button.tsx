export function Button(props: { title: string }) {
  return (
    <>
      <div className="h-14 w-52 rounded-lg text-[20px] text-white flex justify-center items-center bg-blue-400">
        {props.title}
      </div>
    </>
  );
}
