"use client";
import '@/app/globals.css';
import { useEffect, useState } from "react";
import { FaStar, FaCircle } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

const StoreDetailsPage = () => {
    const searchParams = useSearchParams();
    let productId = searchParams.get('storeid');
    const [storeDetails, setStoreDetails] = useState([]);
    const [productDetails, setProductsDetails] = useState([]);

    useEffect(() => {
        if (!productId) {
            console.error("No productId provided");
            return;
        }
        const fetchDataProductDetails = async () => {
            try {
                const getStores = await fetch("/api/stores");
                const getProducts = await fetch("/api/products");
                const resultStores = await getStores.json();
                const resultProducts = await getProducts.json();
                if (resultStores) {
                    const storeDetailsFiltered = resultStores.filter(store => store.id === productId);
                    setStoreDetails(storeDetailsFiltered);
                    console.log(storeDetailsFiltered);
                    if (storeDetailsFiltered) {
                        const resultProductsFiltered = resultProducts.filter(product => product.storeId === storeDetailsFiltered[0].id);
                        setProductsDetails(resultProductsFiltered);
                        console.log(resultProductsFiltered);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchDataProductDetails();
    }, [productId]);

    return (
        <div className="max-w-screen-lg mx-auto">
            {storeDetails.length > 0 ? (

                storeDetails.map((store, ind) => {
                    return (
                        <div key={ind} className="">
                            <div>
                                <img className="w-full max-h-36 object-cover" src={store.image} alt="" />
                            </div>
                            <div className="p-5 border-b-2 border-gray-500/25">
                                <div className="flex gap-3">
                                    <img className="roundedFull" src={store.image} alt="" />
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-xl font-semibold flex gap-3">{store.name} </h2>
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-yellow-300" />{store.stars} avaliação
                                        </span>
                                        <h3>{store.freight}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })


            ) : <></>}
        </div>
    )
}

export default StoreDetailsPage;