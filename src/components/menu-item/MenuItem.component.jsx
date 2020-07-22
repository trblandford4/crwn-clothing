import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const onMenuItemClick = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <div className={`${size} menu-item`} onClick={onMenuItemClick}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
