import { loadHeaderFooter } from "./utils.js";
import { getParams } from "./utils.js";
loadHeaderFooter();

export default class CategoryDetails {
  constructor(ideas) {
    this.ideas = ideas;
  }

  init() {
    const activities = document.getElementById("activities");
    const title = document.getElementById("title");

    const param = getParams("category").toUpperCase();
    title.innerHTML = this.renderTitle(param);
    this.ideas.forEach((idea) => {
      const ideaElement = this.renderCategoryIdea(idea);
      activities.innerHTML += ideaElement;
    });
  }

  renderCategoryIdea(idea) {
    return `<label>
    <input type="checkbox" name="${idea.name}" />
    <span>${idea.name}</span>
    </label>`;
  }

  renderTitle(title) {
    return `<h1>${title}</h1>`;
  }
}
