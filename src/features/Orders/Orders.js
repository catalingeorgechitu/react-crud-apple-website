// import React, { useEffect, useState } from "react";
// import { useAuthContext } from "../Auth/Auth.context";

// export function Orders() {
//   const [products, setProducts] = useState(null);
//   const { user, token } = useAuthContext();

//   async function getCartItems(e) {
//     e.preventDefault();

//     await fetch(`http://localhost:3005/cart?&userId=${user.id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }

//   //   if (!products) {
//   //     return <p>Loading ...</p>;
//   //   }

//   return (
//     <div>
//       <button onClick={getCartItems}>Click me</button>
//     </div>
//   );
// }

import { forEach } from "json-server-auth";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../Auth/Auth.context";

export function Orders() {
  const [ceva, setCeva] = useState(null);
  const { user, token } = useAuthContext();

  async function testFunction(e) {
    e.preventDefault();

    await fetch(`http://localhost:3005/orders/`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((ordere) => setCeva(ordere));
  }

  async function testFunction2(e) {
    e.preventDefault();

    console.log(ceva);

    // for (let i = 0; i < ceva.length; i++) {
    //   console.log(ceva[i].user.id);
    // }

    // if (ceva.user.id === 4) {
    //   console.log("Este userul tau");
    // }
  }

  return (
    <div>
      <button className="button-apple" onClick={testFunction}>
        Ce ordere am?
      </button>
      <br />
      <button className="button-apple" onClick={testFunction2}>
        User id-ul din acest order
      </button>
    </div>
  );
}
