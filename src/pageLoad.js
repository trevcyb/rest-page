function createHeader (id, name) {
    const header = document.createElement("header");
    header.id = id;
    header.innerText = name;
    return header;
}

function createButton (id, name) {
    const button = document.createElement("button");
    button.id = id;
    button.innerText = name;
    button.classList.add("tab");
    return button;
}

function createNav (id) {
    const nav = document.createElement("nav");
    nav.id = id;

    const homeBtn = createButton('home', 'Home');
    const menuBtn = createButton('menu', 'Menu');
    const careersBtn = createButton('careers', 'Careers');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(careersBtn);

    return nav;
}

function createMain (id) {
    const main = document.createElement("main");
    main.id = id;
    return main;
}

function createFooter (id) {
    const footer = document.createElement("footer");
    footer.id = id;
    footer.innerText = "Made in Norway, Hinga do dinga dinga doo";
    return footer;
}

function loadPage () {
    const content = document.getElementById("content");

    const header = createHeader('header', 'Hinga Dinga Delights');
    content.appendChild(header);

    const nav = createNav('nav');
    content.appendChild(nav);

    const main = createMain('main');
    content.appendChild(main);

    const footer = createFooter('footer');
    content.appendChild(footer);
}

export default loadPage