'use strict';

let receptNames = [];
let receptPrices = [];
let numberOrders = [];
const MIN_DELIVER_PRICE = 15.3;

const render = function (receptType) {
  let receptContainer = document.getElementById('recept-container');
  receptContainer.innerHTML = '';

  for (let j = 0; j < receptType.length; j++) {
    const recept = receptType[j];

    receptContainer.innerHTML += /*html*/ `<div class="recept-image-description">
    <div id="image-recept-type_${j}" class="image-recept-type"></div>  
        <p id="recipe${j}" class="arial p-margin recept-type-name">${recept['nameR']}</p>
        <p class="font-12 grey p-margin">${recept['descriptionR']}</p>  
    </div> 
 `;
    document.getElementById(
      `image-recept-type_${j}`
    ).style.backgroundImage = `url('${recept['imageR']}')`;

    subRender(receptContainer, recept);
  }
};

function subRender(receptContainer, receptType) {
  const receptR = receptType['dataR'];

  document.getElementById('min-order').innerHTML = MIN_DELIVER_PRICE.toFixed(
    2
  ).replace('.', ',');
  for (let i = 0; i < receptR.length; i++) {
    const recepttype = receptR[i];
    receptContainer.innerHTML += renderHTMLRecipe(recepttype, i);
  }
}

const renderHTMLRecipe = function (recepttype, index) {
  return `
        <div id="recept-container_${index}" class="recept-type" onclick="addReceptName('${
    recepttype['name']
  }',${recepttype['price']},${1})">
        <div class="name-line">
            <div class="name-info-grp">
                <p class="p-margin"><b>${recepttype['name']}</b></p>
                <img class="icons-shape" src="./icons/circle-info-solid.svg" alt="Info">
            </div>    
            <img id='img${index}' class="icons-shape btn-bg"  src="./icons/plus-solid.svg" alt="Hinzufügen">
        </div>
        <p class="p-margin grey">${recepttype['description']}</p>
        <p class='price p-margin'><b>${toGermanPreis(
          recepttype['price']
        )} €</b></p>
      </div>
  `;
};

const toGermanPreis = function (price) {
  let toString_price = String(price.toFixed(2));
  return toString_price.replace('.', ',');
};

const shipping = function (Id) {
  let id = document.getElementById(Id);
  let deliverId = document.getElementById('delivery-button');
  let takeId = document.getElementById('take-button');
  let deliverMiddleId = document.getElementById('delivery-button-middle');
  let takeMiddleId = document.getElementById('take-button-middle');
  takeId.style.backgroundColor = 'rgb(239, 237, 234)';
  deliverId.style.backgroundColor = 'rgb(239, 237, 234)';
  takeMiddleId.style.backgroundColor = 'rgb(239, 237, 234)';
  deliverMiddleId.style.backgroundColor = 'rgb(239, 237, 234)';
  reinitializeButtonColor();
  changeActiveButtonColor(id);
};

const reinitializeButtonColor = function () {
  document.getElementById('deliver-bicycle').style.filter =
    'invert(0%) sepia(100%) saturate(7500%) hue-rotate(189deg) brightness(111%) contrast(108%)';
  document.getElementById('take-cart').style.filter =
    'invert(0%) sepia(100%) saturate(7500%) hue-rotate(189deg) brightness(111%) contrast(108%)';
  document.getElementById('deliver-bicycle-middle').style.filter =
    'invert(0%) sepia(100%) saturate(7500%) hue-rotate(189deg) brightness(111%) contrast(108%)';
  document.getElementById('take-cart-middle').style.filter =
    'invert(0%) sepia(100%) saturate(7500%) hue-rotate(189deg) brightness(111%) contrast(108%)';
};

const changeActiveButtonColor = function (id) {
  id.style.backgroundColor = 'white';
  id.childNodes.item(1).style.filter =
    'invert(40%) sepia(81%) saturate(1285%) hue-rotate(1deg) brightness(98%) contrast(97%)';
};

const deliverPrice = function (Id) {
  let deliverBill = document.getElementById('delivery-bill');
  if (Id === 'take-button') {
    deliverBill.style.display = 'none';
    if (receptNames.length === 0) {
      return;
    } else {
      checkout();
    }
  } else if (Id === 'delivery-button') {
    deliverBill.style.display = 'flex';
    if (receptNames.length === 0) {
      return;
    } else {
      checkout();
    }
  }
};

