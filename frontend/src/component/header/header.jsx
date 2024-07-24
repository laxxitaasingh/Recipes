import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="heading">
        <h1>Header</h1>
        <div className="buttons">
          <button>SignUp</button>
          <button>Login</button>
        </div>
      </div>
    </>
  );
}

export default Header;
