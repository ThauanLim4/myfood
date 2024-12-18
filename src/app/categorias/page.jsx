import Link from "next/link";
import "@/app/globals.css";
import { itensCategories } from "@/data/categories";


const HomeInitial = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-32 h-28";


    return (
        <div className="p-5">
            <div className="text-start flex flex-col gap-5">
                <h2 className="text-xl font-bold">Todas as <span className="text-verdeescuro">categorias</span></h2>
                <div className="grid grid-cols-1 items-center gap-5 w-full h-56">
                    {itensCategories.map((item, index) => {
                        return (
                            <div key={index} className="mx-auto max-h-48 h-44 py-3 px-5 border border-verdeescuro rounded-md shadow">
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

export default HomeInitial;