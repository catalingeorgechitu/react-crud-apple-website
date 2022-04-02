import { Link } from "react-router-dom";
import { useState } from "react";

export function OrderItem(order) {
  return (
    <article>
      <p>Aici ar trebui sa fie produsul</p>
      {/* <Link to={`/`}>
        <img
          className="lg:w-[200px] md:w-[150px] m-auto"
          src={order.image}
          alt={`Poster of ${order.name}`}
        />
        <h1>{order.user.id}</h1>
        <h2>{order.products[0].price} lei</h2>
      </Link> */}
    </article>
  );
}
