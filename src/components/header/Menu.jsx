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


export const MenuComponent = () => {
  return (
    <Sheet>
      <SheetTrigger><IoIosMenu className='text-2xl hover:text-verdeescuro' /></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Esta área ainda está em desenvolvimento...
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}
