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
          <label htmlFor="name">Product name: </label>
          <input
            className="m-1"
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
            className="m-1"
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
            className="m-1"
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
            className="m-1"
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

          <label htmlFor="operatingsys">Operating System: </label>
          <input
            className="m-1"
            type="text"
            id="operatingsys"
            name="operatingsys"
            value={product.operatingsys}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="nuclee">CPU Cores: </label>
          <input
            className="m-1"
            type="text"
            id="nuclee"
            name="nuclee"
            value={product.nuclee}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="tech">Technology: </label>
          <input
            className="m-1"
            type="text"
            id="tech"
            name="tech"
            value={product.tech}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="weight">Weight: </label>
          <input
            className="m-1"
            type="text"
            id="weight"
            name="weight"
            value={product.weight}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="ppi">PPI: </label>
          <input
            className="m-1"
            type="text"
            id="ppi"
            name="ppi"
            value={product.ppi}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="camera">Camera: </label>
          <input
            className="m-1"
            type="text"
            id="camera"
            name="camera"
            value={product.camera}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="resolution">Resolution: </label>
          <input
            className="m-1"
            type="text"
            id="resolution"
            name="resolution"
            value={product.resolution}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="capacity">Memory: </label>
          <input
            className="m-1"
            type="text"
            id="capacity"
            name="capacity"
            value={product.capacity}
            onChange={handleInputChange}
            required
          />
          <br />

          <button className="button-apple" type="submit">
            Save
          </button>
        </form>
      )}
    </>
  );
}
