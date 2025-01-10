import Link from "next/link";
import { CloseDefault } from "./header";
import { useEffect, useState } from "react";
import { fetchAllUsers, fetchAllStores } from "@/app/api/utils/utilitys";
import axios from "axios";

export const FoodComponent = ({ variableName }) => {
    return (
        <div className="mt-10 mb-16">
            <div className="grid grid-cols-2 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
                {
                    variableName.map((it, ind) => {
                        return (
                            <div key={ind} className="grid grid-cols-2-cols max-sm:border-b-2 border-gray-500/25 gap-5 hover:shadow-sombra cursor-pointer w-full max-w-96 h-32max-h-36 mx-auto p-2">
                                <img className="imgs" src={it.images} alt={`foto de ${it.category}, ${it.food}`} />
                                <div className="flex flex-col justify-center gap-1">
                                    <h3 className="text-base first-letter:uppercase">{it.food}</h3>
                                    <span>R$ {it.price && it.price.toFixed(2).replace(".", ",")}</span>
                                    <Link href={`/item/${it.food}?itemid=${it.id}`} className="flex items-center justify-center p-2 w-36 h-10 btnDefault1">Comprar</Link>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>

    )
}

export const FoodComponentInStore = ({ variableName, storeIndentification }) => {
    const [openModal, setOpenModal] = useState(null);
    return (
        <div className="mt-10 mb-16">
            <div className="grid grid-cols-2 max-w-screen-lg mx-auto max-md:grid-cols-2 gap-5">
                {
                    variableName.map((it, ind) => {
                        return (
                            <span key={ind}>
                                <div onClick={e => setOpenModal(ind)} className="flex flex-col max-sm:border-2 rounded-lg border-gray-500/25 gap-5 hover:shadow-sombra cursor-pointer w-full max-w-96 h-full max-h-60 mx-auto p-2">
                                    <div className="flex flex-col justify-center gap-1">
                                        <img className="imgs mx-auto" src={it.images} alt={`foto de ${it.category}, ${it.food}`} />
                                        <h3 className="text-base first-letter:uppercase">{it.food}</h3>
                                        <span>R$ {it.price && it.price.toFixed(2).replace(".", ",")}</span>
                                    </div>
                                </div>
                                {openModal === ind &&
                                    <div className="fixed top-0 left-0 w-full h-full bg-verdeclaro z-50">
                                        <CloseDefault functionClose={() => setOpenModal(null)} nameLocation={it.food} />
                                        <InfosFoodComponentInStore InterationVarName={it} />
                                    </div>}
                            </span>)
                    })}
            </div>
        </div>

    )
}


export const InfosFoodComponentInStore = ({ InterationVarName }) => {
    const [usersInfos, setUsersInfo] = useState([]);
    const [storeInfos, setStoreInfos] = useState([]);

    useEffect(() => {
        const tokenUser = localStorage.getItem("token");
        const fetchUser = async () => {
            try {
                const result = await fetchAllUsers();
                const resultUser = result.find(
                    (it) => it.authentication_key === tokenUser);
                if (resultUser.length !== 0) {
                    setUsersInfo(resultUser);
                }
            } catch (erro) {
                console.log("erro")
            }
        }
        fetchUser();
    }, []);

    const AddItemOnCart = async () => {
        console.log(InterationVarName.food);
        if (!usersInfos || usersInfos.length === 0) {
            console.log("User information is not available");
            return;
        }
        try {
            const response = await axios.post("/api/mysql/cart", {
                user_id: usersInfos.id,
                product_name: InterationVarName.food,
                product_image: InterationVarName.images,
                product_id: InterationVarName.id,
                store_id: 1,
                quanty: 1,
                unit_price: InterationVarName.price,
                total_price: InterationVarName.price
            });
            if (response.status === 200) {
                console.log("Item added to cart successfully:", response.data);
            } else {
                console.error("Failed to add item to cart:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error adding item to cart:", error.response ? error.response.data : error.message);
        }
    }

    return (
            <div className="p-3">
                <div className="flex items-center justify-center my-5 bg-amarelo rounded-lg">
                    <img className="w-full max-w-48 max-h-48 object-contain" src={InterationVarName.images} alt={`foto de ${InterationVarName.category}, ${InterationVarName.food}`} />
                </div>
                <div className="flex flex-col gap-5 border-b-2 border-gray-500/25 pb-5">
                    <h2 className="text-xl font-semibold">{InterationVarName.food}</h2>
                    <p className="">{InterationVarName.description}</p>
                    <span className="text-xl font-semibold">R$ {InterationVarName.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="fixed bottom-0 w-full p-3 flex flex-col items-center gap-5 mx-auto left-0 right-0">
                    <div className="mx-auto flex items-center gap-2">
                        <label htmlFor="quantity"></label>
                    </div>
                    <button className="btnDefault1" onClick={AddItemOnCart} >
                        Adicionar ao carrinho R$ {InterationVarName.price.toFixed(2).replace('.', ',')}
                    </button>
                </div>
            </div>
        )
    }