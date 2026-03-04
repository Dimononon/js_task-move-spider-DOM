'use strict';

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const [wallLeft, wallTop] = [wall.offsetLeft, wall.offsetTop];
  const [wallWidth, wallHeight] = [wall.offsetWidth, wall.offsetHeight];
  const [wallBorderLeft, wallBorderTop] = [wall.clientLeft, wall.clientTop];
  const [spiderWidth, spiderHeight] = [spider.offsetWidth, spider.offsetHeight];

  let newX = e.clientX - wallLeft - wallBorderLeft - spiderWidth / 2;
  let newY = e.clientY - wallTop - wallBorderTop - spiderHeight / 2;

  if (newX < 0) {
    newX = 0;
  }

  if (newY < 0) {
    newY = 0;
  }

  if (newX > wallWidth - spiderWidth - wallBorderLeft - wallBorderTop) {
    newX = wallWidth - spiderWidth - wallBorderLeft - wallBorderTop;
  }

  if (newY > wallHeight - spiderHeight - wallBorderLeft - wallBorderTop) {
    newY = wallHeight - spiderHeight - wallBorderLeft - wallBorderTop;
  }

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
