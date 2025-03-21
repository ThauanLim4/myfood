"use client";
import '@/app/globals.css';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRouter } from 'next/navigation';
export const OtherStoresComponent = ({ otherStores }) => {
    const router = useRouter()
    console.log("outras lojas:", otherStores);

    const handleStoreChange = (store) => {
        router.replace(`/pages/store/${store.name.trim().toLocaleLowerCase()}?storeid=${store.id}`);
    };

    return (
        <div className="text-start">
            <div className="flex items-center gap-3 w-full h-56">
                <Swiper
                    slidesPerView={3} spaceBetween={10}>
                    {otherStores ?
                        otherStores.map((store, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div onClick={() => handleStoreChange(store)} className="transition-all duration-300 rounded-lg">
                                        <div replace={`${store.name.trim().toLocaleLowerCase()}?storeid=${store.id}`} className="flex flex-col items-center justify-center gap-3 hover:bg-verdeclaro transition-all duration-300 rounded-lg text-center">
                                            <div className={`flex flex-col justify-center items-center text-center w-32 h-28 mt-2 rounded-b-full`}>
                                                <img className="min-w-28 min-h-28 rounded-full mx-auto" src={store.image} width={100} height={100} alt="" />
                                            </div>
                                            <h3 className="font-light mx-auto hover:text-verdeescuro hover:cursor-pointer text-center">{store.name}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }) : <></>}
                </Swiper>
            </div>
        </div>
    )
}
