import { CaretRight } from "phosphor-react";
import { useState } from "react";

interface FolderType{
    title: string;
    subtitle: string;
}

export function Folder(props: FolderType){

    const [open, setOpen] = useState(false);

    return(
        <aside className="flex flex-col lg:w-3/4 ms:w-11/12">
            <button 
                className="flex items-center text-left py-5 px-3 gap-5 bg-blue-600"
                onClick={()=> setOpen(!open)}
            >
                <span className={`${open ? "rotate-90" : "rotate-0"} duration-300`}>
                    <CaretRight size={28}/>
                </span>
                {props.title}
            </button>
            <span className={`${open ? "flex" : "hidden"} text-sm px-5 py-3 duration-500`}>
                {props.subtitle}
            </span>
        </aside>
    )
}