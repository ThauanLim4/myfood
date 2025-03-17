import { convertDiscount } from '@/helpers/convertDiscount';
import { convertPrice } from '@/helpers/convertPrice';
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ProductInfosComponent } from '@/app/pages/product/[product-name]/components/ProductInfos';


export const MenuStoreComponent = ({ menuStore }) => {
    return (
        <div className="flex flex-col gap-5 h-screen overflow-y-scroll mb-5">
            <div className="grid grid-cols-3 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-3 w-full">
                {menuStore.map((menu, ind) => {
                    return (
                        <span key={ind} className='px-3'>
                            <Dialog>
                                <div key={ind} className="grid grid-cols-0.3/0.7-cols max-sm:border-b-2 gap-5 hover:shadow-sombra w-full h-full max-w-lg min-h-32 max-h-32 mx-auto border border-verdeescuro rounded-lg transition-all duration-300 overflow-hidden">
                                    <div className="w-full h-full min-h-32 max-h-32 flex self-start bg-amarelo hover:cursor-pointer relative">
                                        <DialogTrigger>
                                            <img className="w-full h-full object-contain flex self-center p-1" src={menu.image} alt={`foto de ${menu.category}, ${menu.name}`} />
                                        </DialogTrigger>
                                        <p className={`absolute top-1 left-1 bg-verdeescuro text-white text-sm italic rounded-tl-md ${menu.discontPorcent === 0 ? "hidden" : "block"}`}>{`-${menu.discontPorcent}%`} </p>
                                    </div>
                                    <div className="flex flex-col justify-start">
                                        <h3 className="font-semibold first-letter:uppercase hover:cursor-pointer">
                                            <DialogTrigger>{menu.name}</DialogTrigger>
                                        </h3>
                                        {menu.discontPorcent > 0 ? (
                                            <div className='flex items-center gap-1'>
                                                <p className='text-lg font-bold text-verdeescuro'>{convertDiscount(menu.price, menu.discontPorcent)}</p>
                                                <span className="text-xs font-semibold text-pink-900 line-through">{convertPrice(menu.price)}</span>
                                            </div>
                                        ) : <p className='text-lg font-bold text-verdeescuro'>{convertPrice(menu.price)}</p>}
                                        <p className='line-clamp-2'>
                                            {menu.description}
                                        </p>
                                    </div>
                                </div>

                                <DialogContent className={"h-2/4 w-11/12 rounded-lg"}>
                                    <DialogHeader>
                                        <DialogTitle>{menu.name}</DialogTitle>
                                        <DialogDescription>
                                            <div className="flex flex-col gap-3 h-3/4">
                                                <div className="mx-auto flex flex-col items-center justify-center w-full max-w-md max-h-46 bg-amarelo relative rounded-lg">
                                                    <img className="w-full max-w-48 max-h-48 object-contain" src={menu.image} alt="" />
                                                    <p className={`text-white absolute top-0 left-0 bg-verdeescuro text-sm italic rounded-tl-md px-1 ${menu.discontPorcent === 0 ? "hidden" : "block"}`}>{`-${menu.discontPorcent}%`} </p>
                                                </div>
                                                <ProductInfosComponent productDetails={menu} />
                                            </div>
                                            <div className="flex justify-center pt-3 max-h-28 fixed bottom-5 left-5 right-5 gap-5 mx-auto max-w-screen-sm">
                                                <button onClick={() => alert("em desenvolvimento")} className="bg-verdeescuro text-verdeclaro  px-3 py-1 w-full btnDefault1 max-w-sm">Adicionar ao carrinho</button>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </span>


                    )
                })}

            </div>
        </div >

    )
}
