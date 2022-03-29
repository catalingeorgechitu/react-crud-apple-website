// import React, { useState, useEffect } from "react";
// import { useAuthContext } from "../Auth/Auth.context";
// import { CartItem } from "./CartItem";

// export function GetCartQty(handleDelete) {
//   const [products, setProducts] = useState(null);
//   const [prodQty, setProdQty] = useState(null);
//   const { user, token } = useAuthContext();

//   useEffect(() => {
//     fetch(`http://localhost:3005/cart?&userId=${user.id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, [user.id, prodQty]);

//   if (!products) {
//     return <p>Loading ...</p>;
//   }

//   function handleProdQty() {
//     setProdQty(products.length);
//   }

//   function handleAll() {
//     handleProdQty();
//     handleDelete();
//   }

//   console.log(prodQty);

//   return (
//     <div>
//       <button onClick={handleAll}>APASA</button>
//     </div>
//   );
// }
