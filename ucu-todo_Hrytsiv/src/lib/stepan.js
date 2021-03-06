
export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name
    if (!isValid(element)) {
      throw "Element is not a tag name";
    }

    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {

      // TODO: 1. Create StepanError class to define all framework errors
      //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object
      this.parent = parent;
      if (parent === null || parent === undefined) {
        throw "parent is null or undefined";
      }

      if (!isValid(parent)) {
        throw "Element is not a tag name";
      }
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}

function isValid(tag) {
  return document.createElement(tag).toString() !== "[object HTMLUnknownElement]";
}
