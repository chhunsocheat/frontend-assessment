import React from "react";
import style from "./header.module.css";
export default function Header() {
  return (
    <div className={style.container}>
      <picture className="img-thumbnail">
        <source
          media="(min-width: 620px)"
          srcset="http://via.placeholder.com/1920x650"
        />
        <img
        className="img-thumbnail"
        src="http://via.placeholder.com/600x600"
        alt=""
      />
      </picture>
      
      <div className={style.text}>
        <h2>Hello Developers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adiposcing elit</p>
      </div>
    </div>
  );
}
