import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

export const StoreComponent = ({storeDetails}) => {
    return (
        <div className="flex gap-3 items-center">
            {storeDetails.map((store, ind) => {
                return (
                    <Link href={`/pages/store/${store.name.toLowerCase().replace(/\s+/g, "-")}?storeid=${store.id}`} key={ind} className="flex gap-3 items-center">
                        <img className="roundedFullMini" key={ind} src={store.image} alt="" />
                        <h3 className="font-semibold">{store.name}</h3>
                        <span className="flex items-center gap-1">
                            <FaStar className="text-yellow-300" />{store.stars}
                        </span>
                    </Link>
                )
            })}
        </div>
    )
}
