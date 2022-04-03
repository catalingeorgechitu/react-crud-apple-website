import { useEffect, useState } from "react";
import { useAuthContext } from "../Auth/Auth.context";

export function Settings() {
  const [userSettings, setUserSettings] = useState("");
  const [message, setMessage] = useState("");
  const { user, token, logout } = useAuthContext();

  useEffect(() => {
    fetch(`http://localhost:3005/users/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserSettings(data));
  }, [user.id]);

  function handleInputChange(e) {
    setUserSettings({ ...userSettings, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:3005/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(userSettings),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setMessage("Your profile settings are saved");
    logout();
  }

  if (!userSettings) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      {message && <strong>{message}</strong>}
      <h1 className="text-xl"> Settings</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          className="m-1 p-1"
          placeholder={user.email}
          type="text"
          id="email"
          name="email"
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="firstName">First Name: </label>
        <input
          className="m-1 p-1"
          placeholder={user.firstName}
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          className="m-1 p-1"
          placeholder={user.lastName}
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="adress">Adress: </label>
        <input
          className="m-1 p-1"
          placeholder={user.adress}
          type="text"
          id="adress"
          name="adress"
          onChange={handleInputChange}
          required
        />

        <br />
        <label htmlFor="password">New password: </label>
        <input
          className="m-1 p-1"
          placeholder="Enter your new password"
          type="password"
          id="password"
          name="password"
          onChange={handleInputChange}
          required
        />
        <br />
        <button className="button-apple" type="submit">
          Save
        </button>
      </form>
    </>
  );
}
