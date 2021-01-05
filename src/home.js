function createAboutUs () {
    const aboutUs = document.createElement("section");

    const aboutUsHeader = document.createElement("h2");
    aboutUsHeader.innerHTML = "About Us";
    aboutUs.appendChild(aboutUsHeader);

    const aboutUsInfo = document.createElement("p");
    aboutUsInfo.innerHTML = "We are pioneers and through this specimen of fine dining, we are dedicated to providing the finest cuisine from the olden days of yore."
    aboutUs.appendChild(aboutUsInfo);

    return aboutUs;
}

function createLocation () {
    const location = document.createElement("section");

    const locationHeader = document.createElement("h2");
    locationHeader.innerHTML = "Location";
    location.appendChild(locationHeader);

    const locationInfo = document.createElement("p");
    locationInfo.innerHTML = "Hinga Dinga Delights <br> #42 Hinga Dinga Drive <br> Hinga Dinga Durgen";
    location.appendChild(locationInfo);

    return location;
}

function setActive(id) {
    const activeBtn = document.querySelector(".tab.active");
    if (activeBtn) activeBtn.classList.remove("active");

    const homeBtn = document.getElementById(id);
    homeBtn.classList.add("active");
}

function loadHome () {
    const content = document.getElementById("main");

    content.classList.add("flexy");
    content.classList.remove("griddy");

    content.innerText = "";

    const aboutUsPage = createAboutUs();
    const locationPage = createLocation();

    setActive("home");

    content.appendChild(aboutUsPage);
    content.appendChild(locationPage);
}

export default loadHome;

