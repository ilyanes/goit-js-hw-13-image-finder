// export default function fetchImage(searchQuery, pageNumber, perPageNumber) {
export default class FetchImage {
  constructor() {
    this.searchQuery = '';
    this.pageNumber = 1;
    this.perPage = 12;
  }
  async fetchArticles() {
    const USER_KEY = '23049135-63d939595882c9f020474dd76';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=${this.perPage}&key=${USER_KEY}`;
    const response = await fetch(url);
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
    // .then(response => response.json())
    // .catch(error => console.log(error));
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  pageLim() {
    this.perPage += 12;
  }
  nextPage() {
    this.pageNumber += 1;
  }
  resetPage() {
    this.perPage = 12;
    this.pageNumber = 1;
  }
}
