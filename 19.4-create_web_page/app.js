//! Navbar
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
nav.style.background = "#6082B6";

//! add header
const header = document.createElement("h1");
document.body.appendChild(header);
header.textContent = "Welcome to my Website";
header.style.textAlign = "center";
header.style.margin = "80px 0";

//! add image
const imgContainer = document.createElement("div");
document.body.appendChild(imgContainer);
const image = document.createElement("img");
image.src = "https://www.vinu.edu/documents/10181/5193090/5004.jpg/28cf052a-9ecf-eeb3-1928-e8afc9b22670?version=1.0&t=1579102461703&download=true";
imgContainer.appendChild(image);

image.style.width = "600px";
imgContainer.style.display = "flex";
imgContainer.style.justifyContent = "center";

//! footer
const footer = document.createElement("footer");
footer.style =
  "background: #D3D3D3; max-width: 1335px; margin: 12rem auto 0 auto; padding: 0.3rem; border-radius: 10px; display: flex; flex-direction: column; align-items: center;";
document.body.appendChild(footer);

const footerHeader = document.createElement("h2");
footerHeader.innerText = "Social Media";
footer.appendChild(footerHeader);

const iconsContainer = document.createElement("div");
footer.appendChild(iconsContainer);

//! font awesome
const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/5c4607dc13.js";
script.crossorigin = "anonymous";
document.head.appendChild(script);

//! the 3 media icons
for (let i = 0; i < 3; i++) {
  const icons = [
    "fab fa-linkedin",
    "fab fa-instagram",
    "fab fa-facebook-square",
  ];
  const aFooter = document.createElement("a");
  aFooter.style = "margin: 0 10px;";
  aFooter.href = "";
  iconsContainer.appendChild(aFooter);
  const icon = document.createElement("i");
  icon.style =
    "color: #0A66C2; font-size: 2rem; transition: all 0.3s ease-in-out;";
  icon.classList = icons[i];
  aFooter.appendChild(icon);
}
