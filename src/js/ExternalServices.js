const baseURL = "https://cse341boredapi.herokuapp.com";

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
}

export default class ExternalServices {
  getData(category) {
    return fetch(baseURL + `/${category}`)
      .then(convertToJson)
      .then((data) => data);
  }

  //   async findActivityById(id) {
  //     return await fetch(baseURL + `/${id}`)
  //       .then(convertToJson)
  //       .then((data) => data.result);
  //   }
}
