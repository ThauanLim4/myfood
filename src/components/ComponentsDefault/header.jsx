"use client";
import { MdKeyboardArrowLeft } from "react-icons/md";

const HeaderDefault = ({ nameLocation }) => {
    return (
        <div className="border-b-2 border-gray-500/25 p-3 flex items-center">
            <button onClick={() => history.back()} className="flex flex-0.1 justify-start">
                <MdKeyboardArrowLeft className="text-xl" />
            </button>
            <span className="flex flex-1 justify-center">
                {nameLocation}
            </span>
        </div>
    )
}

export default HeaderDefault