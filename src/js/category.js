import CategoryDetails from "./CategoryDetails.js";
import ExternalServices from "./ExternalServices.js";
import { getParams } from "./utils.js";

const external = new ExternalServices();

let categoryArray = [];

const param = getParams("category");

const getData = async () => {
  const data = await external.getData("ideas");

  data.map((idea) => {
    if (idea.category == param) {
      categoryArray.push(idea);
    }
  });

  const category = new CategoryDetails(categoryArray);

  function randomize() {
    const randomNumber = Math.floor(Math.random() * categoryArray.length);
    document.getElementById("selected").innerHTML = categoryArray[randomNumber].name;
  }
  document.getElementById("randomAll").addEventListener("click", randomize);

  category.init();
};
getData();
