import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Button } from "react-bootstrap";
import OffCanvas from "@/components/OffCanvas/OffCanvas";
import CategoryList from "@/components/CategoryList/CategoryList";
import AllMeals from "@/components/AllMeals/AllMeals";

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button
        variant="primary"
        onClick={toggleShow}
        className="btn btn-canvas "
      >
        <svg
          id="Layer_1"
          enable-background="new 0 0 512 512"
          height="24"
          viewBox="0 0 512 512"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m16 90.259h243.605c7.342 33.419 37.186 58.508 72.778 58.508s65.436-25.088 72.778-58.508h90.839c8.836 0 16-7.164 16-16s-7.164-16-16-16h-90.847c-7.356-33.402-37.241-58.507-72.77-58.507-35.548 0-65.419 25.101-72.772 58.507h-243.611c-8.836 0-16 7.164-16 16s7.164 16 16 16zm273.877-15.958c0-.057.001-.115.001-.172.07-23.367 19.137-42.376 42.505-42.376 23.335 0 42.403 18.983 42.504 42.339l.003.235c-.037 23.407-19.091 42.441-42.507 42.441-23.406 0-42.454-19.015-42.507-42.408zm206.123 347.439h-90.847c-7.357-33.401-37.241-58.507-72.77-58.507-35.548 0-65.419 25.102-72.772 58.507h-243.611c-8.836 0-16 7.163-16 16s7.164 16 16 16h243.605c7.342 33.419 37.186 58.508 72.778 58.508s65.436-25.089 72.778-58.508h90.839c8.836 0 16-7.163 16-16s-7.164-16-16-16zm-163.617 58.508c-23.406 0-42.454-19.015-42.507-42.408l.001-.058c0-.058.001-.115.001-.172.07-23.367 19.137-42.377 42.505-42.377 23.335 0 42.403 18.983 42.504 42.338l.003.235c-.034 23.41-19.089 42.442-42.507 42.442zm163.617-240.248h-243.605c-7.342-33.419-37.186-58.507-72.778-58.507s-65.436 25.088-72.778 58.507h-90.839c-8.836 0-16 7.164-16 16 0 8.837 7.164 16 16 16h90.847c7.357 33.401 37.241 58.507 72.77 58.507 35.548 0 65.419-25.102 72.772-58.507h243.611c8.836 0 16-7.163 16-16 0-8.836-7.164-16-16-16zm-273.877 15.958c0 .058-.001.115-.001.172-.07 23.367-19.137 42.376-42.505 42.376-23.335 0-42.403-18.983-42.504-42.338l-.003-.234c.035-23.41 19.09-42.441 42.507-42.441 23.406 0 42.454 19.014 42.507 42.408z"></path>
        </svg>
      </Button>
      <section className="categories-section">
        <div className="container">
          <h4>Categories</h4>
          <div className="content-container">
            <CategoryList
              categoryList={categoryList}
              categoryTab={categoryTab}
              setCategoryTab={setCategoryTab}
              categories={categories}
            />

            <AllMeals
              mealsData={mealsData}
              meals={meals}
              categoryTab={categoryTab}
              isLoading={isLoading}
            />
          </div>
        </div>
      </section>
      <ScrollToTop color="#6f00ff" />
      <OffCanvas
        show={show}
        categoryList={categoryList}
        categoryTab={categoryTab}
        setCategoryTab={setCategoryTab}
        categories={categories}
        handleClose={handleClose}
      />
    </>
  );
};

export default HomePage;
