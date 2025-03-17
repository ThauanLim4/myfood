import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export const HeaderNavigation = ({ location }) => {
    const router = useRouter();

    return (
        <div className="bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
            <div className="flex items-center justify-center max-h-12 min-h-12 relative mx-auto  max-w-screen-lg">
                <button onClick={() => router.back()} className="absolute left-1"><IoIosArrowBack /></button>
                <h2>{location}</h2>
            </div>
        </div>
    )
}