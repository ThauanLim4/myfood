"use client";
import '@/app/globals.css';
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MenuStoreComponent } from './components/MenuStore';
import { StoreInfosComponent } from './components/StoreInfos';

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
        <>
            <div className="max-w-screen-lg mx-auto">
                {storeDetails.length > 0 ? (
                    <>
                        {/* Informações sobre a loja como o nome, foto, frete e outras. */}
                        <StoreInfosComponent storeDetails={storeDetails} />

                        {/* Menu da lojas, onde contém todos os produtos da loja */}
                        <MenuStoreComponent menuStore={productDetails} />
                    </>
                ) : <></>}
            </div>
        </>
    )
}

export default StoreDetailsPage;