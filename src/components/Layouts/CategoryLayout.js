import Link from 'next/link';
import React, { useState } from 'react';

const CategoryLayout = ({children}) => {
    const [res ,setRes] = useState('')
console.log(children);
    
    
    const categoryList = [
      "All",
      "Seafood",
      "Chicken",
      "Beef",
      "Starter",
      "Vegetarian",
      "Breakfast",
    ];
    const data = categoryList.map((category)=>{
        // console.log(category);
      return category;
        // return setRes(category);
    })
    
    
    return (
      <section className="categories-section">
        <div className="container">
          <h4>Categories</h4>
          <div className="content-container">
            <div className="category-list-container">
              <ul className="list">
                {categoryList.map((category, i) => (
                  <Link href={`/?category=${category}`} key={i}>
                    <button className="btn list-item">{category}</button>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="content">{children}</div>
          </div>
        </div>
      </section>
    );
};

export default CategoryLayout;