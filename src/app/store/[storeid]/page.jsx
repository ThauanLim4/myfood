"use client";
import { useEffect, useState } from "react";
import '@/app/globals.css';
import { FaStar, FaCircle } from "react-icons/fa";
import { StoreItems } from "@/components/menuFromStore/menuStore";


const ItemFood = () => {
    const [url, setUrl] = useState('');
    const [store, setStore] = useState([]);
    const nowDate = new Date();
    let hour = nowDate.getHours().toFixed(2);

    useEffect(() => {
        const currentUrl = window.location.href.split('storeid=').pop().split('?')[0].toLowerCase();
        setUrl(currentUrl);
        const fetchstore = async () => {
            try {
                const response = await fetch(`/api/mysql/stores`);
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                const result = await response.json();
                const resultFilted = await result.filter(store => store.storeIndentification === url)
                setStore(resultFilted);
            } catch (erro) {
                console.log("erro ao buscar o banco de dados");
            }

        }
        fetchstore();
    }, [url])

    return (
        <div className="max-w-screen-lg mx-auto">
            {store.map((str, ind) => {
                return (
                    <div key={ind} className="">
                        <div>
                            <img className="w-full max-h-36 object-cover" src={str.storeImages} alt="" />
                        </div>
                        <div className="p-5 border-b-2 border-gray-500/25">
                            <div className="flex gap-3">
                                <img className="roundedFull" src={str.storeImages} alt="" />
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-xl font-semibold flex gap-3">{str.storeName}
                                        {hour >= str.openIN && hour <= str.closeIN
                                            ? <span className="flex items-center gap-2"> <FaCircle className="text-green-500 text-xs" /></span>
                                            : <span className="flex items-center gap-2"><FaCircle className="text-red-500 text-xs" /></span>}
                                        <span className="bg-gray-500/25 text-xs">
                                        </span></h2>
                                    <span className="flex items-center gap-1">
                                        <FaStar className="text-yellow-300" />{str.stars} avaliação
                                    </span>
                                    
                                    <h3>{str.freight >= 1 ? <>valor mínimo <strong>R$ {str.freight.toFixed(2)}</strong></> : "sem valor mínimo"} <br />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="p-5">
                <StoreItems />
            </div>
        </div>
    )
}

export default ItemFood;