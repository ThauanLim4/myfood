"use client";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { fetchAllFoods, fetchAllStores, fetchAllUsers } from "@/app/api/utils/utilitys"
import '@/app/globals.css';
import { HeaderDefault } from "@/components/ComponentsDefault/header";
import Link from "next/link";

const ItemFood = () => {
    const [url, setUrl] = useState('');
    const [item, setItem] = useState([]);
    const [store, setStore] = useState([]);
    const [userInfos, setUserInfos] = useState([]);

    useEffect(() => {
        const currentUrl = window.location.href.split('itemid=').pop()
        const decodedUrl = decodeURI(currentUrl);
        const userToken = localStorage.getItem("token");

        setUrl(Number(decodedUrl))

        const fetchitem = async () => {
            try {
                const result = await fetchAllFoods();
                const resultFilted = await result.filter(i => i.id === url)
                let hashStore = String(resultFilted[0].storeIndentification);
                setItem(resultFilted);
                console.log(resultFilted);
                console.log(hashStore);

                if (resultFilted.length >= 1) {
                    const fetchStore = await fetchAllStores();
                    const fetchStoreFilted = await fetchStore.filter(i => i.storeIndentification === hashStore);
                    setStore(fetchStoreFilted);
                    console.log(fetchStoreFilted);
                }
                const fetchUserInfos = async () => {
                    try {
                        const result = await fetchAllUsers();
                        const userFilted = await result.filter(us => us.authentication_key === userToken);
                        setUserInfos(userFilted);
                        console.log(userFilted);
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

    const addProductToCart = async () => {
        const response = await fetch("/api/mysql/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: userInfos[0].id,
                product_name: item[0].food,
                product_image: item[0].images,
                product_id: item[0].id,
                store_id: store[0].id,
                quanty: 1,
                unit_price: item[0].price,
                total_price: item[0].price * 1,
            })
        });
        if (response.ok) {
            console.log("produto adicionado ao carrinho");
            window.location.href = `/cart`;
        } else {
            console.log("erro ao adicionar produto ao carrinho");
        }
    }



    return (
        <div className="max-w-screen-lg mx-auto">
            {item.map((item, ind) => {
                return (
                    <span key={ind}>
                        <HeaderDefault nameLocation={item.food} />
                        <div key={ind} className="flex flex-col gap-3 p-5">
                            <div className="mx-auto flex flex-col items-center justify-center w-full max-w-md max-h-46 bg-amarelo rounded-xl">
                                <img className="w-full max-w-48 max-h-48 object-contain" src={item.images} alt="" />
                            </div>
                            <div className="flex gap-3 flex-col border-b-2 border-gray-500/25 pb-3">
                                <h2 className="text-xl font-semibold">{item.food}</h2>
                                <span className="text-xl font-semibold text-verdeescuro"> R$ {item.price.toFixed(2)}</span>
                                <p>{item.description}</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                {store.map((str, ind) => {
                                    return (
                                        <Link href={`/store/${str.storeName.toLowerCase()}?storeid=${str.storeIndentification}`} key={ind} className="flex gap-3 items-center">
                                            <img className="roundedFullMini" key={ind} src={str.storeImages} alt="" />
                                            <h3 className="font-semibold">{item.soldBy}</h3>
                                            <span className="flex items-center gap-1">
                                                <FaStar className="text-yellow-300" />{str.stars}
                                            </span>
                                        </Link>
                                    )
                                })}
                            </div>

                        </div>
                        <div className="flex justify-center pt-3 max-h-28 fixed bottom-5 left-5 right-5 gap-5 mx-auto max-w-screen-sm">
                            <button className="bg-verdeescuro text-verdeclaro px-3 py-1 w-full btnDefault1 max-w-sm"
                                onClick={addProductToCart}>Adicionar ao carrinho</button>
                        </div>
                    </span>
                )
            })}
        </div>
    )
}

export default ItemFood;