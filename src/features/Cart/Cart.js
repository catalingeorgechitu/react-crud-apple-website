import React, { useEffect, useState } from "react";
import { useAuthContext } from "../Auth/Auth.context";
import { CartItem } from "./CartItem";

export function Cart() {
  const [products, setProducts] = useState(null);
  const { user, token } = useAuthContext();
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);
  const [productNames, setProductNames] = useState([]);

  // Gets the items inside user's cart
  useEffect(() => {
    async function getCartItems() {
      const data = await fetch(
        `http://localhost:3005/cart?&userId=${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res) => handleResponse(res));
      setProducts(data);
    }
    getCartItems();
  }, [user.id]);

  // Calculates the total price of the products inside user's cart
  useEffect(() => {
    if (products) {
      async function cartValue(data) {
        let value = 0;
        for (const elem of data) {
          value += elem.price;
        }
        setTotalPrice(value);
      }
      cartValue(products);
    }
  }, [products]);

  // Gets the {products} object and iterates through it, in order to create an array with product names
  useEffect(() => {
    if (products) {
      async function productNamesFunc(products) {
        let names = [];
        for (let i = 0; i < products.length; i++) {
          names[i] = products[i].name;
        }
        setProductNames(names);
      }
      productNamesFunc(products);
    }
  }, [products]);

  // Checks the response of the fetch promise
  function handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return null;
  }

  if (!products) {
    return <p>Loading ...</p>;
  }

  // Checks if there are any products inside user's cart
  if (products.length === 0) {
    return (
      <>
        <p>
          <strong>Your cart is empty.</strong>
        </p>
      </>
    );
  }

  // Places an order with the items inside user's cart
  async function placeOrder(e) {
    e.preventDefault();
    const response = window.confirm("Do you want to place this order?");

    if (response) {
      await fetch(`http://localhost:3005/orders`, {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
          totalPrice: totalPrice,
          productNames: productNames,
          userAdress: user.adress,
          userName: `${user.lastName} ${user.firstName}`,
          productsNumber: products.length,
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage("Your order has been placed!");
    }
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
      <h1 className="text-lg">
        <strong>Total price: {totalPrice} lei</strong>
      </h1>
      <br />

      <div className="place-order-container">
        <button className="button-apple" onClick={placeOrder}>
          Place an order
        </button>
      </div>
    </>
  );
}
