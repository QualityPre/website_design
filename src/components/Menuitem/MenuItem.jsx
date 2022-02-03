import "./MenuItem.css";

import React from "react";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-title">
          <p className="p__cormorant" style={{ color: "#DCCA86" }}>
            {title}
          </p>
        </div>
        <div className="app__menuitem-line"></div>
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
