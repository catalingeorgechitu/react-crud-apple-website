import { Link } from "react-router-dom";

export function ProductItem({ product }) {
  return (
    <article>
      <Link to={`/products/${product.id}`}>
        <img
          className="lg:w-[200px] md:w-[150px] m-auto"
          src={product.image}
          alt={`Poster of ${product.name}`}
        />
        <h1>{product.name}</h1>
        <h2>{product.price} lei</h2>
      </Link>
    </article>
  );
}
