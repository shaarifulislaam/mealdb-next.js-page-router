import React from "react";
import { Offcanvas } from "react-bootstrap";

const OffCanvas = ({ show, handleClose }) => {
  return (
    <>
      <Offcanvas show={show} scroll={true} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
