import { Link } from "react-router-dom";
import { useAuthContext } from "../Auth/Auth.context";
import { useNavigate } from "react-router";

export function CartItem({ product }) {
  const navigate = useNavigate();
  const { token } = useAuthContext();

  async function handleDelete() {
    const response = window.confirm(
      `Are you sure you want to delete this product "${product.name}"?`
    );
    if (response) {
      await fetch(`http://localhost:3005/cart/${product.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
      navigate("/cart");
    }
  }

  if (!product) {
    return <p>Loading ...</p>;
  }

  return (
    <article>
      <Link className="cart-article" to={`/products/${product.productCode}`}>
        <img
          className="lg:w-[200px] md:w-[150px] m-auto"
          src={product.image}
          alt={`Poster of ${product.name}`}
        />
        <div>
          <h1>
            <strong>{product.name}</strong>
          </h1>
          <h2>{product.color}</h2>
        </div>
        <div>
          <h2>{product.price} lei</h2>
        </div>
      </Link>
      <button className="button-apple" onClick={handleDelete}>
        Remove from cart
      </button>
    </article>
  );
}
