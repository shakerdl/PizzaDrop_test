
import '@webcomponents/custom-elements';
import HTML from './app.html';
import "./style.css"
import { Config } from './Utilis/config/app_config';
import { DefineComponent } from './Utilis/Utilis';
// const p = new Person('Zura');
// console.info(p.sayHello());
// const arr = ["hello","world"]


// this is take the components that i put in the config and starting them on the begining of the projects

const onAppStart = (() => {
  Config.components.forEach(comp => {
    // const { selector, component } = comp;
    DefineComponent(comp[0], comp[1]);
  })
})();

// in the class its take the html from app.html and make it as a tag.


class Main extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Element functionality written in here

 
    this.innerHTML = HTML;
  

  }
  connectedCallback(){


  }
}

// here im  defind a tag call pizza-drop and import the Main class inside.

customElements.define('pizza-drop', Main);