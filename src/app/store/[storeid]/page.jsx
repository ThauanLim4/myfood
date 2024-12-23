"use client";
import { useEffect, useState } from "react";
import '@/app/globals.css';
import { FaStar, FaCircle } from "react-icons/fa";
import { StoreItems } from "@/components/foodFromStores/FoodStore";


const ItemFood = () => {
    const [url, setUrl] = useState('');
    const [store, setStore] = useState([]);
    const nowDate = new Date();
    let hour = nowDate.getHours().toFixed(2);
    console.log(hour)

    useEffect(() => {
        const currentUrl = window.location.href.split('storeid=').pop()
        const decodedUrl = decodeURI(currentUrl);
        setUrl(Number(decodedUrl))

        const fetchstore = async () => {

            try {
                const response = await fetch(`/api/mysql/stores`);
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                const result = await response.json();
                const resultFilted = await result.filter(i => i.id === url)
                setStore(resultFilted);
            } catch (erro) {

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
                            <img className="w-full max-h-32 object-cover" src={str.storeImages} alt="" />
                        </div>
                        <div className="p-5 border-b-2 border-gray-500/25">
                            <div className="flex gap-3">
                                <img className="roundedFull" src={str.storeImages} alt="" />
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-xl">{str.storeName} <span className="bg-gray-500/25 text-xs">{str.type}
                                    </span></h2>
                                    <span className="flex items-center gap-1">
                                        <FaStar className="text-yellow-300" />{str.stars} avaliação
                                    </span>
                                    <h3>valor mínimo R$ {str.freight.toFixed(2)} <br />
                                    </h3>
                                </div>
                            </div>
                            <div className="mx-auto">
                                {hour >= str.openIN && hour <= str.closeIN 
                                ? <span className="flex items-center gap-2">aberto <FaCircle className="text-green-500 text-xs" /></span> 
                                : <span className="flex items-center gap-2">fechado <FaCircle className="text-red-500 text-xs" /></span>}
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