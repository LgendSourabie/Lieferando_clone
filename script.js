'use strict';
const minDeliverPrice = 15.3;

const render = function (receptType) {
  let receptContainer = document.getElementById('recept-container');
  receptContainer.innerHTML = '';

  for (let j = 0; j < receptType.length; j++) {
    const recept = receptType[j];

    receptContainer.innerHTML += /*html*/ `<div class="recept-image-description">
    <div id="image-recept-type_${j}" class="image-recept-type"></div>  
        <p class="arial p-margin recept-type-name">${recept['nameR']}</p>
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

  document.getElementById('min-order').innerHTML = minDeliverPrice
    .toFixed(2)
    .replace('.', ',');
  for (let i = 0; i < receptR.length; i++) {
    const recepttype = receptR[i];
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
            <!-- <button id='btn${i}' style="display:none;"></button>   TO BE WRITTEN-->  
        </div>
        <p class="p-margin grey">${recepttype['description']}</p>
        <p class='price p-margin'><b>${germanPreis(
          recepttype['price']
        )} €</b></p>
    </div>
        `;
  }
}

const germanPreis = function (price) {
  let temp = price;
  let toString_price = String(temp.toFixed(2));
  return toString_price.replace('.', ',');
};

const shipping = function (Id) {
  let id = document.getElementById(Id);
  let deliverId = document.getElementById('delivery-button');
  let takeId = document.getElementById('take-button');
  takeId.style.backgroundColor = 'rgb(239, 237, 234)';
  deliverId.style.backgroundColor = 'rgb(239, 237, 234)';
  document.getElementById('deliver-bicycle').style.filter =
    'invert(0%) sepia(100%) saturate(7500%) hue-rotate(189deg) brightness(111%) contrast(108%)';
  document.getElementById('take-cart').style.filter =
    'invert(0%) sepia(100%) saturate(7500%) hue-rotate(189deg) brightness(111%) contrast(108%)';
  id.style.backgroundColor = 'white';
  id.childNodes.item(1).style.filter =
    'invert(40%) sepia(81%) saturate(1285%) hue-rotate(1deg) brightness(98%) contrast(97%)';
};

const deliverPrice = function (Id) {
  let deliverBill = document.getElementById('delivery-bill');
  if (Id === 'take-button') {
    deliverBill.style.display = 'none';
  } else if (Id === 'delivery-button') {
    deliverBill.style.display = 'flex';
    ckeckout();
  }
};

const ckeckout = function () {
  let deliverBill = document.getElementById('delivery-bill');
  if (
    germanPreis(calculateBill(receptPrices)) >= germanPreis(minDeliverPrice)
  ) {
    deliverBill.style.display = '';
    document.getElementById('pay-button').disabled = false;
    document.getElementById('pay-button').style.color = 'white';
    document.getElementById('pay-button').style.backgroundColor =
      'rgb(243,104,5)';
    // document.getElementById('delivery-bill-total').innerHTML = `Kostenlos`;
  } else {
    // deliverBill.style.display = 'none';
    document.getElementById('button-pay-container').style.display = '';
    document.getElementById('pay-button').disabled = true;
    document.getElementById('pay-button').style.backgroundColor =
      'rgb(239,237,234)';
    document.getElementById('pay-button').style.color = '#3c4c4f';
  }
};

