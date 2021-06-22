import React from "react";
import { text } from "./data.js";
import EachBody from "./EachBody"
import style from "./eachbody.module.css"
export default function Body() {
  return (
    <div className={style.bodyContainer} >
      {text.map((el) => {
        return <EachBody  text={el}/>;
      })}
      
    </div>
  );
}
