import { Link } from "react-router-dom";

export function MacItem({ mac }) {
  return (
    <article>
      <Link to={`/products/${mac.id}`}>
        <img
          className="lg:w-[200px] md:w-[150px] m-auto"
          src={mac.image}
          alt={`Poster of ${mac.name}`}
        />
        <h1>{mac.name}</h1>
        <h2>{mac.price} lei</h2>
      </Link>
    </article>
  );
}
