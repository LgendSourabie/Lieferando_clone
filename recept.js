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
const dessert = [
  {
    name: 'Chocolate Cake',
    description:
      'Decadent chocolate cake with layers of rich cocoa and creamy ganache.',
    price: 8.5,
  },
  {
    name: 'Vanilla Bean Ice Cream',
    description:
      'Smooth and creamy vanilla ice cream made with real vanilla beans.',
    price: 4.0,
  },
  {
    name: 'Strawberry Cheesecake',
    description:
      'Creamy cheesecake with a strawberry swirl, topped with fresh strawberries.',
    price: 9.2,
  },
  {
    name: 'Creme Brulee',
    description:
      'Classic French dessert with a smooth custard base and a crispy caramelized sugar top.',
    price: 7.8,
  },
  {
    name: 'Fruit Tart',
    description:
      'Buttery tart crust filled with vanilla pastry cream and topped with fresh fruits.',
    price: 6.5,
  },
  {
    name: 'Tiramisu',
    description:
      'Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.',
    price: 8.0,
  },
  {
    name: 'Chocolate Fondue',
    description:
      'Assorted fruits and marshmallows dipped in rich, melted chocolate.',
    price: 10.5,
  },
  {
    name: 'Pecan Pie',
    description:
      'Southern classic pie with a gooey pecan filling in a buttery crust.',
    price: 7.5,
  },
  {
    name: 'Mango Sorbet',
    description:
      'Refreshing sorbet made with ripe mangoes, a perfect palate cleanser.',
    price: 5.2,
  },
  {
    name: 'Red Velvet Cupcakes',
    description: 'Moist red velvet cupcakes topped with cream cheese frosting.',
    price: 3.9,
  },
];
const lunch = [
  {
    name: 'Spinach Artichoke Dip',
    description:
      'Creamy dip with spinach, artichokes, and melted cheese, served with tortilla chips.',
    price: 6.5,
  },
  {
    name: 'Bruschetta',
    description:
      'Toasted bread topped with diced tomatoes, garlic, basil, and olive oil.',
    price: 5.0,
  },
  {
    name: 'Stuffed Mushrooms',
    description:
      'Mushroom caps filled with a savory mixture of breadcrumbs, cheese, and herbs.',
    price: 7.2,
  },
  {
    name: 'Chicken Satay',
    description:
      'Grilled chicken skewers marinated in a flavorful peanut sauce, served with dipping sauce.',
    price: 8.5,
  },
  {
    name: 'Caprese Salad Skewers',
    description:
      'Mozzarella, cherry tomatoes, and basil drizzled with balsamic glaze on skewers.',
    price: 6.8,
  },
  {
    name: 'Shrimp Cocktail',
    description:
      'Chilled shrimp served with a tangy cocktail sauce and lemon wedges.',
    price: 9.0,
  },
  {
    name: 'Crispy Calamari',
    description:
      'Fried calamari rings served with marinara sauce and lemon wedges.',
    price: 7.5,
  },
  {
    name: 'Vegetable Spring Rolls',
    description:
      'Crispy spring rolls filled with a medley of vegetables, served with sweet chili sauce.',
    price: 5.5,
  },
  {
    name: 'Deviled Eggs',
    description:
      'Hard-boiled eggs filled with a creamy, seasoned yolk mixture, garnished with paprika.',
    price: 4.0,
  },
  {
    name: 'Queso Fundido',
    description:
      'Melted cheese with chorizo, served with tortillas for dipping.',
    price: 8.2,
  },
];

const drink = [
  {
    name: 'Espresso',
    description:
      'Strong black coffee brewed by forcing hot water through finely-ground coffee beans.',
    price: 3.5,
  },
  {
    name: 'Mango Smoothie',
    description:
      'Refreshing smoothie made with fresh mangoes, yogurt, and a hint of honey.',
    price: 5.0,
  },
  {
    name: 'Iced Green Tea',
    description:
      'Chilled green tea served over ice, a perfect blend of antioxidants and flavor.',
    price: 4.2,
  },
  {
    name: 'Classic Mojito',
    description:
      'Traditional Cuban cocktail with white rum, sugar, lime juice, soda water, and mint.',
    price: 7.5,
  },
  {
    name: 'Strawberry Lemonade',
    description:
      'Homemade lemonade with fresh strawberries, a sweet and tart delight.',
    price: 4.8,
  },
  {
    name: 'Coconut Water',
    description:
      'Naturally hydrating coconut water, a healthy and refreshing drink.',
    price: 3.0,
  },
  {
    name: 'Sparkling Raspberry Lemonade',
    description:
      'Fizzing lemonade with a burst of raspberry flavor, served sparkling.',
    price: 5.5,
  },
  {
    name: 'Caramel Macchiato',
    description:
      'Espresso mixed with steamed milk and topped with caramel syrup.',
    price: 6.2,
  },
  {
    name: 'Pineapple Mint Infused Water',
    description:
      'Infused water with fresh pineapple chunks and mint leaves, a tropical twist.',
    price: 3.9,
  },
  {
    name: 'Chai Latte',
    description:
      'Spiced tea concentrate mixed with steamed milk, a comforting and aromatic drink.',
    price: 4.5,
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
  {
    nameR: 'Vorspeisen',
    dataR: lunch,
    imageR: './images/mittag.jpg',
    descriptionR: 'Alle Gerichte werden mit Basmatireis serviert.',
  },

  {
    nameR: 'Dessert',
    dataR: dessert,
    imageR: './images/india_chicken.jpeg',
    descriptionR: '',
  },
  {
    nameR: 'Getränke',
    dataR: drink,
    imageR: './images/mittag.jpg',
    descriptionR: '',
  },
];
