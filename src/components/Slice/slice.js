import { UseCssModule } from "../../services/cssModule.service";
const useClasses = require("./slice.module.css");
import classes3 from './slice.module.css';
import { rand } from "../../Utilis/Utilis";
import HTML from './slice.html';

export default class Slice extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    const classes = useClasses;
    debugger
    this.innerHTML = [HTML, `<style>${useClasses.toString()} </style>`].join("");
    UseCssModule(this, classes);
    this.renderSliceEffect();
    // Element functionality written in here
    this.duplicates(5);
  }


  duplicates(multi) {
    if (!multi) multi = 5;
    const slice = this.querySelector(`.triangle`);
    for (let index = 0; index < multi; index++) {
      const clone = slice.cloneNode(true);
      this.appendChild(clone);
    }
  }

  renderSliceEffect() {
    const slice = this.querySelector(`.triangle`);

    let w = 50;

    // x and y position limited to screen space
    let x = rand(500);
    let y = rand(500);

    // apply styles
    slice.style.width = w + 'px';
    slice.style.height = w + 'px';
    slice.style.top = y + 'px';
    slice.style.left = x + 'px';

    // 'move' dot with 900ms or more
    slice.style.transition = (rand(100) + 900) + 'ms';

    // apply random colour
    slice.style.background = `rgba(
        ${rand(255)},
        ${rand(255)},
        ${rand(255)},
        ${Math.random() + 0.5}
      )`;
  }
}







/* 

  // grab all DIV elements in the document
let divs = document.querySelectorAll('div');

// helper method to get a multitude of a
// random number as an integer 
/* const rand = (multi) => {
  return parseInt(multi * Math.random() ,10);
}
 */
// get width and height of the window
let ww = window.innerWidth;
let wh = window.innerHeight;

/* // define biggest possible value as constraint
let constraint = Math.min(ww, wh);
 */
// move the dots by changing the CSS values
function move() {

  // loop over all DIV elements
  divs.forEach((div) => {

    // Balls can be the width of the constraint 
    // or less
    let w = 50;

    // x and y position limited to screen space
    let x = rand(500);
    let y = rand(500);

    // apply styles
    div.style.width = w + 'px';
    div.style.height = w + 'px';
    div.style.top = y + 'px';
    div.style.left = x + 'px';

    // 'move' dot with 900ms or more
    div.style.transition = (rand(100) + 900) + 'ms';

    // apply random colour
    div.style.background = `rgba(
      ${rand(255)},
      ${rand(255)},
      ${rand(255)},
      ${Math.random() + 0.5}
    )`;
  });
}

// change dots every second
/* window.setInterval(move, 1000); */