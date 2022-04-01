import { useState } from "react";
import { useAuthContext } from "../Auth/Auth.context";

export function ProductAdd() {
  const [product, setProduct] = useState({
    userId: 2,
    productCode: "",
    name: "",
    color: "",
    image: "",
    price: "",
    category: "",
  });
  const { user, token } = useAuthContext();
  const [message, setMessage] = useState("");

  function handleInputChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:3005/products`, {
      method: "POST",
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
          {/* <label htmlFor="userId">userId: </label> */}
          {/* <input
          type="hidden"
          id="userId"
          name="userId"
          value={user.id}
          onChange={handleInputChange}
        />
        <br /> */}

          {/* <label htmlFor="productCode">Product Code: </label>
        <input
          type="text"
          id="productCode"
          name="productCode"
          value={product.productCode}
          onChange={handleInputChange}
        />
        <br /> */}

          <label htmlFor="name">Product name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="color">Color: </label>
          <input
            type="text"
            id="color"
            name="color"
            value={product.color}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="image">Product image: </label>
          <input
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="price">Price: </label>
          <input
            type="text"
            id="price"
            name="price"
            value={Number(product.price)}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="category">Category: </label>
          <select
            type="text"
            id="category"
            name="category"
            onChange={handleInputChange}
            required
          >
            <option defaultValue="category">Category</option>
            <option value="phone">Phone</option>
            <option value="mac">Mac</option>
          </select>
          <br />

          <button className="button-apple" type="submit">
            Save
          </button>
        </form>
      )}
    </>
  );
}
