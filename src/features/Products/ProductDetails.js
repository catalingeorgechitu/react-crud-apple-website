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

  async function handleAddToCart(e) {
    e.preventDefault();

    await fetch(`http://localhost:3005/cart`, {
      method: "POST",
      body: JSON.stringify({
        name: product.name,
        color: product.color,
        productCode: product.productCode,
        image: product.image,
        price: product.price,
        category: product.category,
        userId: user.id,
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
      {message && <strong>{message}</strong>}
      <article>
        <img
          className="lg:w-[400px] md:w-[350px] m-auto"
          src={product.image}
          alt={`Poster for ${product.name}`}
        />
        <h1>
          <strong>{product.name}</strong>
        </h1>
        <h2>{product.price} lei</h2>
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
    </>
  );
}
