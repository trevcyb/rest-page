import loadPage from "./pageLoad";
import loadCareers from "./careers";
import loadHome from "./home";
import loadMenu from "./menu";

init();

function navEvents() {
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const careersBtn = document.getElementById("careers");

    homeBtn.addEventListener("click", loadHome);
    menuBtn.addEventListener("click", loadMenu);
    careersBtn.addEventListener("click", loadCareers);
}

function init() {
    loadPage();
    loadHome();
    navEvents();
}