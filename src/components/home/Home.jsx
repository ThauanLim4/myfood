import { CategoriesInitial } from "./Categories";
import { StoresInitial } from "./Stores";
import { FoodsInitial } from "./Foods";
export const HomeInitial = () => {

    return (
        <div>
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
    )
}