"use client";
import HeaderDefault from "@/components/ComponentsDefault/header";
import { useEffect, useState } from "react";
import { fetchAllFavorites } from "../api/utils/utilitys";
import { StoreComponent } from "@/components/ComponentsDefault/storeComponents";
import empty_requests from "../../../public/empty_requests.svg"
import Image from "next/image";

const Favorites = () => {

    const [itensFav, setItensFav] = useState([]);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchFavs = async () => {
            try {
                const result = await fetchAllFavorites();
                const resultFilted = await result.filter(
                    favs => favs.user_authentication_key === token)
                setItensFav(resultFilted);
            } catch (erro) {
                console.log("erro ao buscar o banco de dados");
            }

        }
        fetchFavs();
    }, []);

    return (
        <div className="h-full flex flex-col gap-5">
            <HeaderDefault nameLocation={"Favoritos"} />
            <div className="flex items-center justify-center mt-auto">

                {
                    itensFav.length >= 1
                        ? <StoreComponent variableName={itensFav} />
                        : <div className="flex flex-col items-center justify-center h-full gap-5">
                            <Image src={empty_requests} className="w-full max-w-xs mx-auto" alt="SVG representando que nada foi encontrado" />
                            <h3 className="text-xl font-semibold">Sem pedidos ainda...</h3>
                        </div>

                }
            </div>
        </div>
    )
}

export default Favorites;