import Link from "next/link";
import "@/app/globals.css";
import { MenuComponent } from "./Menu";
import { SearchInputComponent } from "./SearchInput";
import Logo from "@/../public/logo.png";
import Image from "next/image";

export const HeaderComponent = () => {

    return (
        <header className="flex items-center p-3 gap-3 justify-between border-b border-black/15 bg-slate-200">
            <div>
                <Link className="text-2xl self-center" href={"/"}>
                    <h1 className="flex gap-1">MyFood <Image src={Logo} alt="logo" width={35} height={30} /></h1>
                </Link>
            </div>

            <div className="flex items-center gap-3">
                <SearchInputComponent />

                <MenuComponent />
            </div>
        </header>
    )
}