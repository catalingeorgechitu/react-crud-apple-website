import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Auth/Auth.context";
import { WatchItem } from "./watchItem";


export function WatchList() {
  const [watch, setWatch] = useState(null);

  const { user } = useAuthContext();

  useEffect(() => {
    fetch("http://localhost:3005/products?_limit=20&_offset=0&category=watches")
      .then((res) => res.json())
      .then((data) => setWatch(data));
  }, []);

  if (!watch) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h1 className="products-title text-2xl">
        <strong>Watch</strong>
      </h1>
      <div className="watch-container">
        {user && user.role === "admin" && (
          <div>
            <Link className="button-apple" to="/products/add">
              Add a product
            </Link>
          </div>
        )}
        {watch.map((watch) => (
          <WatchItem key={watch.id} watch={watch} />
        ))}
      </div>
    </div>
  );
}
