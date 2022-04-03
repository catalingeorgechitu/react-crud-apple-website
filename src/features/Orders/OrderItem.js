import { Link } from "react-router-dom";

export function OrderItem({ order }) {
  return (
    <article>
      <h1>
        <strong>ORDER ID: {order.id}</strong>
      </h1>
      {/* <Link className="order-list" to={`/orders/${order.id}`}> */}
      <div className="order-list">
        <div>
          <h2>
            <strong>Nr. of products: {order.productsNumber}</strong>
          </h2>
          {
            <h1 className="order-product-names">
              Products:
              {order.productNames.map((productName) => (
                <div key={productName}>{productName}</div>
              ))}
            </h1>
          }
        </div>
        <div>
          <h2>Invoiced for: {order.userName}</h2>
          <h2>Invoiced adress: {order.userAdress}</h2>
        </div>
        <h1>
          <strong>Total order price: {order.totalPrice} lei</strong>
        </h1>
      </div>
      {/* </Link> */}
    </article>
  );
}
