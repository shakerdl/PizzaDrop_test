import { UseCssModule } from "../../services/cssModule.service";
const useClasses = require("./box.module.css");
import HTML from './box.html';

export default class Box extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      const classes = useClasses.locals;
      this.innerHTML = [HTML,`<style>${useClasses.toString()}</style>`].join("");
      UseCssModule(this,classes);
      // Element functionality written in here
    }

  }
