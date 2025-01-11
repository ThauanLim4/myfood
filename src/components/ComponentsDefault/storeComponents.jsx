import Link from "next/link";
import { FaStar } from "react-icons/fa";
export const StoreComponent = ({ variableName }) => {
    return (
        <div className="mx-auto grid max-md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5" >
            {
                variableName.map((item, ind) => {
                    return (
                        <div key={ind} className="border border-gray-500/25 p-3 gap-5 hover:shadow-lg hover:cursor-pointer storeContainer justify-self-center w-80 h-32 max-w-80 max-h-36">
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