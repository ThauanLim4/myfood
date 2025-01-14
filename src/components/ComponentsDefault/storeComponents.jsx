import Link from "next/link";
import { FaStar } from "react-icons/fa";
export const StoreComponent = ({ variableName }) => {
    return (
        <div className="mt-10 max-w-screen-lg mx-auto grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 gap-5">
            {
                variableName.map((item, ind) => {
                    return (
                        <div key={ind} className="border border-gray-500/25 rounded-lg p-3 gap-5 hover:shadow-lg hover:cursor-pointer storeContainer justify-self-center w-full h-32 max-w-96 max-h-36">
                            <Link href={`/store/${item.storeName.toLowerCase()}?storeid=${item.storeIndentification}`} className="flex gap-3">
                                <img className="object-cover roundedFull" src={item.storeImages ? item.storeImages : "https://res.cloudinary.com/dhl67mauv/image/upload/v1734696916/Closed_Stores-bro_iqr7zd.svg"} />
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl">{item.storeName}</h3>
                                    <div><span className="bg-amarelo px-1 text-xs">{item.type}</span></div>
                                    <div className="flex items-center gap-3"><FaStar className="text-yellow-300" /> {item.stars.toFixed(1)}</div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div >
    )
}