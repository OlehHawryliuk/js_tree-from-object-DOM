'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    li = document.createElement('li');

    li.textContent = key;

    if (Objectk.keys(data[key])) {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }
}

createTree(tree, food);
