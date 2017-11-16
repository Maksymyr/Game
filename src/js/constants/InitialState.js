import gold from '../../img/Items/Money.jpg';
import book from '../../img/Items/Book.jpg';

export default {
    
    hero: JSON.parse(localStorage.getItem('Hero')) !== null ? JSON.parse(localStorage.getItem('Hero')) : false || {},
    enemy: JSON.parse(localStorage.getItem('Enemy')) !== null ? JSON.parse(localStorage.getItem('Enemy')) : false || {},
    levelOfForest: JSON.parse(localStorage.getItem('Forest'))  || 0,
    notify: "",
    inventory: JSON.parse(localStorage.getItem('Inventory')) !== null ? JSON.parse(localStorage.getItem('Inventory')) : false || [{img: gold, name: "Gold", type: "money", category: "money", class: "money", price: 1, quantity: 10, used: false}, 
    {img: book, name: "Book", type: "rise", category: "common", class: "none", price: 1000, used: false, quantity: 1, points: 1}]
};