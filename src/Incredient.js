import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import salad from "./jsonresponse/salad.json";
import vegetarian from "./jsonresponse/vegetarian.json";
import snack from "./jsonresponse/snack.json";
import dessert from "./jsonresponse/dessert.json";
import lunch from "./jsonresponse/lunch.json";
import maincourse from "./jsonresponse/maincourse.json";
import dinner from "./jsonresponse/dinner.json";

const Incredient = () => {
  let [recipe, setRecipe] = useState();
  //   console.log(useParams());
  //   console.log(q);
  let { id, type } = useParams();

  useEffect(() => {
    if (type === "salad") {
      setRecipe(salad.hits);
    } else if (type === "dinner") {
      setRecipe(dinner.hits);
    } else if (type === "maincourse") {
      setRecipe(maincourse.hits);
    } else if (type === "snack") {
      setRecipe(snack.hits);
    } else if (type === "vegetarian") {
      setRecipe(vegetarian.hits);
    } else if (type === "dessert") {
      setRecipe(dessert.hits);
    } else if (type === "lunch") {
      setRecipe(lunch.hits);
    }
    //   const incredientList = recipe[id].incredientLine;
    //   console.log(incredientList);
  }, []);
  const [item, setItem] = useState([]);
  //   setRecipe(JSON.parse(recipe));
  //   setItem(recipe.filter((each, i) => i === id));
  //   console.log(item);
  console.log(recipe);
  return <div></div>;
};

export default Incredient;
