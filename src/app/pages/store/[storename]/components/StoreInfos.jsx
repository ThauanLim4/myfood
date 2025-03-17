import { convertPrice } from '@/helpers/convertPrice';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TbPointFilled } from 'react-icons/tb';

export const StoreInfosComponent = ({ storeDetails }) => {

    const availbleTimeStore = (openAt, closeAt) => {
        const open = parseInt(openAt);
        const close = parseInt(closeAt);

        const data = new Date();
        const currentHour = data.getHours();

        if (currentHour >= open && currentHour <= close) {
            return <TbPointFilled className="text-green-600 text-2xl" />;
        } else {
            return <TbPointFilled className="text-red-600 text-2xl" />;
        }
    }
    return (
        <>
            {storeDetails.map((store, ind) => {
                return (
                    <div key={ind} className="">
                        <div>
                            <img className="w-full max-h-36 object-cover" src={store.image} alt="" />
                        </div>
                        <div className="p-5 border-b-2 border-gray-500/25">
                            <div className="flex gap-3">
                                <img className="roundedFull" src={store.image} alt="" />
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-xl font-semibold flex items-center gap-3">{store.name}
                                        {availbleTimeStore(store.openAt, store.closeAt)} </h2>
                                    <span className="flex items-center gap-1">
                                        <FaStar className="text-yellow-300" />{store.stars} avaliação
                                    </span>
                                    <h3>Frete {convertPrice(store.freight)}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}
