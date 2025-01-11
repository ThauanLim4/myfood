import Link from "next/link";
import "@/app/globals.css";
import { CategoriesSearch } from "@/components/search/Categories";
import { HeaderDefault } from "@/components/ComponentsDefault/header";


const HomeInitial = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-32 h-28";


    return (
        <div className="max-w-screen-lg mx-auto">
            <HeaderDefault nameLocation={"Categorias"} />
            <CategoriesSearch />
        </div>
    )
}

export default HomeInitial;