import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../Auth/Auth.context";
import { CartItem } from "./CartItem";
import { useParams } from "react-router";

export function Cart() {
  const [products, setProducts] = useState(null);
  const { user, token } = useAuthContext();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const userId = useParams();

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

  async function placeOrder(e) {
    e.preventDefault();

    await fetch(`http://localhost:3005/orders`, {
      method: "POST",
      body: JSON.stringify({ user, products }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setMessage("Your order has been placed");
  }

  return (
    <>
      {message && (
        <strong className="text-2xl text-green-600">{message}</strong>
      )}
      <div className="cart-container">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className="place-order-container">
        <button className="button-apple" onClick={placeOrder}>
          Place an order
        </button>
      </div>
    </>
  );
}
