import Datasoup from "./jsonresponse/query.json";
import holiday from "./jsonresponse/holiday.json";
import salad from "./jsonresponse/salad.json";
import vegetarian from "./jsonresponse/vegetarian.json";
import snack from "./jsonresponse/snack.json";
import dessert from "./jsonresponse/dessert.json";
import lunch from "./jsonresponse/lunch.json";
import sidedish from "./jsonresponse/sidedish.json";
import maincourse from "./jsonresponse/maincourse.json";
import dinner from "./jsonresponse/dinner.json";
import { useNavigate } from "react-router-dom";

import Incredient from "./Incredient";
import Nutrition from "./Nutrition.js";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  const [recipe, setRecipe] = useState([]);
  // console.log("Data:", salad);
  // async function fetchApi(q) {
  //   const options = {
  //     method: "GET",
  //     url: "https://edamam-recipe-search.p.rapidapi.com/search",
  //     params: { q: q, from: 0, to: 100 },
  //     headers: {
  //       "X-RapidAPI-Key": "33ee6288c9msh8cfa98c9a2f8257p15eff1jsn52d55122c0d9",
  //       "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  //     },
  //   };
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setRecipe(response.data.hits);
  //       console.log(recipe);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }
  // useEffect(() => {
  //   fetchApi("snack");
  // }, [recipe.length]);
  console.log(vegetarian);
  let navigate = useNavigate();
  const [query, setQuery] = useState("");
  const clickHandler = (index, q) => {
    navigate(`/nutrition/${index}/${q}`);
  };
  const clickHandler1 = (index, q) => {
    navigate(`/incredient/${index}/${q}`);
  };
  return (
    <>
      <div className="container mt-3">
        <div className="col text-center">
          <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Recipe App</h1>
        </div>
        <div className="row">
          <div className="col text-center">
            <button
              type="button"
              className="btn btn-dark  mx-3"
              onClick={() => {
                setRecipe(dinner.hits);
                setQuery("dinner");
              }}
            >
              Dinner
            </button>
            <button
              type="button"
              className="btn btn-dark  mx-3"
              onClick={() => {
                setRecipe(lunch.hits);
                setQuery("lunch");
              }}
            >
              Lunch
            </button>
            <button
              type="button"
              className="btn btn-dark  mx-3"
              onClick={() => {
                setRecipe(salad.hits);
                setQuery("salad");
              }}
            >
              salad
            </button>
            <button
              type="button"
              className="btn btn-dark  mx-3"
              onClick={() => {
                setRecipe(maincourse.hits);
                setQuery("maincourse");
              }}
            >
              main-course
            </button>
            <button
              type="button"
              className="btn btn-dark  mx-3"
              onClick={() => {
                setQuery("dessert");
                setRecipe(dessert.hits);
              }}
            >
              dessert
            </button>
            <button
              type="button"
              className="btn btn-dark  mx-3"
              onClick={() => {
                setRecipe(snack.hits);
                setQuery("snack");
              }}
            >
              snack
            </button>
            <button
              type="button"
              onClick={() => {
                setRecipe(vegetarian.hits);
                setQuery("vegetarian");
              }}
              className="btn btn-dark  mx-3"
            >
              vegetarian
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {recipe.map((eachRecipe, index) => (
          <div key={index} className="col md-3">
            <div className="my-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={eachRecipe.recipe.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{eachRecipe.recipe.label}</h5>
                  <p className="card-text">Source:{eachRecipe.recipe.source}</p>

                  <p className="card-text">
                    CuisineType:{eachRecipe.recipe.cuisineType}
                  </p>
                  <p className="card-text"></p>
                  <a
                    href={eachRecipe.recipe.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-sm btn btn-dark"
                  >
                    check official page
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Main;
