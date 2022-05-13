import { Link } from "react-router-dom";

export function WatchItem({ watch }) {
  return (
    <article>
      <Link to={`/products/${watch.id}`}>
        <img
          className="lg:w-[200px] md:w-[150px] m-auto"
          src={watch.image}
          alt={`Poster of ${watch.name}`}
        />
        <h1>{watch.name}</h1>
        <h2>{watch.price} lei</h2>
      </Link>
    </article>
  );
}
