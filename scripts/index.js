import { controlSearch } from "./modules/control.js";
import { renderHeadlines } from "./modules/render.js";

const init = () => {
  const headlinesWrapper = document.querySelector('.main__headlines');
  const newsWrapper = document.querySelector('.main__news');
  const searchForm = document.querySelector('.header__form');
  renderHeadlines(8).then(headlines => headlinesWrapper.append(headlines));
  controlSearch(searchForm, newsWrapper, headlinesWrapper);
}

init();