function checkout() {
  if (calculateBill(receptPrices, numberOrders) >= MIN_DELIVER_PRICE) {
    showPayButton();
  } else {
    hidepayButton();
  }
}

const showPayButton = function () {
  document.getElementById('button-pay-container').style.display = '';
  document.getElementById('pay-button').disabled = false;
  document.getElementById('pay-button').style.color = 'white';
  document.getElementById('pay-button').style.backgroundColor =
    'rgb(243,104,5)';

  document.getElementById('pay-button-responsive').disabled = false;
  document.getElementById('pay-button-responsive').style.color = 'white';
  document.getElementById('pay-button-responsive').style.backgroundColor =
    'rgb(243,104,5)';
};

const hidepayButton = function () {
  document.getElementById('button-pay-container').style.display = '';
  document.getElementById('pay-button').disabled = true;
  document.getElementById('pay-button').style.backgroundColor =
    'rgb(239,237,234)';
  document.getElementById('pay-button').style.color = '#3c4c4f';

  document.getElementById('pay-button-responsive').disabled = true;
  document.getElementById('pay-button-responsive').style.backgroundColor =
    'rgb(239,237,234)';
  document.getElementById('pay-button-responsive').style.color = '#3c4c4f';
};

const restaurantLocation = function (Id, Address) {
  let location = document.getElementById('deliver-cost-line');
  location.innerHTML = '';
  if (Id === 'take-button') {
    location.innerHTML = /*html*/ ` <img class="icons-shape-smaller " src="./icons/location.svg" alt="Location"/> <p class="p-margin grey">${Address}</p>`;
  } else if (Id === 'delivery-button') {
    location.innerHTML = renderHTMLPriceSection();
  }
};

const renderHTMLPriceSection = function () {
  return `
    <img
    class="icons-shape-small"
    src="./icons/cart-shopping-solid.svg"
    alt=""
  />
  <p id="location" class="p-margin grey">
    Min. 18,90 € <b>&#183;</b>
  </p>
  <img
    class="icons-shape-small bg-green"
    src="./icons/bicycle-solid.svg"
    alt=""
  />
  <p class="p-margin green">Kostenlos</p>
    `;
};

const searchRecept = function () {
  let search = document.getElementById('menu-type-line');
  search.style.display = 'block';
  search.innerHTML = '';
  search.innerHTML = /*html*/ `
  <p class="p-margin"> <b>Suche im Menü</b></p>
  <div class="inline-input"> 
  <input id="search-recept" oninput="search()" class="input" type="text" placeholder="Suche nach Gerichten, usw...">
  <img id="close-button" onclick="closeSearchButton()" class="icons-shape-small close-button" src="./icons/close.svg" alt="">
  </div>`;
};

const closeSearchButton = function () {
  let search = document.getElementById('menu-type-line');
  search.style.display = 'flex';
  search.innerHTML = '';
  search.innerHTML = renderHTMLMenu();
};

const renderHTMLMenu = function () {
  return `
    <img
             class="icons-shape search btn-bg"
             src="./icons/search-solid.svg"
             alt="Suche"
             onclick="searchRecept()"
           />
           <a id="lunch" class="menu-button arial font-14 button-activate" onclick="activateMenuButton('lunch')" href="#recipe0">
             Mittagsmenüs
           </a>
           <a id="chicken" class="menu-button arial font-14 button-desactivate" onclick="activateMenuButton('chicken')" href="#recipe1">
             Chicken Spezialitäten
           </a>
           <a id="bef-lunch" class="menu-button arial font-14 button-desactivate" onclick="activateMenuButton('bef-lunch')" href="#recipe2">
             Vorspeisen
           </a>
           <a id="dessert" class="menu-button arial font-14 button-desactivate" onclick="activateMenuButton('dessert')" href="#recipe3">
             Dessert
           </a>
           <a id="drink" class="menu-button arial font-14 button-desactivate" onclick="activateMenuButton('drink')" href="#recipe4">
             Getränke
           </a>
   `;
};

