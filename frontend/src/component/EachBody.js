import React from "react";
import { Card } from "react-bootstrap";
import style from "./eachbody.module.css";
export default function EachBody({ text }) {
  return (
    <div className={style.eachBody}>
      <Card
        style={{
          width: "18rem",
          margin: "20px 0px",
          padding: "15px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Card.Img
          variant="top"
          style={{ borderRadius: "8px" }}
          src="http://via.placeholder.com/400x300"
        />
        <Card.Body>
          <Card.Text style={{ minHeight: "220px" }}>{text}</Card.Text>
          <button className={style.btnReadMore}>Read More</button>
        </Card.Body>
      </Card>
    </div>
  );
}
