import React from 'react';
import { FaStar, FaTruck } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";


export const MenuFilterComponent = () => {
    return (
        <div className="flex flex-col items-center gap-1">
            <Dialog>
                <DialogTrigger>
                    <p className="flex items-center gap-1 font-semibold">
                        filtrar <IoIosArrowDown />
                    </p>
                </DialogTrigger>
                <DialogContent className="bg-branco w-11/12 rounded-lg">
                    <DialogHeader>
                        <DialogTitle>Filtros</DialogTitle>
                        <DialogDescription>
                            <div className="">
                                <div className="">
                                    <div className="p-5 flex flex-col items-center gap-5 text-lg">
                                        <button className="btnDefault1 flex flex-col items-center">
                                            <FaTruck /> Frete Grátis
                                        </button>
                                        <button className="btnDefault1 flex flex-col items-center">
                                            <FaStar /> Avaliações
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}
