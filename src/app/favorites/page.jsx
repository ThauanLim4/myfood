"use client";
import { HeaderDefault } from "@/components/ComponentsDefault/header";
import { useEffect, useState } from "react";
import { fetchAllFavorites } from "../api/utils/utilitys";
import { WishListComponent } from "@/components/ComponentsDefault/wishListComponent";
import empty from "../../../public/empty.svg"
import Image from "next/image";

const Favorites = () => {

    const [itensFav, setItensFav] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchFavs = async () => {
            try {
                const result = await fetchAllFavorites();
                const resultFilted = await result.filter(favs => favs.user_authentication_key === token)
                setItensFav(resultFilted);
                console.log(resultFilted);
            } catch (erro) {
                console.log("erro ao buscar o banco de dados");
            }

        }
        fetchFavs();
    }, []);

    return (
        <div className="h-full flex flex-col gap-5 max-w-screen-lg mx-auto">
            <HeaderDefault nameLocation={"Favoritos"} />
            <div >

                {
                    itensFav.length >= 1
                        ? <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 items-center justify-center mt-auto p-5 gap-5">
                            <WishListComponent variableName={itensFav} />
                        </div>
                        : <div className="flex flex-col items-center justify-center h-full gap-5 mx-auto">
                            <Image src={empty} className="w-full max-w-xs mx-auto" alt="SVG representando que nada foi encontrado" />
                            <h3 className="text-xl font-semibold">Nada favoritado ainda...</h3>
                        </div>

                }
            </div>
        </div>
    )
}

export default Favorites;