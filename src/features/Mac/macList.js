import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Auth/Auth.context";
import { MacItem } from "./macItem";

export function MacList() {
  const [mac, setMac] = useState(null);

  const { user } = useAuthContext();

  useEffect(() => {
    fetch("http://localhost:3005/products?_limit=20&_offset=0&category=mac")
      .then((res) => res.json())
      .then((data) => setMac(data));
  }, []);

  if (!mac) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h1 className="products-title text-2xl">
        <strong>Mac</strong>
      </h1>
      <div className="mac-container">
        {user && user.role === "admin" && (
          <div>
            <Link className="button-apple" to="/products/add">
              Add a product
            </Link>
          </div>
        )}
        {mac.map((mac) => (
          <MacItem key={mac.id} mac={mac} />
        ))}
      </div>
    </div>
  );
}
