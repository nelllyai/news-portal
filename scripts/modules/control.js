import preload from "./preload.js";
import { renderHeadlines, renderNews } from "./render.js";

export const controlSearch = (form, newsWrapper, headlinesWrapper) => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const request = Object.fromEntries(formData).request;

    preload.show();
    Promise.all([renderNews(request, 8), renderHeadlines(4)])
      .then(articles => {
        preload.remove();
        newsWrapper.style.display = 'flex';
        newsWrapper.innerHTML = '';
        headlinesWrapper.innerHTML = '';
        newsWrapper.append(articles[0]);
        headlinesWrapper.append(articles[1]);
      })
  });
};
