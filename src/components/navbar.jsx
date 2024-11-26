import {SlArrowDown} from "react-icons/sl";

export const Navbar = () =>{
    return (
        <header className="flex p-3 justify-between bg-verdeclaro">
            <h1 className="text-2xl">MyFood</h1>
            <div className="flex items-center gap-3 cursor-pointer">sua localização <SlArrowDown className="text-xs" /></div>
        </header>
    )
}