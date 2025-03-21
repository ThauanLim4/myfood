import Link from "next/link";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const StoreComponent = ({ variableName }) => {
    const [userToken, setUserToken] = useState("");
    console.log(variableName);

    useEffect(() => {
        setUserToken(localStorage.getItem("token"));
    }, [])
    const addStoreToWishList = async (store_id, store_indentification_key, store_name, store_image) => {
        try {
            const response = await api.post("/favorites", {
                store_id,
                store_indentification_key,
                store_name,
                store_image,
                user_authentication_key: userToken,
            });
            if (response.ok) {
                window.location.reload();
            }
        } catch (error) { }
    }
    return (
        <div className="mt-10 max-w-screen-lg mx-auto grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 gap-5">
            {
                variableName.map((item, ind) => {
                    return (
                        <div key={ind} className="border border-gray-500/25 rounded-lg p-3 gap-5 hover:shadow-lg hover:cursor-pointer storeContainer justify-self-center w-full h-32 max-w-96 max-h-36">
                            <div className="flex items-center justify-center">
                                <Link href={`/store/${item.storeName.toLowerCase()}?storeid=${item.storeIndentification}`} className="grid grid-cols-3-cols gap-3">
                                    <img className="imgsStoreComponent" src={item.storeImages ? item.storeImages : "https://res.cloudinary.com/dhl67mauv/image/upload/v1734696916/Closed_Stores-bro_iqr7zd.svg"} />
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-xl">{item.storeName}</h3>
                                        <div><span className="bg-amarelo px-1 text-xs">{item.type}</span></div>
                                        <div className="flex items-center gap-3"><FaStar className="text-yellow-300" /> {item.stars.toFixed(1)}</div>
                                    </div>
                                </Link>
                                <div className="flex self-start justify-center items-end">
                                    <button onClick={e => addStoreToWishList(item.id, item.storeIndentification, item.storeName, item.storeImages)}>
                                        <FaRegHeart className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}