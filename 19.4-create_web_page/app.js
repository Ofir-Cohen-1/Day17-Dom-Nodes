// Navbar
const nav = document.createElement("nav");
document.body.appendChild(nav);
const ul = document.createElement("ul");
nav.appendChild(ul);
const body = document.querySelector("body");
body.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";

document.body.style.margin = 0;
document.body.style.color = "#36454F";

for (let i = 0; i < 3; i++) {
  ul.appendChild(document.createElement("a"));
}

const contentOfNavbar = ["home", "about", "connect"];

const allATags = document.querySelectorAll("a");
console.log(allATags);

for (let i = 0; i < contentOfNavbar.length; i++) {
  allATags[i].textContent = contentOfNavbar[i];
  allATags[i].setAttribute(
    "style",
    "list-style-type: none; margin: 10px 25px; font-size: 20px; color: #fff; text-decoration: none"
  );
  allATags[i].href = "#";
}

ul.setAttribute("style", "display: flex;");
ul.style.margin = "0";
nav.style.background = "#7393B3";

// add header
const header = document.createElement("h1");
document.body.appendChild(header);
header.textContent = "Welcome to my Website";
header.style.textAlign = "center";
header.style.margin = "80px 0";

// add image
const imgContainer = document.createElement("div");
document.body.appendChild(imgContainer);
const image = document.createElement("img");
image.src = "./XSdtyyG.png";
imgContainer.appendChild(image);

image.style.width = "600px";
imgContainer.style.display = "flex";
imgContainer.style.justifyContent = "center";

// Read more:
const subHeader = document.createElement("h2");
document.body.appendChild(subHeader);
subHeader.textContent =
  "";
subHeader.style.fontSize = "20px";
subHeader.style.margin = "50px 40px";
subHeader.style.textDecoration = "underline";

// links for ReadMore:
const linksContainer = document.createElement("div");
document.body.appendChild(linksContainer);
linksContainer.style.display = "flex";

// Could use an array of objects, instead of two arrays.
const linksNamesArr = [

];
const linksArr = [

];

for (let i = 0; i < linksNamesArr.length; i++) {
  linksContainer.appendChild(document.createElement("a"));
}

const allReadMoreLinks = linksContainer.querySelectorAll("a");

for (let i = 0; i < linksNamesArr.length; i++) {
  allReadMoreLinks[i].textContent = linksNamesArr[i];
  allReadMoreLinks[i].href = linksArr[i];

  allReadMoreLinks[i].setAttribute(
    "style",
    "list-style-type: none; margin: 10px 50px; font-size: 15px; color: #333; text-decoration: none; font-weight: 500"
  );
  allATags[i].href = "#";
}