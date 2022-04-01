import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuthContext } from "../Auth/Auth.context";

export function ProductEdit() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { user, token } = useAuthContext();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3005/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  function handleInputChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:3005/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    setMessage("Your product was saved");
  }

  if (!product) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      {message && <strong>{message}</strong>}
      {user.role === "admin" && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Product name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
          <button className="button-apple" type="submit">
            Save
          </button>
        </form>
      )}
    </>
  );
}
