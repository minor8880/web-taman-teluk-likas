// script.js
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

const commentForm = document.querySelector('form');
const commentList = document.querySelector('.comment-list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const commentText = document.querySelector('#comment').value;
  const newComment = document.createElement('div');
  newComment.textContent = commentText;
  commentList.appendChild(newComment);
  document.querySelector('#comment').value = '';
});