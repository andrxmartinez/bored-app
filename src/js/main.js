import ExternalServices from "./ExternalServices.js";
import { loadHeaderFooter } from "./utils.js";
loadHeaderFooter();

const external = new ExternalServices();

const getData = async () => {
  const data = await external.getData("ideas");
  console.log(data);

  let categoryArray = [];
  data.map((idea) => {
    if (idea.category == "Dates") {
      categoryArray.push(idea);
    }
  });
  console.log(categoryArray);
};

getData();
