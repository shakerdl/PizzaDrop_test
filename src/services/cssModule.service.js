export const UseCssModule = (htmlElement, classes = {}) => {
    if(!htmlElement){
        console.error("htmlelement in not valid");
        return null;
    }
    if(typeof(htmlElement) !== "object"){
        console.error("htmlelement must be an object..");
        return null;
    }
    for (const key in classes) {
            const className = classes[key];
            const element = htmlElement.querySelector(`.${key}`);
            if (element) {
                swipeClasses(element, key, className);
            }
        
    }
}

function swipeClasses(element, key, className) {
    element.classList.remove(key);
    element.classList.add(className);
}
