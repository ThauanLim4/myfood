"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { HeaderDefault } from '@/components/ComponentsDefault/header';
import { StoreComponent } from './components/Store';
import { ProductInfosComponent } from './components/ProductInfos';
import { LoadingComponent } from '@/components/Loading';

const ProductDetailsPage = () => {
    const searchParams = useSearchParams();
    let productId = searchParams.get('prodid');
    const [productDetails, setProductsDetails] = useState([]);
    const [storeDetails, setStoreDetails] = useState([]);

    useEffect(() => {
        if (!productId) {
            console.error("No productId provided");
            return;
        }
        const fetchDataProductDetails = async () => {
            try {
                const response = await fetch("/api/products");
                const getStores = await fetch("/api/stores");
                const resultProducts = await response.json();
                const resultStores = await getStores.json();
                if (resultProducts) {
                    const resultProductsFiltered = resultProducts.filter(product => product.id === productId);
                    setProductsDetails(resultProductsFiltered);
                    if (resultProductsFiltered) {
                        const storeDetailsFiltered = resultStores.filter(store => store.id === resultProductsFiltered[0].storeId);
                        console.log(storeDetailsFiltered);
                        setStoreDetails(storeDetailsFiltered);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchDataProductDetails();
    }, [productId]);



    return (
        <div className="max-w-screen-lg mx-auto relative">
            {productDetails.length > 0 ? (
                <div className="max-w-screen-lg mx-auto">
                    {productDetails.map((item, ind) => {
                        return (
                            <span key={ind}>
                                <HeaderDefault nameLocation={item.name} />
                                <div key={ind} className="flex flex-col gap-3 ">
                                    <div className="mx-auto flex flex-col items-center justify-center w-full max-w-md max-h-46 bg-amarelo">
                                        <img className="w-full max-w-48 max-h-48 object-contain" src={item.image} alt="" />
                                    </div>
                                    <div className='p-3'>
                                        <ProductInfosComponent productDetails={item} />
                                    </div>
                                    <div className='p-3 border-b border-verdeescuro'>
                                        <StoreComponent storeDetails={storeDetails} />
                                    </div>
                                </div>
                                <div className="flex justify-center pt-3 max-h-28 fixed bottom-5 left-5 right-5 gap-5 mx-auto max-w-screen-sm">
                                    <button className="bg-verdeescuro text-verdeclaro 
                                    px-3 py-1 w-full btnDefault1 max-w-sm">Adicionar ao carrinho</button>
                                </div>
                            </span>
                        )
                    })}
                </div>

            ) : <LoadingComponent />
            }
        </div>

    )
}

export default ProductDetailsPage