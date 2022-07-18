import { loadHeaderFooter, getParams } from "./utils.js";


function createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }
    return xhr;
  }
  
  // login
function login() {
    console.log("here");
    const loginObject = createCORSRequest("GET", "https://cse341boredapi.herokuapp.com/login/");
    localStorage.setItem("authTocken", loginObject.response_type);
    debugger;
    if (!loginObject) {
      console.log("CORS not supported");
    }
  }

  loadHeaderFooter();
