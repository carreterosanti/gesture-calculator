import React from "react";
import { Link } from "react-router-dom";

export default function TopRightLinkIcon(props) {
  return (
    <Link to={props.to}>
      <div style={{ position: "relative" }}>
        <img className="right-top-icon" src={require(props.imgUrl + "")} />
      </div>
    </Link>
  );
}
