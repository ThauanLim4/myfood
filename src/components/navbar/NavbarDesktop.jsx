import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { User } from "../user/User";
import { CloseDefault } from "../ComponentsDefault/header";
import { CartModal } from "../cart/Cart";
import { ShowLocationComponent } from "./ShowLocationComponent";

export const NavbarDesktopComponent = () => {
    const [openModalUser, setOpenModalUser] = useState(false);
    const [openModalCart, setOpenModalCart] = useState(false);
    const [openModalLocation, setOpenModalLocation] = useState(false);

    return (
        <div className="flex items-center gap-3">
            <h1 onClick={() => setOpenModalUser(true)}>
                <FaUser className="text-2xl cursor-pointer hover:text-verdeescuro" />
            </h1>

            <h1 onClick={() => setOpenModalCart(true)}>
                <LuShoppingCart className="text-2xl cursor-pointer hover:text-verdeescuro" />
            </h1>

            <h1 onClick={() => setOpenModalLocation(true)}>
                <IoLocationOutline className="text-2xl cursor-pointer hover:text-verdeescuro" />
            </h1>

            {openModalUser &&
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10">
                    <div className=" fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 h-3/4 max-w-screen-md bg-verdeclaro z-10">
                        <CloseDefault functionClose={() => setOpenModalUser(false)} nameLocation="Usuário" />
                        <div className="p-5">
                            <User />
                        </div>
                    </div>
                </div>}

            {openModalCart &&
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10">
                    <div className=" fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 h-3/4 max-w-screen-md bg-verdeclaro z-10">
                        <CloseDefault functionClose={() => setOpenModalCart(false)} nameLocation="Carrinho" />
                        <div className="p-5">
                            <CartModal />
                        </div>
                    </div>
                </div>}

            {openModalLocation &&
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10">
                    <div className=" fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 h-3/4 max-w-screen-md bg-verdeclaro z-10">
                        <CloseDefault functionClose={() => setOpenModalLocation(false)} nameLocation="Localização" />
                        <div className="p-5">
                            <ShowLocationComponent />
                        </div>
                    </div>
                </div>}
        </div>

    )
}