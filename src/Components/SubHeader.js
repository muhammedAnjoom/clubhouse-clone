import React from "react";
import { Link } from "react-router-dom";
import style from "../style/explore.module.css";

function SubHeader(props) {
  return( <div>
      <div className={style.head}>
      <Link to="/home">
          <img src="/images/arrow.png"/>
      </Link>
      </div>
      <div className={style.divhead}>
      <h3>{props.pageTitle}</h3>
      </div>
  </div>)
}

export default SubHeader;
