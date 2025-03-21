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
import { DialogBoxInfosComponent } from './DialogBoxInfos';


export const MenuStoreComponent = ({ menuStore }) => {
    return (
        <div className="flex flex-col gap-5 h-auto mb-5">
            <div className="grid grid-cols-3 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-3 w-full">
                {menuStore.map((menu, ind) => {
                    return (
                        <span key={ind} className='px-3'>
                            <Dialog>
                                <DialogTrigger className='cursor-default'>
                                    <div key={ind} className="grid grid-cols-0.3/0.7-cols max-sm:border-b-2 gap-5 hover:shadow-sombra w-full h-full max-w-lg min-h-32 max-h-32 mx-auto border border-verdeescuro rounded-lg transition-all duration-300 overflow-hidden">
                                        <div className="w-full h-full min-h-32 max-h-32 flex self-start bg-amarelo hover:cursor-pointer relative">
                                            <img className="w-full h-full object-contain flex self-center p-1" src={menu.image} alt={`foto de ${menu.category}, ${menu.name}`} />
                                            <p className={`absolute top-1 left-1 bg-verdeescuro text-white text-sm italic rounded-tl-md ${menu.discontPorcent === 0 ? "hidden" : "block"}`}>{`-${menu.discontPorcent}%`} </p>
                                        </div>
                                        <div className="flex flex-col h-96 text-start justify-start">
                                            <h3 className="flex justify-self-start font-semibold first-letter:uppercase hover:cursor-pointer">
                                                {menu.name}
                                            </h3>
                                            {menu.discontPorcent > 0 ? (
                                                <div className='flex items-center gap-1'>
                                                    <p className='text-lg font-bold text-verdeescuro'>{convertDiscount(menu.price, menu.discontPorcent)}</p>
                                                    <span className="text-xs font-semibold text-pink-900 line-through">{convertPrice(menu.price)}</span>
                                                </div>
                                            ) : <p className='text-lg font-bold text-verdeescuro'>{convertPrice(menu.price)}</p>}
                                            <p className='line-clamp-2 h-auto'>
                                                {menu.description}
                                            </p>
                                        </div>
                                    </div>
                                </DialogTrigger>

                                <DialogContent className={"h-4/6 w-11/12 rounded-lg"}>
                                    <DialogHeader>
                                        <DialogTitle>{menu.name}</DialogTitle>
                                        <DialogDescription>
                                            <div className="flex flex-col  gap-3 h-3/4">
                                                <div className="mx-auto flex flex-col items-center justify-center w-full max-w-md max-h-46 bg-amarelo relative rounded-lg">
                                                    <img className="w-full max-w-48 max-h-48 object-contain" src={menu.image} alt="" />
                                                    <p className={`text-white absolute top-0 left-0 bg-verdeescuro text-sm italic rounded-tl-md px-1 ${menu.discontPorcent === 0 ? "hidden" : "block"}`}>{`-${menu.discontPorcent}%`} </p>
                                                </div>
                                                <DialogBoxInfosComponent productDetails={menu} />
                                            </div>
                                            <div className="flex justify-center pt-3 max-h-28 fixed bottom-5 left-5 right-5 gap-5 mx-auto max-w-screen-sm mt-10">
                                                <button onClick={() => alert("em desenvolvimento")} className="bg-verdeescuro text-verdeclaro btnDefault1 px-3 py-1 w-full max-w-sm">Adicionar ao carrinho</button>
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
