import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";

export const Navbar = () => {
    return (
        <header className="flex p-3 justify-between bg-verdeclaro">
            <Link className="text-2xl" href={"/"}><h1>MyFood</h1></Link>
            <div className="flex items-center gap-3 cursor-pointer">sua localização <SlArrowDown className="text-xs" /></div>
        </header>
    )
}