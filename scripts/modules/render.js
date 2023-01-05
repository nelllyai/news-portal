import { createCard } from "./create.js";
import fetchRequest from "./fetchRequest.js";

export const renderHeadlines = count => {
  return fetchRequest('https://newsapi.org/v2/top-headlines?country=ru', {
    method: 'GET',
    headers: {
      'X-Api-Key': '9ab5ff18e158417294f8065e87ce9a23'
    },
    callback(err, data) {
      if (err) {
        console.error(err);
        return;
      }

      const template = document.createDocumentFragment();
      const title = document.createElement('h2');
      title.className = 'title';
      title.textContent = 'Свежие новости';
      const articles = data.articles.slice(0, count);
      const allHeadlines = articles.map(createCard);

      template.append(title, ...allHeadlines);

      return template;
    }
  });
};

export const renderNews = (request, count) => {
  return fetchRequest(`https://newsapi.org/v2/everything?q=${request}`, {
    method: 'GET',
    headers: {
      'X-Api-Key': '9ab5ff18e158417294f8065e87ce9a23'
    },
    callback(err, data) {
      if (err) {
        console.error(err);
        return;
      }

      const template = document.createDocumentFragment();
      const title = document.createElement('h2');
      title.className = 'title';
      title.textContent = `По вашему запросу "${request}" найдено ${count} результатов`;
      const articles = data.articles.slice(0, count);
      const allArticles = articles.map(createCard);
      
      template.append(title, ...allArticles);
      return template;
    }
  });
};