const fillCart = () => {
  let priceSection = document.getElementById('price-calc-section');
  if (receptNames.length === 0) {
    fillPrice();
    priceSection.innerHTML = displayCartImage();
    document.getElementById('button-pay-container').style.display = 'none';
  } else {
    priceSection.innerHTML = '';

    for (let i = 0; i < receptNames.length; i++) {
      const counter = i;
      const receptName = receptNames[i];
      const receptPrice = receptPrices[i];
      const numberOrder = numberOrders[i];
      priceSection.innerHTML += renderHTMLCartItem(
        receptName,
        receptPrice,
        numberOrder
      );
      if (counter !== receptNames.length - 1) {
        priceSection.innerHTML += ` <div class="separator-line"></div>`; // solange nicht das letzte Essen wird ein Trenner angezeigt
      }
    }

    fillPrice();
  }
};

const renderHTMLCartItem = function (receptName, receptPrice, numberOrder) {
  return `
<div class="cart-recept-title">
  <div class="show-inline">
    <p class="p-margin line-height-1"><b>${numberOrder}</b></p>
    <p class="p-margin line-height-1"><b>${receptName}</b></p>
  </div>
  <div class="grey font-16">${toGermanPreis(receptPrice * numberOrder)} €</div>
</div>

<div class="cart-add-recept">
  <a class="link-left grey font-16" href="#">Anmerkung <br> hinzufügen</a>
  <div class="plus-minus-right">
    <img class="icons-shape-small btn-bg cursor-effect" src="./icons/minus-solid.svg" alt="Entfernen" onclick="decreaseOrder('${receptName}')">
    <p class="del-btn">${numberOrder}</p>
    <img id="${receptName}" class="icons-shape-small add-btn btn-bg cursor-effect" src="./icons/plus-solid.svg" alt="Hinzufügen" onclick="increaseOrder('${receptName}')">
  </div>
</div>
`;
};

const fillPrice = function () {
  let sum = document.getElementById('sum');
  let sum_resp = document.getElementById('sum-responsive');
  let total_price = document.getElementById('total-price');
  let total_price_remark = document.getElementById('total-price-remark');
  total_price_remark.innerHTML = toGermanPreis(
    calculateBill(receptPrices, numberOrders)
  );
  sum.innerHTML = toGermanPreis(calculateBill(receptPrices, numberOrders));
  total_price.innerHTML = toGermanPreis(
    calculateBill(receptPrices, numberOrders)
  );
  sum_resp.innerHTML = toGermanPreis(calculateBill(receptPrices, numberOrders));
  checkout();
  document.getElementById('button-pay-container').style.display = '';
};

const displayCartImage = function () {
  return `
  <img
  class="cart"
  src="./icons/cart-shopping-solid.svg"
  alt="shopping-bag"
/>
<h2 class="fill-cart arial">Fülle deinen Warenkorb</h2>
<p class="fill-cart-info">
  Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle
  dein Essen.
</p>
  `;
};

const addReceptName = (name, price, number) => {
  if (!receptNames.includes(name)) {
    receptNames.push(name);
    receptPrices.push(price);
    numberOrders.push(number);
    save('receptNames', receptNames);
    save('receptPrices', receptPrices);
    save('numberOrders', numberOrders);
  } else {
    let indexName = receptNames.indexOf(name);
    numberOrders[indexName] += number;
    save('receptNames', receptNames);
    save('receptPrices', receptPrices);
    save('numberOrders', numberOrders);
  }
  fillCart();
};

const increaseOrder = function (name) {
  let indexName = receptNames.indexOf(name);
  numberOrders[indexName] += 1;
  save('receptNames', receptNames);
  save('receptPrices', receptPrices);
  save('numberOrders', numberOrders);
  fillCart();
};

const decreaseOrder = function (name) {
  let indexName = receptNames.indexOf(name);
  numberOrders[indexName] -= 1;
  if (numberOrders[indexName] === 0) {
    receptNames.splice(indexName, 1);
    receptPrices.splice(indexName, 1);
    numberOrders.splice(indexName, 1);
  }
  save('receptNames', receptNames);
  save('receptPrices', receptPrices);
  save('numberOrders', numberOrders);
  fillCart();
};

const calculateBill = function (priceArray, numberarray) {
  let totalBill = 0;
  for (let j = 0; j < priceArray.length; j++) {
    const unitPrice = priceArray[j];
    const number = numberarray[j];
    totalBill = totalBill + unitPrice * number;
  }
  return totalBill;
};

