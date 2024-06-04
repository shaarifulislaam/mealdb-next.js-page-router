import Image from "next/image";
import Link from "next/link";
import React from "react";

const MealsCard = ({ meal }) => {
  const { idMeal, strMeal, strInstructions, strMealThumb } = meal;

  return (
    <Link href={`/meal/${idMeal}`}>
      <div className="meal-block">
        <div className="img-container">
          <Image src={strMealThumb} width={300} height={300} alt="" />
        </div>
        <div className="text-content">
          <h6 className="meal-name">{strMeal}</h6>

          <p className="meal-desc">
            {strInstructions ? `${strInstructions.slice(0, 200)}...` : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MealsCard;
