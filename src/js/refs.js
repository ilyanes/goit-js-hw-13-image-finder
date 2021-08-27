import fetchImageApi from '../js/apiService';
import NoticeMessage from '../js/notice';
import LoadMoreBtn from '../js/loadMoreBtn';

const searchForm = document.getElementById('search-form');
const divForScrollFetch = document.querySelector('.empty-div-for-scrollfetch');
const submitBtn = document.querySelector('.submit_btn');
const renderBox = document.querySelector('.renderBox');
const gallery = document.querySelector('.gallery');
const noticeMessage = new NoticeMessage();
const fetchImage = new fetchImageApi();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
export default {
  searchForm,
  divForScrollFetch,
  submitBtn,
  renderBox,
  gallery,
  noticeMessage,
  fetchImage,
  loadMoreBtn,
};