const search = function () {
  let receptContainer = document.getElementById('recept-container');
  receptContainer.innerHTML = '';

  for (let j = 0; j < recipes.length; j++) {
    const recept = recipes[j];

    receptContainer.innerHTML += /*html*/ `<div class="recept-image-description">
      <div id="image-recept-type_${j}" class="image-recept-type"></div>  
          <p class="arial p-margin recept-type-name">${recept['nameR']}</p>
          <p class="font-12 grey p-margin">${recept['descriptionR']}</p>  
      </div> 
   `;
    document.getElementById(
      `image-recept-type_${j}`
    ).style.backgroundImage = `url('${recept['imageR']}')`;

    filter(receptContainer, recept);
  }
};

const filter = function (receptContainer, receptType) {
  const receptR = receptType['dataR'];
  let wordToFilter = document.getElementById('search-recept').value;
  let wordToLower = wordToFilter.toLowerCase();
  for (let i = 0; i < receptR.length; i++) {
    const recepttype = receptR[i];
    if (
      wordToLower ===
      recepttype['name'].substring(0, wordToLower.length).toLowerCase()
    ) {
      receptContainer.innerHTML += /*html*/ `
      <div id="recept-container_${i}" class="recept-type" onclick="addReceptName('${
        recepttype['name']
      }',${recepttype['price']},${1})">
      <div class="name-line">
          <div class="name-info-grp">
              <p class="p-margin"><b>${recepttype['name']}</b></p>
              <img class="icons-shape" src="./icons/circle-info-solid.svg" alt="Info">
          </div>
          <img id='img${i}' class="icons-shape btn-bg"  src="./icons/plus-solid.svg" alt="Hinzufügen">
      </div>
      <p class="p-margin grey">${recepttype['description']}</p>
      <p class='price p-margin'><b>${toGermanPreis(
        recepttype['price']
      )} €</b></p>
  </div>
      `;
    }
  }
};

const load = function () {
  let namerecepte = JSON.parse(localStorage.getItem('receptNames'));
  let pricerecepte = JSON.parse(localStorage.getItem('receptPrices'));
  let numberrecepte = JSON.parse(localStorage.getItem('numberOrders'));
  if (namerecepte && pricerecepte && numberrecepte) {
    receptNames = namerecepte;
    receptPrices = pricerecepte;
    numberOrders = numberrecepte;
    fillCart();
  }
};

const save = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

function openMenu() {
  document.getElementById('overlay').style.display = '';
  document.getElementById('overlay-blur').style.display = '';
  document.getElementById('html').style.overflowY = 'hidden';
}
function closeMenu() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('overlay-blur').style.display = 'none';
  document.getElementById('html').style.overflowY = 'auto';
}

const activateMenuButton = function (id) {
  let elem = document.getElementById(id);
  initializeButton('lunch');
  initializeButton('chicken');
  initializeButton('bef-lunch');
  initializeButton('dessert');
  initializeButton('drink');
  elem.classList.remove('button-desactivate');
  elem.classList.add('button-activate');
};

const initializeButton = function (id) {
  let elem = document.getElementById(id);
  elem.classList.remove('button-activate');
  elem.classList.add('button-desactivate');
};

const showResponsivePriceCart = function () {
  let section = document.getElementById('left-side-container');
  let foot = document.getElementById('footer');
  let head = document.getElementById('header');
  let section2 = document.getElementById('right-side-container');
  document.getElementById('close-resp-cart-section').style.display = 'flex';
  document.getElementById('Warenkorb-title').style.gap = '6rem';
  section.style.display = 'none';
  section2.style.display = 'flex';
  section2.style.width = '100%';
  foot.style.display = 'none';
  head.style.display = 'none';
};

const closeResponsivePriceSection = function () {
  document.getElementById('close-resp-cart-section').style.display = 'none';
  document.getElementById('Warenkorb-title').style.gap = 'unset';
  let section = document.getElementById('left-side-container');
  let foot = document.getElementById('footer');
  let head = document.getElementById('header');
  let section2 = document.getElementById('right-side-container');
  section.style.display = '';
  section2.style.display = '';
  section2.style.width = '344px';
  foot.style.display = 'flex';
  head.style.display = 'flex';
};
render(recipes);
