import Link from "next/link";
import { SearchHeader } from "./Search";
import { Location } from "./location";
import { NavbarDesktopComponent } from "./NavbarDesktop";


import "@/app/globals.css";

export const Navbar = () => {

    return (
        <header className="flex items-center max-sm:grid max-md:grid grid-cols-2-cols p-3 gap-3 justify-between bg-verdeclaro">
            <div>
                <Link className="text-2xl self-center" href={"/"}><h1>MyFood</h1></Link>
            </div>

            <div className="block max-sm:hidden max-md:hidden w-full max-w-2xl">
                <SearchHeader />
            </div>

            <div className="block items-center gap-3 max-sm:hidden max-md:hidden">
                <NavbarDesktopComponent />
            </div>

            <div className="hidden max-sm:flex max-md:flexitems-center gap-3">
                <Location />
            </div>
        </header>
    )
}