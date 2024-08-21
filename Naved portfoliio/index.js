var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

function ScrollToContact() {
  document
    .getElementById("contact-right")
    .scrollIntoView({ behavior: "smooth" });
}
function ScrollToAbout() {
  document
    .getElementById("about-col-2")
    .scrollIntoView({ behaviour: "smooth" });
}
function ScrollToServices() {
  document.getElementById("services").scrollIntoView({ behaviour: "smooth" });
}
function ScrollToPortfolio() {
  document.getElementById("Portfolio").scrollIntoView({ behaviour: smooth });
}
