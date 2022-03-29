import React, { useEffect, useState } from "react";
import { useAuthContext } from "../Auth/Auth.context";
import { CartItem } from "./CartItem";

export function Cart() {
  const [products, setProducts] = useState(null);
  const { user, token } = useAuthContext();

  useEffect(() => {
    fetch(`http://localhost:3005/cart?&userId=${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.id]);

  if (!products) {
    return <p>Loading ...</p>;
  }

  if (products.length === 0) {
    return (
      <>
        <p>
          <strong>Your cart is empty.</strong>
        </p>
      </>
    );
  }

  const prodQty = products.length;

  return (
    <div className="cart-container">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
}
