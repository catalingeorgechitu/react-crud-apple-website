import { Link } from "react-router-dom";
import { useState } from "react";
import { CartItem } from "../Cart/CartItem";

export function OrderItem({ order }) {
  for (const [key, value] of Object.entries(order)) {
    console.log(`${key}: ${value}`);
  }

  return (
    <article>
      <h1>Your order id: {order.id}</h1>
      <Link to={`/`}>
        {/* <h1>{order.user.name}</h1> */}
        <h1>{order.totalPrice} lei</h1>
        {<h1 className="order-product-names">{order.productNames}.</h1>}
        {/* <h1>{productName}</h1> */}
      </Link>
    </article>
  );
}
