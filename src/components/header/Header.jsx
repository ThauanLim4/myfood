import Link from "next/link";
// import { SearchHeader } from "./Search";
// import { Location } from "./location";
// import { NavbarDesktopComponent } from "./NavbarDesktop";


import "@/app/globals.css";
import { MenuComponent } from "./Menu";

export const HeaderComponent = () => {

    return (
        <header className="flex items-center p-3 gap-3 justify-between">
            <div>
                <Link className="text-2xl self-center" href={"/"}><h1>MyFood</h1></Link>
            </div>

            <div>
                <MenuComponent />
            </div>

            {/* <div className="block max-sm:hidden max-md:hidden w-full max-w-2xl">
                <SearchHeader />
            </div>

            <div className="block items-center gap-3 max-sm:hidden max-md:hidden">
                <NavbarDesktopComponent />
            </div>

            <div className="hidden max-sm:flex max-md:flexitems-center gap-3">
                <Location />
            </div> */}
        </header>
    )
}