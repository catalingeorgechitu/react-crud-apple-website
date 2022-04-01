import { useAuthContext } from "../Auth/Auth.context";
import React from "react";
import { useNavigate } from "react-router";

export function Menu() {
  const navigate = useNavigate();
  const { logout } = useAuthContext();

  function navigateToSettings() {
    navigate("/settings");
  }

  function navigateToOrders() {
    navigate("/orders");
  }

  return (
    <div>
      <div>
        <h1 className="text-2xl">
          <strong>Menu</strong>
        </h1>
      </div>

      <div>
        <h1 className="text-xl mt-3">
          Check your account settings{" "}
          <i className="fa-solid fa-gear text-base"></i>
        </h1>

        <button className="button-apple mx-auto" onClick={navigateToSettings}>
          Settings
        </button>
      </div>
      <div>
        <h1 className="text-xl mt-3">Check your last orders!</h1>
        <button className="button-apple mx-auto" onClick={navigateToOrders}>
          Your Orders
        </button>
      </div>
      <div>
        <h1 className="text-xl mt-3">Logout from your account</h1>
        <button className="button-apple mx-auto" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
