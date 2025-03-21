"use client";
import '@/app/globals.css';
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MenuStoreComponent } from './components/MenuStore';
import { StoreInfosComponent } from './components/StoreInfos';
import { OtherStoresComponent } from './components/otherStores';
import { HeaderNavigation } from '@/components/HeaderNavigation';

const StoreDetailsPage = () => {
    const searchParams = useSearchParams();
    let storeId = searchParams.get('storeid');
    const [storeDetails, setStoreDetails] = useState([]);
    const [productDetails, setProductsDetails] = useState([]);
    const [otherStores, setOtherStores] = useState([]);

    useEffect(() => {
        if (!storeId) {
            console.error("No storeId provided");
            return;
        }
        const fetchDataProductDetails = async () => {
            try {
                const getStores = await fetch("/api/stores");
                const getProducts = await fetch("/api/products");
                const resultStores = await getStores.json();
                const resultProducts = await getProducts.json();
                if (resultStores) {
                    const storeDetailsFiltered = resultStores.filter(store => store.id === storeId);
                    setStoreDetails(storeDetailsFiltered);
                    if (storeDetailsFiltered) {
                        const resultProductsFiltered = resultProducts.filter(product => product.storeId === storeDetailsFiltered[0].id);
                        setProductsDetails(resultProductsFiltered);
                    }
                }

                const otherStoresFilted = resultStores.filter(store => store.id !== storeId);
                if (otherStoresFilted) {
                    setOtherStores(otherStoresFilted);
                    console.log(otherStoresFilted);
                };
            } catch (error) {
                console.error(error);
            }
        }
        fetchDataProductDetails();
    }, [storeId]);


    return (
        <>
            <HeaderNavigation location={storeDetails[0]?.name} />
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

            <div>
                {otherStores.length > 0 ? <h2 className='p-3 text-xl font-semibold'>Outras Lojas</h2> : <></>}

                {otherStores.length > 0 ? <OtherStoresComponent otherStores={otherStores} /> : <></>}
            </div>
        </>
    )
}

export default StoreDetailsPage;