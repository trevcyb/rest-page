function createCareers() {
    const careers = document.createElement("div");

    const careersHeader = document.createElement("h2");
    careersHeader.innerHTML = "Join our Clan! Post your CV below!";

    const cvInput = document.createElement("input");
    cvInput.innerHTML = "Attach CV here!"

    const subbtn = document.createElement("button");
    subbtn.innerHTML = "Submit";

    careers.appendChild(careersHeader);
    careers.appendChild(cvInput);
    careers.appendChild(subbtn);

    return careers;
}

function setActive(id) {
    const activeBtn = document.querySelector(".tab.active");
    if (activeBtn) activeBtn.classList.remove("active");

    const careersBtn = document.getElementById(id);
    careersBtn.classList.add("active");
}

function loadCareers() {
    const content = document.getElementById("main");

    content.classList.add("griddy");
    content.classList.remove("flexy");

    content.innerText = "";

    const careersPage = createCareers();

    content.appendChild(careersPage);

    setActive("careers");
}

export default loadCareers;