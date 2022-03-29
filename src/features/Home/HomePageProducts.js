import { MacList } from "../Mac/macList";
import { ProductList } from "../Products/ProductList";

export function HomePageProducts() {
  return (
    <>
      <ProductList />
      <MacList />
    </>
  );
}
