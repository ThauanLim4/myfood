import Link from "next/link";
import "@/app/globals.css";
import { itensCategories } from "@/data/categories";


export const HomeInitial = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-32 h-28";


    return (
        <div>
            <div className="text-end">
                <h2>Categorias</h2>
                <Link className="font-semibold " href={"/categorias"}>ver tudo</Link>
                <div className="flex items-center gap-5 w-full h-56 max-sm:overflow-x-scroll">
                    {itensCategories.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link href={`categorias/${item.category.trim().toLocaleLowerCase()}`}>
                                    <div className={`${itensCategoriesClass} rounded-b-full`}>
                                        {item.img}
                                        <h3 className="text-xl font-medium">{item.name}</h3>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}