import refs from './refs';
import cardsListMarkup from '../templates/imageList.hbs';

const options = {
  rootMargin: '200px',
};

const callback = function (entries) {
  entries.forEach(async entry => {
    if (entry.isIntersecting && refs.fetchImage.fetchArticles !== '') {
      console.log('загружаем следущие картинки');
      console.log(entry);
      const data = await refs.fetchImage.fetchArticles();
      refs.gallery.insertAdjacentHTML('beforeend', cardsListMarkup(data.hits));
      refs.fetchImage.nextPage();
    }
  });
};
let observer = new IntersectionObserver(callback, options);

export default function infinityScroll() {
  observer.observe(refs.divForScrollFetch);
}
