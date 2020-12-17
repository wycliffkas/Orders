import React from "react";
import app from "../config/firebaseConfig"

const Orders = () => {
  return (
  <div>
    <h1>Orders</h1>
    <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
  );
};

export default Orders;
