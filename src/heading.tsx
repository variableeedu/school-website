import { GoDotFill } from "react-icons/go";

export function Heading( props:{title:string;
}){
    return <>
     <div className={`flex space-x-3  text-blue-400`}>
              <GoDotFill size={25} className="h-20" />
              <div className="  text-[44px]"> {props.title}  </div>
              <GoDotFill  size={25} className="h-20" />
            </div>
    </>
}