const restaurantLocation = function (Id, Address) {
  let location = document.getElementById('deliver-cost-line');
  location.innerHTML = '';
  if (Id === 'take-button') {
    location.innerHTML = /*html*/ ` <img class="icons-shape-smaller " src="./icons/location.svg" alt="Location"/> <p class="p-margin grey">${Address}</p>`;
  } else if (Id === 'delivery-button') {
    location.innerHTML = `
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
  }
};

const searchRecept = function () {
  let search = document.getElementById('menu-type-line');
  search.style.display = 'block';
  search.innerHTML = '';
  search.innerHTML = /*html*/ `
  <p class="p-margin"> <b>Suche im Menü</b></p>
  <div class="inline-input"> 
  <input class="input" type="text" placeholder="Suche nach Gerichten, usw...">
  <img id="close-button" onclick="closeButton()" class="icons-shape-small close-button" src="./icons/close.svg" alt="">
  </div>`;
};

const closeButton = function () {
  let search = document.getElementById('menu-type-line');
  search.style.display = 'flex';
  search.innerHTML = '';
  search.innerHTML = /*html*/ `
     <img
              class="icons-shape search btn-bg"
              src="/icons/search-solid.svg"
              alt="Suche"
              onclick="searchRecept()"
            />
            <button class="menu-button arial font-14 button-activate">
              Mittagsmenüs
            </button>
            <button class="menu-button arial font-14 button-desactivate">
              Chicken Spezialitäten
            </button>
            <button class="menu-button arial font-14 button-desactivate">
              Vorspeisen
            </button>
            <button class="menu-button arial font-14 button-desactivate">
              Ente Spezialitäten
            </button>
            <button class="menu-button arial font-14 button-desactivate">
              Vegane Spezialitäten
            </button>
            <button class="menu-button arial font-14 button-desactivate">
              Dessert
            </button>
            <button class="menu-button arial font-14 button-desactivate">
              Getränke
            </button>
    `;
};

let receptNames = [];
let receptPrices = [];
let numberOrders = [];

const fillCart = () => {
  let priceSection = document.getElementById('price-calc-section');
  priceSection.innerHTML = '';

  for (let i = 0; i < receptNames.length; i++) {
    const counter = i;
    const receptName = receptNames[i];
    const receptPrice = receptPrices[i];
    const numberOrder = numberOrders[i];
    priceSection.innerHTML += `
    <div class="cart-recept-title">
      <div class="show-inline">
        <p class="p-margin line-height-1"><b>${numberOrder}</b></p>
        <p class="p-margin line-height-1"><b>${receptName}</b></p>
      </div>
      <div class="grey font-16">${germanPreis(receptPrice)} €</div>
    </div>

    <div class="cart-add-recept">
      <a class="link-left grey font-16" href="#">Anmerkung <br> hinzufügen</a>
      <div class="plus-minus-right">
        <img class="icons-shape-small btn-bg" src="./icons/minus-solid.svg" alt="Entfernen">
        <p class="del-btn">${numberOrder}</p>
        <img class="icons-shape-small add-btn btn-bg" src="./icons/plus-solid.svg" alt="Hinzufügen">
      </div>
    </div>
  `;
    if (counter !== receptNames.length - 1) {
      priceSection.innerHTML += ` <div class="separator-line"></div>`;
    }
  }

  let sum = document.getElementById('sum');
  let total_price = document.getElementById('total-price');
  let total_price_remark = document.getElementById('total-price-remark');
  total_price_remark.innerHTML = germanPreis(calculateBill(receptPrices));
  sum.innerHTML = germanPreis(calculateBill(receptPrices));
  total_price.innerHTML = germanPreis(calculateBill(receptPrices));
  ckeckout();
  document.getElementById('button-pay-container').style.display = '';
};

const addReceptName = (name, price, number) => {
  if (!receptNames.includes(name)) {
    receptNames.push(name);
    receptPrices.push(price);
    numberOrders.push(number);
  } else {
    let indexName = receptNames.indexOf(name);
    receptPrices[indexName] += receptPrices[indexName];
    numberOrders[indexName] += numberOrders[indexName];
  }
  fillCart();
};

// TO BE FINISH

// function addItemNumber(index) {
//   //   let element = document.getElementById(index);
//   let btn = document.getElementById(`btn${index}`);
//   document.getElementById(`img${index}`).style.display = 'none';
//   btn.style.display = 'block';
//   btn.innerHTML = `${receptPrices[index]}`;
// }

const calculateBill = function (priceArray) {
  let totalBill = 0;
  for (let j = 0; j < priceArray.length; j++) {
    const unitPrice = priceArray[j];
    totalBill = totalBill + unitPrice;
  }
  return totalBill;
};

render(recepts);
