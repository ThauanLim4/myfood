import { convertDiscount } from '@/helpers/convertDiscount';
import { convertPrice } from '@/helpers/convertPrice';
import React from 'react';

export const DialogBoxInfosComponent = ({ productDetails }) => {
    return (
        <div className="flex gap-2 flex-col justify-start text-start">
            <h2 className="text-xl font-semibold text-verdeescuro">{productDetails.name}</h2>
            {productDetails.discontPorcent > 0 ? (
                <div className='text-start flex justify-start'>
                    <span className="text-sm font-semibold text-pink-900 line-through">{convertPrice(productDetails.price)}</span>
                    <p className='text-2xl font-bold text-verdeescuro'>{convertDiscount(productDetails.price, productDetails.discontPorcent)}</p>
                </div>
            ) : <p className='text-xl font-bold text-primary'>{convertPrice(productDetails.price)}</p>}
            <p className='mb-5'>{productDetails.description}</p>
        </div>
    )
}
