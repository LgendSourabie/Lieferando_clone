'use strict';

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
  for (let i = 0; i < receptR.length; i++) {
    const recepttype = receptR[i];
    receptContainer.innerHTML += /*html*/ `
        <div id="recept-container_${i}" class="recept-type">
        <div class="name-line">
            <div class="name-info-grp">
                <p class="p-margin"><b>${recepttype['name']}</b></p>
                <img class="icons-shape" src="./icons/circle-info-solid.svg" alt="Info">
            </div>
            <img class="icons-shape"  src="./icons/plus-solid.svg" alt="Hinzufügen">
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
  let toString = String(price.toFixed(2));
  return toString.replace('.', ',');
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
              class="icons-shape search"
              src="/icons/search.svg"
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

const fillCart = () => {
  let priceSection = document.getElementById('price-calc-section');
  priceSection.innerHTML = '';
  priceSection.innerHTML = `Hallo`;
};

render(recepts);

{
  /* <table>
    <tr>
        <td>Number</td>
        <td>Nme</td>
        <td></td>
        <td></td>
        <td>Price</td>
    </tr>
    <tr>
        <td></td>
        <td>Anmerkung <br>hinzufügen</td>
        <td> <button><img src="minus" alt=""></button></td>
        <td>number</td>
        <td><button><img src="minus" alt=""></button></td>
    </tr>
</table>
<div>
    <div><p>Zwischensumme</p> <p>Zsum</p></div>
    <div><p>Lieferkosten</p> <p>Kostenlos</p></div>
    <div><p>Gesamt</p> <p><b>sum</b></p></div>
</div>
<button>
    Bezahlen(sum)
</button> */
}
