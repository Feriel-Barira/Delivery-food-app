import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
          Craving something delicious? Look no further! Our app brings your
          favorite dishes right to your doorstep. Browse a wide selection of
          local restaurants, explore diverse cuisines, and customize your order
          to satisfy your taste buds.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
