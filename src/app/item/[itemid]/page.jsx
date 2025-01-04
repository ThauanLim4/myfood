"use client";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { fetchAllFoods, fetchAllStores, fetchAllUsers } from "@/app/api/utils/utilitys"
import '@/app/globals.css';

const ItemFood = () => {
    const [url, setUrl] = useState('');
    const [item, setItem] = useState([]);
    const [store, setStore] = useState([]);
    const [userInfos, setUserInfos] = useState([])

    useEffect(() => {
        const currentUrl = window.location.href.split('itemid=').pop()
        const decodedUrl = decodeURI(currentUrl);
        const userToken = localStorage.getItem("token");

        setUrl(Number(decodedUrl))

        const fetchitem = async () => {
            try {
                const result = await fetchAllFoods();
                const resultFilted = await result.filter(i => i.id === url)
                setItem(resultFilted);
                let hashStore = resultFilted[0].storeIndentification;
                console.log(hashStore);

                const fetchstore = async () => {
                    try {
                        const result = await fetchAllStores();
                        const resultFilted = await result.filter(i => i.storeIndentification === hashStore)
                        setStore(resultFilted);
                    } catch (erro) { }
                }
                fetchstore();

                const fetchUserInfos = async () => {
                    try {
                        const result = await fetchAllUsers();
                        const userFilted = await result.rows.find(us => us.authentication_key === userToken);
                        setUserInfos(userFilted);
                    } catch (erro) {
                        console.log("usuarios nao achados")
                    }
                }
                fetchUserInfos();

            } catch (erro) {
                console.log('erro ao buscar o banco de dados');
            }
        }
        fetchitem();
    }, [url])

    if (item.length >= 1 && store.length >= 1) {
        console.log("nome do produto: ", item[0].food);
        console.log("id do produto: ", item[0].id);
        console.log("id da loja: ", store[0].id);
        if (userInfos) {
            console.log("id do usuário: ", userInfos.id);
        }
    }


    const addProductToCart = async () => {
        await fetch("/api/mysql/cart", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                user_id,
                product_name,
                product_id,
                store_id,
                quanty,
                unit_price,
                total_price
            })
        })
    }

    return (
        <div className="">
            {item.map((item, ind) => {
                return (
                    <span key={ind}>
                        <div key={ind} className="flex flex-col gap-3 p-5">
                            <div className="mx-auto flex flex-col items-center w-full max-h-40 ">
                                <img className="w-full max-h-40 object-contain" src={item.images} alt="" />
                            </div>
                            <div className="flex gap-3 flex-col border-b-2 border-gray-500/25 pb-3">
                                <h2 className="text-xl font-semibold">{item.food}</h2>
                                <span className="text-xl font-semibold text-verdeescuro"> R$ {item.price.toFixed(2)}</span>
                                <p>{item.description}</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                {store.map((str, ind) => {
                                    return (
                                        <div key={ind} className="flex gap-3 items-center">
                                            <img className="roundedFullMini" key={ind} src={str.storeImages} alt="" />
                                            <h3 className="font-semibold">{item.soldBy}</h3>
                                            <span className="flex items-center gap-1">
                                                <FaStar className="text-yellow-300" />{str.stars}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div className="flex justify-center pt-3 max-h-28 fixed bottom-5 left-5 right-5 gap-5">
                            <button className="bg-verdeescuro text-verdeclaro px-3 py-1 w-full btnDefault1"
                                onClick={addProductToCart}>Adicionar ao carrinho</button>
                        </div>
                    </span>
                )
            })}
        </div>
    )
}

export default ItemFood;