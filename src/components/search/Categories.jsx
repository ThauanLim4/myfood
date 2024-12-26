import Link from "next/link";
import "@/app/globals.css";
import { itensCategories } from "@/data/categories";

export const CategoriesSearch = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-28 h-28";

    return (
        <div>
            <div className="text-start mt-10 flex flex-col gap-5">
                <h2 className="text-xl font-semibold">Categorias</h2>
                <div className="grid grid-cols-2 gap-5 w-full h-full">
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
                </div>
            </div>

        </div>
    )
}


