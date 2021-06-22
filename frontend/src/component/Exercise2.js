import React from "react";
import { Tabs, Tab, Accordion, Card } from "react-bootstrap";
import { data } from "./data";
import { useMediaQuery } from "react-responsive";

export default function Exercise2() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <div>
      {isDesktopOrLaptop && (
        
        <Tabs
          defaultActiveKey="Section 1"
          transition={false}
          id="noanim-tab-example"
        >
          {data.map((el) => {
            return (
              <Tab eventKey={el.title} title={el.title}>
                <p>{el.content}</p>
              </Tab>
            );
          })}
        </Tabs>
      )}
      {isTabletOrMobile && (
        <Accordion defaultActiveKey="Section 1">
          {data.map((el, i) => {
            return (
              <Card>
              <Accordion.Toggle style={{cursor:"pointer"}} as={Card.Header} eventKey={el.title}>
                <span className="accordionTitle" >{el.title}</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={el.title}>
                <Card.Body>{el.content}</Card.Body>
              </Accordion.Collapse>
            </Card>
            );
          })}
        </Accordion>
      )}
    </div>
  );
}
