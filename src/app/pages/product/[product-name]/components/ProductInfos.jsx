import { convertDiscount } from '@/helpers/convertDiscount'
import { convertPrice } from '@/helpers/convertPrice'
import React from 'react'

export const ProductInfosComponent = ({productDetails}) => {
    return (
        <div className="flex gap-2 flex-col">
            <h2 className="text-xl font-semibold text-verdeescuro">{productDetails.name}</h2>
            {productDetails.discontPorcent > 0 ? (
                <div>
                    <span className="text-sm font-semibold text-pink-900 line-through">{convertPrice(productDetails.price)}</span>
                    <p className='text-2xl font-bold text-verdeescuro'>{convertDiscount(productDetails.price, productDetails.discontPorcent)}</p>
                </div>
            ) : <p className='text-xl font-bold text-primary'>{convertPrice(productDetails.price)}</p>}
            <p>{productDetails.description}</p>

        </div>

    )
}
