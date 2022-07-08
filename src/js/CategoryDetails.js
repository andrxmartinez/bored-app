import { loadHeaderFooter } from "./utils.js";
loadHeaderFooter();

export default class CategoryDetails {
  constructor(ideas) {
    this.ideas = ideas;
  }

  init() {
    const activities = document.getElementById("activities");
    this.ideas.forEach((idea) => {
      const ideaElement = this.renderCategoryIdea(idea);
      activities.innerHTML += ideaElement;
    });
  }

  renderCategoryIdea(idea) {
    return `<span>${idea.name}</span>`;
  }
}
