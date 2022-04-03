import React, { useEffect, useState } from "react";
import { useAuthContext } from "../Auth/Auth.context";
import { OrderItem } from "./OrderItem";

export function Orders() {
  const [orders, setOrders] = useState(null);
  const { user, token } = useAuthContext();

  useEffect(() => {
    fetch(`http://localhost:3005/orders?userId=${user.id}`, {
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

  if (orders.length === 0) {
    return (
      <>
        <p>
          <strong>You don't have any orders.</strong>
        </p>
      </>
    );
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
  //   for (let i = 0; i < orders.length; i++) {
  //     if (orders[i].user.id === user.id) {
  //       setOrders(orders[i]);
  //     }
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

      {/* {orders.productNames.map((productName) => (
        <OrderItem
          key={Math.floor(Math.random() * 9999999)}
          productName={productName}
        />
      ))} */}

      {/* <button className="button-apple" onClick={functionOne}>
        Ce ordere am?
      </button> */}
      {/* <button className="button-apple" onClick={functionTwo}>
        User id-ul din acest order
      </button> */}
    </div>
  );
}
