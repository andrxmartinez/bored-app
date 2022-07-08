import ExternalServices from "./ExternalServices.js";
import { loadHeaderFooter, getParams } from "./utils.js";
loadHeaderFooter();

const param = getParams("category");
console.log(param);
const external = new ExternalServices();

const getData = async () => {
  const data = await external.getData(param);
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
