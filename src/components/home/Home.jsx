import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import pizzas from "@/imgs/pizzas.png";
import pratos from "@/imgs/pratosFeitos.png";
import saladas from "@/imgs/saladas.png";
import lanches from "@/imgs/lanches.png";

export const HomeInitial = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-32 h-28";

    const itensCategories = [
        { id: 1, name: "pizzas", img: <Image className="imgs" width={100} height={100} src={pizzas} alt="foto de uma pizza" />, category: "pizzas"},
        { id: 2, name: "pratos feitos", img: <Image className="imgs" width={100} height={100} src={pratos} alt="foto de um prato feito" />, category: "pratos-feitos"},
        { id: 3, name: "saladas", img: <Image className="imgs" width={100} height={100} src={saladas} alt="foto de um prato de salada" />, category: "saladas"},
        { id: 4, name: "lanches", img: <Image className="imgs" width={100} height={100} src={lanches} alt="foto de um hamburguer" />, category: "lanches" },
    ]

    return (
        <div>
            <div className="text-end">
                <h2>Categorias</h2>
                <Link className="font-semibold " href={"/categorias"}>ver tudo</Link>
                <div className="flex items-center gap-5 mb-20 w-full h-56 max-sm:overflow-x-scroll">
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