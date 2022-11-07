import thisPicGoesHard from './thisPicGoesHard.jpg'; // importing images for webpack
import portfolio from './portfolio.png';
import todoListPic from './todoListPic.png';
import pizzaWebsitePic from './pizzaWebsite.png';
import gamePic from './gamePic.png';
import capybaraPic from './capybaraPic.png';
import mixerFixer from './mixerFixer.png';
import signUpPage from './signUpPage.png';

const observer = new IntersectionObserver((entries) => { // this is an observer to see if
  entries.forEach((entry) => { // current section is on screen
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden'); // adds event listener to all objects that are hidden
hiddenElements.forEach((el) => observer.observe(el));
const left = document.getElementById('leftSide');
const handleOnMove = (e) => { // watches mouses current position and changes accordingly
  const p = (e.clientX / window.innerWidth) * 100;
  left.style.width = `${p}%`;
};
document.onmousemove = (e) => handleOnMove(e);
document.ontouchmove = (e) => handleOnMove(e.touches[0]);

let myPic = document.querySelector('#thisPicGoesHard'); // these are all just adding pictures using webpack
myPic.src = thisPicGoesHard;

myPic = document.querySelector('#portfolioPic');
myPic.src = portfolio;

myPic = document.querySelector('#todoListPic');
myPic.src = todoListPic;

myPic = document.querySelector('#restaurantPagePic');
myPic.src = pizzaWebsitePic;

myPic = document.querySelector('#tikTacToePic');
myPic.src = gamePic;

myPic = document.querySelector('#capybaraPic');
myPic.src = capybaraPic;

myPic = document.querySelector('#mixerFixerPic');
myPic.src = mixerFixer;

myPic = document.querySelector('#signUpPagePic');
myPic.src = signUpPage;
