function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}

export function renderWithTemplate(template, parent, data, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone, data);
  }
  parent.appendChild(clone);
}

export function getIdeas() {
  return fetch(baseURL + `/ideas`)
    .then(convertToJson)
    .then((ideas) => ideas);
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement("template");
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter() {
  const header = await loadTemplate("/src/partials/header.html");
  const footer = await loadTemplate("/src/partials/footer.html");
  const headerElement = document.getElementById("main-header");
  const footerElement = document.getElementById("main-footer");
  renderWithTemplate(header, headerElement);
  renderWithTemplate(footer, footerElement);
  document.querySelector(".loginbtn").addEventListener('click',login);
}

// login function would possibly work but back-end isnt getting us to where we need to be.
function login() {
  console.log("her2e");
  const loginObject = createCORSRequest("GET", "https://cse341boredapi.herokuapp.com/login/");
  localStorage.setItem("authTocken", loginObject.response_type);
  debugger;
  if (!loginObject) {
    console.log("CORS not supported");
  }
}
