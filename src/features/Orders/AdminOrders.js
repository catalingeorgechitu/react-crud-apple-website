import React, { useEffect, useState } from "react";
import { useAuthContext } from "../Auth/Auth.context";
import { OrderItem } from "./OrderItem";

export function AdminOrders() {
  const [orders, setOrders] = useState(null);
  const { user, token } = useAuthContext();

  useEffect(() => {
    fetch(`http://localhost:3005/orders`, {
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

  // Checks if there are any orders submitted by any user
  if (orders.length === 0) {
    return (
      <>
        <p>
          <strong>No order submitted.</strong>
        </p>
      </>
    );
  }

  return (
    <div>
      {user.role === "admin" &&
        orders.map((order) => <OrderItem key={order.id} order={order} />)}
    </div>
  );
}
