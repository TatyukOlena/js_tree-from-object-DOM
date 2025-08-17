'use strict';
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
const tree = document.querySelector('#tree');
function createTree(element, data) {
    const ul = document.createElement('ul');
    for(const product in data){
        const li = document.createElement('li');
        li.textContent = product;
        if (Object.keys(data[product]).length > 0) createTree(li, data[product]);
        ul.appendChild(li);
    }
    element.appendChild(ul);
}
createTree(tree, food);

//# sourceMappingURL=js_tree-from-object-DOM.f75de5e1.js.map
