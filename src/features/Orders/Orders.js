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

  return (
    <div>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}
