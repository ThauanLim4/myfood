import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import { FaUser, FaHeart, } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
export const MenuComponent = () => {
  return (
    <Sheet>
      <SheetTrigger><IoIosMenu className='text-2xl hover:text-verdeescuro' /></SheetTrigger>
      <SheetContent className="bg-branco p-0">
        <SheetHeader>
          <SheetTitle className="p-3">Menu</SheetTitle>
          <SheetDescription>
            <ul className='flex flex-col gap-2 mt-10 text-black'>
              <li className='flex items-center gap-3 text-lg border-b border-gray-500/25 py-3'>
                <FaUser className='ml-3 text-gray-800' /> Conta
              </li>
              <li className='flex items-center gap-3 text-lg border-b border-gray-500/25 py-3'>
                <FaHeart className='ml-3 text-destructive' /> Favoritos
              </li>
              <li className='flex items-center gap-3 text-lg border-b border-gray-500/25 py-3'>
                <MdLogin className='ml-3 text-green-500' /> Login
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}
