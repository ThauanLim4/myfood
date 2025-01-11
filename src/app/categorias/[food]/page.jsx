"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar, FaTruck } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { StoreComponent } from "@/components/ComponentsDefault/storeComponents";
import { fetchAllStores } from "@/app/api/utils/utilitys";
import { CloseDefault, HeaderDefault } from "@/components/ComponentsDefault/header";
import '@/app/globals.css';
import { PopUpComponent } from "@/components/ComponentsDefault/popUpComponent";

const FoodCategory = () => {
    const [url, setUrl] = useState('');
    const [storesType, setStoresType] = useState([]);
    const [openModalfilters, setOpenModalfilters] = useState(false);
    const [Mensage, setMensage] = useState('');
    const [storesTypeFiltered, setStoresTypeFiltered] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        setUrl(window.location.href.split('/').pop())
        const fetchstores = async () => {
            try {
                const result = await fetchAllStores();
                const resultFilted = await result.filter(i => i.type === url);
                if (resultFilted.length >= 1) {
                    setStoresType(resultFilted);
                } else {

                }
                console.log(resultFilted)
            } catch (erro) { }
        }
        fetchstores();
    }, [url]);



    const searchItemByFreightFree = async () => {
        setOpenModalfilters(false);
        console.log(storesType)
        const resultFilted = storesType.filter(i => i.freight === 0);
        if (resultFilted) {
            console.log("lojas encontradas baseadas nos filtros", resultFilted);
            setStoresTypeFiltered(resultFilted);
        }
    }
    const searchItemByAvaliations = () => {
        setOpenModalfilters(false);
        console.log(storesType)
        const resultFilted = storesType.sort((i, j) => j.stars - i.stars);
        if (resultFilted) {
            console.log("lojas encontradas baseadas nos filtros", resultFilted);
            setStoresTypeFiltered(resultFilted);
        }

    }

    return (
        <div className="max-w-screen-lg mx-auto">
            <HeaderDefault nameLocation={url} />
            <div className="flex justify-around items-center mt-3">
                <div className="flex items-center gap-1 max-w-56">
                    <button onClick={() => setOpenModalfilters(true)} className="flex items-center gap-1 font-semibold">Ordernar por <IoIosArrowDown /></button>

                    {openModalfilters &&
                        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10">
                            <div className=" fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 h-3/4 max-w-screen-md bg-verdeclaro z-10">
                                <CloseDefault functionClose={() => setOpenModalfilters(false)} nameLocation="Filtrar Lojas" />
                                <div className="p-5 flex flex-col items-center gap-5 text-lg">
                                    <button onClick={searchItemByFreightFree} className="btnDefault1 flex flex-col items-center">
                                        <FaTruck /> Frete Grátis
                                    </button>
                                    <button onClick={searchItemByAvaliations} className="btnDefault1 flex flex-col items-center">
                                        <FaStar /> Avaliações
                                    </button>

                                </div>
                            </div>
                        </div>}

                </div>
            </div>
            <div className="mx-auto gap-5 mt-5">
                {storesType && 
                <>
                    {storesTypeFiltered.length === 0 ? <StoreComponent variableName={storesType} /> : ""}
                </>}

                {storesTypeFiltered && 
                <>
                    {storesTypeFiltered.length > 0 ? <StoreComponent variableName={storesTypeFiltered} /> : ""}
                </>}
            </div >
        </div>
    )
}

export default FoodCategory;