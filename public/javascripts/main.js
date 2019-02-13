'use strict';

const main = () => {
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };
  const arrowDown = document.querySelector('.arrow-section');
  arrowDown.addEventListener('click', scrollDown);
};

window.addEventListener('load', main);
