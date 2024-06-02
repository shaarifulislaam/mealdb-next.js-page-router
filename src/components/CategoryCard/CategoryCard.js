import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryCard = ({meal}) => {
      const { idMeal,strMeal, strMealThumb } = meal;
    return (
      <Link href={`/meal/${idMeal}`}>
        <div className="category-container">
          <div className="img-container">
            <Image src={strMealThumb} width={300} height={300} alt="" />
          </div>
          <div className="text-content">
            <h6 className="meal-name">{strMeal}</h6>
          </div>
        </div>
      </Link>
    );
};

export default CategoryCard;