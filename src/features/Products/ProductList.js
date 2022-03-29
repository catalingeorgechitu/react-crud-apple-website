import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Auth/Auth.context";
import { ProductItem } from "./ProductItem";

export function ProductList() {
  const [products, setProducts] = useState(null);

  const { user } = useAuthContext();

  useEffect(() => {
    fetch("http://localhost:3005/products?_limit=20&_offset=0&category=phone")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h1 className="products-title text-2xl">
        <strong>iPhones</strong>
      </h1>
      <div className="products-container">
        {user && user.role === "admin" && (
          <div>
            <Link className="button-apple" to="/products/add">
              Add a product
            </Link>
          </div>
        )}
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
