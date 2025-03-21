import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { fetchAllStores } from "@/app/api/utils/utilitys";
import { FaStar } from "react-icons/fa";
import { api } from "@/app/api/utils/api";
export const WishListComponent = ({ variableName }) => {
    const [storeInfos, setStoreInfos] = useState([]);
    console.log(variableName[0].store_id);

    useEffect(() => {
        const getStoreInfos = async () => {
            try {
                const result = await fetchAllStores();
                console.log(result);
                const resultFilted = await result.find(store => store.id === variableName[0].store_id);
                setStoreInfos(resultFilted);
                console.log(resultFilted);
            } catch (erro) {
                console.log("erro ao buscar o banco de dados");
            }
        }
        getStoreInfos();
    }, []);

    const removeItemFromWishList = async (store_id) => {
        console.log(store_id);
        try {
            const response = await api.delete("/favorites", {
                data: {
                    store_id: store_id
                }
            });
            if(response.status === 200) {
                window.location.reload();
            }
        } catch (error) {
            console.log("essa requisição tá com viadagem");
        }
    }
    return (
        variableName.map((item, ind) => {
            return (
                <div key={ind} className="border flex flex-col border-gray-500/25 rounded-lg p-3 gap-5 hover:shadow-lg hover:cursor-pointer storeContainer justify-self-center w-full h-full max-h-36 max-w-96">
                    <div className="flex items-center justify-between">
                        <Link href={`/store/${item.store_name.toLowerCase()}?storeid=${item.store_indentification_key}`} className="grid grid-cols-2-cols gap-3">
                            <img className="imgsStoreComponent" src={item.store_image ? item.store_image : "https://res.cloudinary.com/dhl67mauv/image/upload/v1734696916/Closed_Stores-bro_iqr7zd.svg"} />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-semibold">{item.store_name}</h3>
                                <div>
                                    <span className="bg-amarelo px-1 text-xs">{storeInfos && storeInfos.type}</span>
                                </div>
                                <div className="flex items-center gap-3"><FaStar className="text-yellow-300" />
                                    {storeInfos ? storeInfos.stars : "Indefinido"}</div>
                            </div>
                        </Link>
                        <div className="flex self-start justify-center items-end py-1">
                            <button onClick={() => removeItemFromWishList(item.store_id)}>
                                <FaHeart className="text-xl text-vermelho" />
                            </button>
                        </div>
                    </div>
                </div>
            )
        })

    );
}