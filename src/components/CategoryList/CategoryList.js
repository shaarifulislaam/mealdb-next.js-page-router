import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CategoryList = ({
  categoryTab,
  categoryList,
  categories,
  setCategoryTab,
}) => {
  const lists = ["All"];
  const list = categories.forEach((c) => lists.push(c.strCategory));
  const handleClick = (category) => {
    setCategoryTab(category);
  };
  return (
    <>
      <div className="category-list-container">
        <ul className="list">
          {categoryList.map((category, i) => (
            <button
              key={i}
              onClick={() => {
                handleClick(category);
              }}
              className={`btn list-item ${
                categoryTab == category ? "btn-success text-black bg-white" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
