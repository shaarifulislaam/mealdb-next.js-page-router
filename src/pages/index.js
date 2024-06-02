import React, { useEffect, useState } from "react";

import MealsCard from "@/components/MealsCard.js/MealsCard";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import ScrollToTop from "react-scroll-to-top";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  const result = await res.json();
  const data = result.meals;

  const categoriesRes = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const categoryData = await categoriesRes.json();
  //  console.log(categoryData.categories)

  return {
    props: {
      categories: categoryData.categories,
      mealsData: data,
    },
  };
};
const HomePage = ({ categories, mealsData }) => {
  const [categoryTab, setCategoryTab] = useState("All");
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const categoryList = ["All"];
  const list = categories.forEach((c) => categoryList.push(c.strCategory));
  const handleClick = (category) => {
    setCategoryTab(category);
  };
  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryTab}`
      );

      const data = await res.json();
      setMeals(data.meals);
      setIsLoading(false);
    };
    if (categoryTab !== "All") {
      fetchCategory();
    }
  }, [categoryTab]);

  return (
    <>
      <section className="categories-section">
        <div className="container">
          <h4>Categories</h4>
          <div className="content-container">
            <div className="category-list-container">
              <ul className="list">
                {categoryList.map((category, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      handleClick(category);
                    }}
                    className={`btn list-item ${
                      categoryTab == category
                        ? "btn-success text-black bg-white"
                        : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </ul>
            </div>
            <div className="content">
              {categoryTab == "All" && (
                <div className="meals-content">
                  {mealsData?.map((category) => (
                    <MealsCard
                      key={category?.idMeal}
                      category={category}
                      categoryTab={categoryTab}
                    ></MealsCard>
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
                      <CategoryCard
                        key={meal.idMeal}
                        meal={meal}
                        categoryTab={categoryTab}
                      ></CategoryCard>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop color="#6f00ff" />
    </>
  );
};

export default HomePage;
