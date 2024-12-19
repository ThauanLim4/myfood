import Link from "next/link";
import "@/app/globals.css";
import { FaArrowRight } from "react-icons/fa";
import { itensCategories } from "@/data/categories";


export const HomeInitial = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-32 h-28";


    return (
        <div>
            <div className="text-start">
                <h2 className="text-xl font-semibold">Categorias</h2>
                <div className="flex items-center gap-5 w-full h-56 max-sm:overflow-x-scroll max-md:overflow-x-scroll max-lg:overflow-x-scroll">
                    {itensCategories.map((item, index) => {
                        return (
                            <div key={index} className="hover:shadow-sombrainterna">
                                <Link href={`categorias/${item.category.trim().toLocaleLowerCase()}`} className="flex flex-col items-center gap-3">
                                    <div className={`${itensCategoriesClass} rounded-b-full`}>
                                        {item.img}
                                    </div>
                                    <h3 className="font-light hover:text-verdeescuro hover:cursor-pointer">{item.name}</h3>
                                </Link>
                            </div>
                        )
                    })}
                    <Link className="font-semibold flex items-center gap-2" href={"/categorias"}>tudo <FaArrowRight /> </Link>
                </div>
            </div>
        </div>
    )
}