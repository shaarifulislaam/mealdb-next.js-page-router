import Image from "next/image";
import Link from "next/link";
import React from "react";

const MealsCard = ({ category }) => {
  // console.log(category);
  
  const {idMeal, strMeal, strInstructions, strMealThumb } = category;
  // console.log(meal);

  return (
    // <div className="category-container">
    //   {meal?.strMeal}
    //   <div className="img-container">
    //     <Image
    //       src={categoryTab == "All" ? strCategoryThumb : strMealThumb}
    //       width={300}
    //       height={300}
    //       alt=""
    //     />
    //   </div>
    //   <div className="text-content">
    //     <h6 className="meal-name">
    //       {categoryTab == "All" ? strCategory : strMeal}
    //     </h6>
    //     {category && (
    //       <p className="meal-desc">{`${strCategoryDescription.slice(
    //         0,
    //         200
    //       )}...`}</p>
    //     )}
    //   </div>
    // </div>mealsId
    <Link href={`/meal/${idMeal}`}>
      <div className="category-container">
        <div className="img-container">
          <Image src={strMealThumb} width={300} height={300} alt="" />
        </div>
        <div className="text-content">
          <h6 className="meal-name">{strMeal}</h6>

          <p className="meal-desc">{`${strInstructions.slice(0, 200)}...`}</p>
        </div>
      </div>
    </Link>
  );
};

export default MealsCard;
