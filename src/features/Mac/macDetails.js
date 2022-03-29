// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import { Link } from "react-router-dom";
// import { useAuthContext } from "../Auth/Auth.context";

// export function MacDetails() {
//   const { macId } = useParams();
//   const [mac, setMac] = useState(null);
//   const { user, token } = useAuthContext();
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch(`http://localhost:3005/macs/${macId}`)
//       .then((res) => res.json())
//       .then((data) => setMac(data));
//   }, [macId]);

//   async function handleDelete() {
//     const response = window.confirm(
//       `Are you sure you want to delete this product "${mac.name}"?`
//     );
//     if (response) {
//       await fetch(`http://localhost:3005/macs/${macId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       navigate("/macs");
//     }
//   }

//   async function handleAddToCart(e) {
//     e.preventDefault();

//     await fetch(`http://localhost:3005/cart`, {
//       method: "POST",
//       body: JSON.stringify({
//         name: mac.name,
//         color: mac.color,
//         productCode: mac.productCode,
//         image: mac.image,
//         price: mac.price,
//         category: mac.category,
//         userId: user.id,
//       }),
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     setMessage("Your product was added to cart.");
//   }

//   if (!mac) {
//     return <p>Loading ...</p>;
//   }

//   return (
//     <>
//       {message && <strong>{message}</strong>}
//       <article>
//         <h1>
//           <strong>{mac.name}</strong>
//         </h1>
//         <h2>{mac.price} lei</h2>
//         <img src={mac.image} alt={`Poster for ${mac.name}`} />
//       </article>
//       <div className="buttons">
//         <div>
//           {token && user.role === "admin" && (
//             <button className="button-apple" onClick={handleDelete}>
//               Delete product
//             </button>
//           )}
//         </div>
//         <div>
//           {token && user.role === "admin" && (
//             <Link to={`/macs/${mac.id}/edit`}>Edit product</Link>
//           )}
//         </div>
//         <div>
//           {token && (
//             <button
//               className="button-apple button-margin"
//               onClick={handleAddToCart}
//             >
//               Add to cart
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
