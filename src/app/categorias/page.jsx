import Link from "next/link";
import "@/app/globals.css";
import { CategoriesSearch } from "@/components/search/Categories";


const HomeInitial = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-32 h-28";


    return (
        <div className="p-5">
            <CategoriesSearch />
        </div>
    )
}

export default HomeInitial;