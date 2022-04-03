import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Auth/Auth.context";

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { user, token } = useAuthContext();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3005/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  // Deletes the selected product
  async function handleDelete() {
    const response = window.confirm(
      `Are you sure you want to delete this product "${product.name}"?`
    );
    if (response) {
      await fetch(`http://localhost:3005/products/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
    }
  }

  // Adds the selected product in the user's cart
  async function handleAddToCart(e) {
    e.preventDefault();

    await fetch(`http://localhost:3005/cart`, {
      method: "POST",
      body: JSON.stringify({
        name: product.name,
        color: product.color,
        productCode: product.id,
        image: product.image,
        price: product.price,
        category: product.category,
        userId: user.id,
        operatingsys: product.operatingsys,
        nuclee: product.nuclee,
        tech: product.tech,
        weight: product.weight,
        ppi: product.ppi,
        camera: product.camera,
        resolution: product.resolution,
        capacity: product.capacity,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    setMessage("Your product was added to cart.");
  }

  if (!product) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      {message && <strong className="text-xl text-green-600">{message}</strong>}
      <h1 className="product-title-details text-2xl m-1">
        <strong>
          {product.name}, {product.capacity}, {product.operatingsys},{" "}
          {product.camera}, {product.color}
        </strong>
      </h1>
      <article className="product-article-details">
        <img
          className="lg:w-[400px] md:w-[350px] m-auto"
          src={product.image}
          alt={`Poster for ${product.name}`}
        />
        <div>
          <h1 className="text-left ml-5">
            <strong>Specifications:</strong>
            <ul>
              <li>Product: {product.name}</li>
              <li>Color: {product.color}</li>
              <li>Operating System: {product.operatingsys}</li>
              <li>CPU Cores: {product.nuclee}</li>
              <li>Technology: {product.tech}</li>
              <li>Weight: {product.weight}</li>
              <li>PPI: {product.ppi}</li>
              <li>Screen Resolution: {product.resolution}</li>
              <li>Camera: {product.camera}</li>
              <li>Memory: {product.capacity}</li>
            </ul>
          </h1>
        </div>
        <div className="price-article-details">
          <h1 className="text-xl">
            <strong>{product.price} lei</strong>
          </h1>
          <div>
            {token && (
              <button
                className="button-apple button-margin"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </article>

      <div className="buttons">
        {token && user.role === "admin" && (
          <div>
            <button
              className="button-apple button-margin"
              onClick={handleDelete}
            >
              Delete product
            </button>
          </div>
        )}

        {token && user.role === "admin" && (
          <div>
            <Link
              className="button-apple button-margin"
              to={`/products/${product.id}/edit`}
            >
              Edit product
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
