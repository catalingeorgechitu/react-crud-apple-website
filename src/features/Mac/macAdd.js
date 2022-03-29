// import { useState } from "react";
// import { useAuthContext } from "../Auth/Auth.context";

// export function MacAdd() {
//   const [mac, setMac] = useState({
//     name: "",
//   });
//   const { token } = useAuthContext();
//   const [message, setMessage] = useState("");

//   function handleInputChange(e) {
//     setMac({ ...mac, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     await fetch(`http://localhost:3005/macs`, {
//       method: "POST",
//       body: JSON.stringify(mac),
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     setMessage("Your product was saved");
//   }

//   if (!mac) {
//     return <p>Loading ...</p>;
//   }

//   return (
//     <>
//       {message && <strong>{message}</strong>}
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Product name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={mac.name}
//           onChange={handleInputChange}
//         />
//         <button className="button-apple" type="submit">
//           Save
//         </button>
//       </form>
//     </>
//   );
// }
