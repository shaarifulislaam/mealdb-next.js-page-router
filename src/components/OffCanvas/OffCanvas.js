import React from "react";
import { Offcanvas } from "react-bootstrap";
import CategoryList from "../CategoryList/CategoryList";

const OffCanvas = ({
  categoryTab,
  categoryList,
  categories,
  setCategoryTab,
  show,
  handleClose,
}) => {
  return (
    <>
      <Offcanvas
        className="off-Canvas-container"
        show={show}
        scroll={true}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Select Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CategoryList
            categoryList={categoryList}
            categoryTab={categoryTab}
            categories={categories}
            setCategoryTab={setCategoryTab}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
