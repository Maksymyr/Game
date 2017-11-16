import gold from '../../img/Items/Money.jpg';

export default {
    
    hero: JSON.parse(localStorage.getItem('Hero')) !== null ? JSON.parse(localStorage.getItem('Hero')) : false || {},
    enemy: JSON.parse(localStorage.getItem('Enemy')) !== null ? JSON.parse(localStorage.getItem('Enemy')) : false || {},
    levelOfForest: JSON.parse(localStorage.getItem('Forest'))  || 0,
    notify: "",
    inventory: JSON.parse(localStorage.getItem('Inventory')) !== null ? JSON.parse(localStorage.getItem('Inventory')) : false || [{img: gold, name: "Gold", type: "money", category: "money", class: "money", price: 1, quantity: 10, used: false}]
};