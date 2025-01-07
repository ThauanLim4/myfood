import { CategoriesInitial } from "./Categories";
import { StoresInitial } from "./Stores";
import { FoodsInitial } from "./Foods";
import { Navbar } from "@/components/navbar/navbar";

export const HomeInitial = () => {

    return (
        <>
            <section className=" max-w-screen-xl border-b-2 mx-auto border-gray-500/25">
                <Navbar />
            </section>
            <div className="p-5">
                <div>
                    <CategoriesInitial />
                </div>
                <div>
                    <StoresInitial />
                </div>
                <div>
                    <FoodsInitial />
                </div>
            </div>
        </>
    )
}