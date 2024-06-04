import React from "react";
import MealsCard from "../MealsCard.js/MealsCard";

const AllMeals = ({ categoryTab, mealsData, meals, isLoading }) => {
  //   console.log(meals);

  return (
    <>
      <div className="content">
        {categoryTab == "All" && (
          <div className="meals-content">
            {mealsData?.map((meal) => (
              <MealsCard key={meal?.idMeal} meal={meal}></MealsCard>
            ))}
          </div>
        )}
        <div className="meals-content">
          {isLoading ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <>
              {meals?.map((meal) => (
                <MealsCard key={meal?.idMeal} meal={meal}></MealsCard>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AllMeals;
