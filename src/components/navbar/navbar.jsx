import Link from "next/link";
import { SearchHeader } from "./Search";
import { Location } from "./location";

import "@/app/globals.css";

export const Navbar = () => {
    return (
        <header className="flex p-3 gap-3 justify-between bg-verdeclaro">
            <Link className="text-2xl" href={"/"}><h1>MyFood</h1></Link>

            <div className="block max-sm:hidden w-full max-w-2xl">
                <SearchHeader />
            </div>

            <div className="flex items-center gap-3">
                <Location />
            </div>
        </header>
    )
}