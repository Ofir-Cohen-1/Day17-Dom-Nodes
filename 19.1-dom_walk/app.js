// const li2 = document.querySelector("li.start-here");
// li2.innerText = 'main title';

// const childUL = document.querySelector("ul ul");
// const newLI = document.createElement('li');
// newLI.innerText = 'sub title 4';
// childUL.appendChild(newLI);

// //todo 1:
const myList = document.querySelector("li.start-here");
myList.textContent = "main title";

// //todo 2:
const li3 = myList.nextElementSibling;
const myListSiblingChild_Ul = li3.firstElementChild;

const newSubTitle = document.createElement("li");
const textList = document.createTextNode("sub title 4");
newSubTitle.appendChild(textList);

myListSiblingChild_Ul.appendChild(newSubTitle);

// //todo 3:
const parent = myList.parentElement;
parent.lastElementChild.remove();

// //todo 4:
const body = parent.parentElement;
const head = body.previousElementSibling;
const title = head.lastElementChild;
title.textContent = "Master Of The Dom";
console.dir(title);

// //todo 5:
document.querySelector("div p").innerText = "Hello again!!!";
