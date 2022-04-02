import React, { useEffect, useState } from "react";
import { useAuthContext } from "../Auth/Auth.context";
import { OrderItem } from "./OrderItem";

export function Orders() {
  const [orders, setOrders] = useState(null);
  const { user, token } = useAuthContext();

  useEffect(() => {
    fetch(`http://localhost:3005/orders/`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  if (!orders) {
    return <p>Loading ...</p>;
  }

  // async function functionOne(e) {
  //   e.preventDefault();

  //   await fetch(`http://localhost:3005/orders/`, {
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }

  // async function functionTwo() {
  //   for (let i = 0; i < allOrders.length; i++) {
  //     let data = null;
  //     if (allOrders[i].user.id === user.id) {
  //       data = allOrders[i];
  //     }
  //     setOrders(data);
  //     console.log(orders);
  //   }
  // }

  // async function functionThree() {
  //   functionTwo();
  //   {
  //     orders.map((order) => <OrderItem key={order.id} order={order} />);
  //   }
  // }

  return (
    <div>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
      {/* <button className="button-apple" onClick={functionOne}>
        Ce ordere am?
      </button> */}
      {/* <button className="button-apple" onClick={functionTwo}>
        User id-ul din acest order
      </button> */}
    </div>
  );
}
