'use strict'

const receipes = [
        {
          "name": "Spaghetti Carbonara",
          "description": "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
          "price": "12.99 €",
          "ingredients": ["spaghetti", "eggs", "pecorino cheese", "pancetta", "black pepper"]
        },
        {
          "name": "Grilled Salmon",
          "description": "Freshly grilled salmon fillet with lemon herb sauce.",
          "price": "16.49 €",
          "ingredients": ["salmon fillet", "lemon", "herbs", "olive oil", "salt"]
        },
        {
          "name": "Mushroom Risotto",
          "description": "Creamy Arborio rice cooked with mushrooms and white wine.",
          "price": "11.95 €",
          "ingredients": ["Arborio rice", "mushrooms", "white wine", "onion", "parmesan cheese"]
        },
        {
          "name": "Chicken Parmesan",
          "description": "Breaded chicken cutlet topped with marinara sauce and melted mozzarella.",
          "price": "14.75 €",
          "ingredients": ["chicken cutlet", "marinara sauce", "mozzarella cheese", "breadcrumbs"]
        },
        {
          "name": "Caesar Salad",
          "description": "Classic Caesar salad with romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
          "price": "8.99 €",
          "ingredients": ["romaine lettuce", "croutons", "parmesan cheese", "Caesar dressing"]
        },
        {
          "name": "Margherita Pizza",
          "description": "Traditional pizza with tomato sauce, fresh mozzarella, basil, and olive oil.",
          "price": "10.50 €",
          "ingredients": ["pizza dough", "tomato sauce", "fresh mozzarella", "basil", "olive oil"]
        },
        {
          "name": "Beef Burger",
          "description": "Juicy beef patty with lettuce, tomato, onion, and special sauce in a sesame seed bun.",
          "price": "9.25 €",
          "ingredients": ["beef patty", "sesame seed bun", "lettuce", "tomato", "onion"]
        },
        {
          "name": "Vegetable Stir-Fry",
          "description": "Assorted vegetables stir-fried in a savory soy-ginger sauce.",
          "price": "10.95 €",
          "ingredients": ["assorted vegetables", "soy sauce", "ginger", "garlic", "sesame oil"]
        },
        {
          "name": "Tiramisu",
          "description": "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
          "price": "6.75 €",
          "ingredients": ["ladyfingers", "mascarpone cheese", "coffee", "cocoa powder"]
        }
      ] ;

function render(){
let menuContainer = document.getElementById('menu-container')
menuContainer.innerHTML = '' ;
for(let i=0; i<receipes.length ;i++){
    const receipe = receipes[i]
    menuContainer.innerHTML += `<div class="receipe" id=receipe-${i}>
                                    <div class="directionHorizontal">
                                        <h3>${receipe.name}</h3>
                                        <button class="round-plus-button"><img class="plusButton" src="icons/plus-solid.svg" alt="add button"></button>
                                    </div>
                                    <p>${receipe.description}</p>
                                    <h2 class="price">${receipe.price}</h2>
                                </div> `

}
}

function loadMenu(){}
