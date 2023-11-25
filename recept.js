'use strict';

const appetisers = [
  {
    name: 'Makhni Dal',
    description: 'Linsen nach indischer Art',
    price: 14.5,
  },
  {
    name: 'Alu Palak',
    description: 'Spinat mit Kartoffeln nach indischer Art',
    price: 14.5,
  },
  {
    name: 'Mixed Vegetables',
    description: 'gemischtes Gemüse mit Currysauce',
    price: 15.9,
  },
  {
    name: 'Palak Panir',
    description: 'frischer Spinat mit hausgemachtem Käse',
    price: 15.9,
  },
  {
    name: 'Mushroom Mattar Masala',
    description: 'frische Champignons und Erbsen gebraten in Curry-Masalasauce',
    price: 15.9,
  },
  {
    name: 'Mixed Vegetables',
    description: 'gemischtes Gemüse mit Currysauce',
    price: 15.9,
  },
  {
    name: 'Chili Panir (scharf)',
    description: 'mit hausgemachter Käse in scharfer indischer Chilisauce',
    price: 12.9,
  },

  {
    name: 'Alu Gobi  ',
    description: 'Kartoffeln und Blumenkohl nach Punjabi Art',
    price: 15.9,
  },
  {
    name: 'Mango Beef',
    description: 'Rindfleisch in fein würziger Mangosauce',
    price: 13.9,
  },
  {
    name: 'Beef Masala',
    description: 'Rindfleisch mit Masalasauce',
    price: 13.9,
  },
  {
    name: 'Chicken Curry',
    description: 'Hühnerbrustfilet in kräftiger Currysauce',
    price: 13.9,
  },

  {
    name: 'Chicken Jalfrezi',
    description: 'Hühnerbrustfilet in exotisch pikanter Sauce mit Zitronensaft',
    price: 12.9,
  },

  {
    name: 'Chicken Palak',
    description: 'Hühnerbrustfilet in Spinatkreation',
    price: 12.9,
  },
  {
    name: 'Chili Chicken (scharf)',
    description: 'Hühnerbrustfilet in indischer Chilisauce',
    price: 12.9,
  },
  {
    name: 'Chicken Tikka',
    description:
      'im Tandoori gegrilltes mariniertes Hühnerbrustfilet mit Tandoori-Sauce',
    price: 13.5,
  },
  {
    name: 'Tandoori Chicken',
    description:
      'in besonderer Gewürzmischung und Joghurt mariniertes Hühnchen, im Tandoori gegrillt mit Tandoori-Sauceprice',
    price: 13.5,
  },
  {
    name: 'Butter Chicken',
    description: 'gegrilltes Hühnerbrustfilet in Tomaten-Buttercremesauce',
    price: 13.5,
  },
  {
    name: 'Chicken Tikka Masala',
    description: 'im Tandoor gegrilltes Hühnerbrustfilet in Masalasauce',
    price: 13.5,
  },
  {
    name: 'Lamm Curry',
    description: 'Lammfleisch in kräftiger Sauce',
    price: 13.9,
  },
  {
    name: 'Lamm Vindalu (sehr scharf)',
    description: 'Lammfleisch mit Kartoffeln in sehr scharfer Sauce',
    price: 13.9,
  },
  {
    name: 'Dahi Gosht',
    description: 'Lammfleisch in würziger Joghurtsauce',
    price: 13.9,
  },
  {
    name: 'Fisch Curry',
    description: 'Fischfilet in kräftiger Sauce',
    price: 12.5,
  },
  {
    name: 'Mango Chicken',
    description: 'Hühnerbrustfilet in feiner Mangosauce',
    price: 12.5,
  },
  {
    name: 'Coconut Chicken',
    description:
      'gegrillte Hühnerbrustfilet und verschiedenes Gemüse in würziger Currysauce mit Kokosmilch verfeinert',
    price: 13.5,
  },
  {
    name: 'Coconut Ente',
    description:
      'knusprige Ente auf würziger Kokos-Currysauce mit verschiedenem Gemüse',
    price: 15.5,
  },
  {
    name: 'Chicken mit Erdnusssoße',
    description: 'Chicken in Erdnusssoße, serviert mit Gemüse und Reis',
    price: 13.5,
  },
];

const chicken_specialities = [
  {
    name: 'Chicken Curry',
    description: 'Hühnerbrustfilet in kräftiger Currysauce',
    price: 15.9,
  },
  {
    name: 'Chicken Jalfrezi',
    description:
      'Hühnerbrustfilet in exotisch, pikanter Sauce mit Zitronenspritzern',
    price: 16.9,
  },
  {
    name: 'Chicken Palak',
    description: 'Hühnerbrustfilet in Spinatkreation',
    price: 16.9,
  },
  {
    name: 'Butter Chicken',
    description: 'gegrilltes Hühnerbrustfilet in Tomaten-Buttercremesauce',
    price: 15.9,
  },
  {
    name: 'Chicken Vindalu (sehr scharf)',
    description: 'Hühnerbrustfilet mit Kartoffeln in sehr scharfer Sauce',
    price: 16.9,
  },
  {
    name: 'Chili Chicken (scharf)',
    description: 'Hühnerbrustfilet in indischer Chilisauce',
    price: 16.9,
  },
  {
    name: 'Chicken Korma',
    description: 'Hühnerbrustfilet in Joghurt-Cashew-Cremesauce',
    price: 16.9,
  },
  {
    name: 'Chicken Sabzi',
    description:
      'zarte Hühnerfleischstücke aus dem Lehmofen mit verschiedenem frischen Gemüse in Masalasauce',
    price: 16.9,
  },
  {
    name: 'Mango Chicken',
    description: 'Hühnerbrustfilet in einer feinen Mangosauce',
    price: 16.9,
  },
  {
    name: 'Chicken Tikka Masala',
    description:
      'in Tandoor gegrilltes Hühnerbrustfilet in spezieller Masalasauce, Spezialität des Hauses',
    price: 15.9,
  },
  {
    name: 'Chicken Chana Masala',
    description: 'Kichererbsen mit Hühnchen nach Punjabi Art',
    price: 16.9,
  },
  {
    name: 'Chicken Badam Pasanda',
    description:
      'Hähnchenbrustfilet im Tandoor gegrillt mit Joghurt-Cashew-Cremesauce',
    price: 16.9,
  },
  {
    name: 'Coconut Chicken',
    description:
      'gegrillte Hühnerbrustfilet und verschiedenes Gemüse in würziger Currysauce mit Kokosmilch verfeinert',
    price: 16.9,
  },
  {
    name: 'Chicken Garlic Tikka',
    description: 'gegrilltes mariniertes Hühnerbrustfilet mit Knoblauch',
    price: 16.9,
  },
  {
    name: 'Chicken mit Erdnusssoße',
    description: 'Chicken mit Erdnusssoße, serviert mit Gemüse und Reis',
    price: 16.9,
  },
];

const recipes = [
  {
    nameR: 'Mittagsmenüs',
    dataR: appetisers,
    imageR: './images/mittag.jpg',
    descriptionR: 'Alle Gerichte werden mit Basmatireis serviert.',
  },
  {
    nameR: 'Chicken Spezialitäten',
    dataR: chicken_specialities,
    imageR: './images/india_chicken.jpeg',
    descriptionR: 'Alle Gerichte werden mit Basmatireis serviert.',
  },
];
