import gold from '../../img/Items/Money.png'
import goldring from '../../img/Items/Gold_ring.png'
import cake from '../../img/Items/Cake.png'
import book from '../../img/Items/Book.png'

export default {
    
    hero: JSON.parse(localStorage.getItem('Hero')) !== null ? JSON.parse(localStorage.getItem('Hero')) : false || {},
    enemy: JSON.parse(localStorage.getItem('Enemy')) !== null ? JSON.parse(localStorage.getItem('Enemy')) : false || {},
    levelOfForest: JSON.parse(localStorage.getItem('Forest'))  || 0,
    notify: "",
    inventory: [{img: gold, name: "gold"}, {img: goldring, name: "gold ring"}, {img: book, name: "book"}, {img: cake, name: "cake"}]
};