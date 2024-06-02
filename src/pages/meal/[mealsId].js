import Image from "next/image";
import Link from "next/link";
import RedirectUser from "../redirect-user";

export const getServerSideProps = async (context) => {
  
  const { mealsId } = context.params;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`
  );
  const data = await res.json();
  const result = data.meals[0];
//   console.log(result);
  return {
    props: {
      meal: result,
    },
  };
};


// export async function getStaticPaths() {
  
//   const res = await fetch(
//     "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
//   );
//   const data = await res.json();
// const result = data.meals;
// console.log(result);
  
//   const paths = result.map((dt) =>
//    {
//      params: {
//        id: Number(dt.idMeal);
//      }
//    }
   
//   );

  
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
 
//   const res = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/random.php/${params.id}`
//   );
//   const meal = await res.json()
//  console.log(meal)
//   return { props: { meal } }
// }


const Meal = ({meal}) => {
//   console.log(meal);
  const { idMeal, strMeal, strCategory, strMealThumb, strInstructions } = meal;

  return (
    <section className="meal-details-section">
      <div className="container">
        <Link href="/">
          <button className="btn p-0">Back</button>
        </Link>
        <h1>{meal.strMeal}</h1>
        <div className="img-container">
          <Image
            className="str-img"
            src={strMealThumb}
            width="100"
            height="100"
            layout="responsive"
            objectFit="contain"
            alt="str imge"
          />
        </div>
        <p>{strInstructions}</p>
      </div>
     
    </section>
  );
};

export default Meal;
