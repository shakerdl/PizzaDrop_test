export function DefineComponent(selector, component) {
    if (!selector || typeof (selector) !== "string") {
        console.error("selector not valid");
        return null;
    }
    if (!component || typeof (component) !== "function") {
        console.error("component is not valid");
        return null;
    }
    customElements.define(selector, component);
}


 export var rand = (multi) => {
    return parseInt(multi * Math.random() ,10);
  }