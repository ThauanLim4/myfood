import { ProductsComponent } from "../../../components/products/Products";
import { CategoriesComponent } from "./Categories";
import { TabsComponent } from "./Tabs";

export const HomeComponent = () => {
    return (
        <section className="mx-auto max-w-screen-lg">
            <CategoriesComponent />

            <ProductsComponent />

            <TabsComponent />
        </section>
    )
}