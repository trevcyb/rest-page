function addMenuItem (src, name, price) {
    const item = document.createElement("div");
    item.classList = "food";

    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", name)
    item.appendChild(img);

    const foodName = document.createElement("div");
    foodName.innerHTML = name;
    foodName.classList.add("foodName");
    item.appendChild(foodName);

    const pricediv = document.createElement("div");
    pricediv.innerHTML = price;
    pricediv.classList.add("price");
    item.appendChild(pricediv);

    return item;
}

function setActive(id) {
    const activeBtn = document.querySelector(".tab.active");
    if (activeBtn) activeBtn.classList.remove("active");

    const menuBtn = document.getElementById(id);
    menuBtn.classList.add("active");
}

function loadMenu () {
    const content = document.getElementById("main");

    content.classList.add("griddy");
    content.classList.remove("flexy");

    content.innerText = "";

    setActive("menu");

    const foods = [
        addMenuItem("https://www.vikingcruises.com/oceans/images/CC_Norwegian_Style_Meatballs_Horiz_500x250_tcm13-106241.jpg", 
        "Thor's Balls", 
        "9.99 Yorens"),
        addMenuItem("https://week99er.com/wp-content/uploads/2015/06/viking-cake-2.jpg",
        "Bob OdinCake",
        "5.99 Yorens"),
        addMenuItem("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/4/28/0/tu1b07_danish_ham_1.jpg.rend.hgtvcom.826.620.suffix/1386085938782.jpeg",
        "Peesapork",
        "12.99 Yorens"),
        addMenuItem("https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1500/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2013%2F01%2F7b0e9392412d3086f0fc79f31a05114131026da7.jpeg",
        "Fowl Play",
        "8.99 Yorens"),
        addMenuItem("https://www.sbs.com.au/food/sites/sbs.com.au.food/files/ep3-viking-salmon-and-flatbread-h.jpg",
        "Fishsticks",
        "11.99 Yorens")
    ]

    foods.forEach(food => main.appendChild(food));
}

export default loadMenu;