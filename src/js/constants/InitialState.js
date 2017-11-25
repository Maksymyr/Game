import * as items from "./Items";

export default {
    hero: 
    JSON.parse(localStorage.getItem('Hero')) !== null ? JSON.parse(localStorage.getItem('Hero')) : false || 
    {},
    enemy: 
    JSON.parse(localStorage.getItem('Enemy')) !== null ? JSON.parse(localStorage.getItem('Enemy')) : false || 
    {},
    levelOfForest: JSON.parse(localStorage.getItem('Forest'))  || 0,
    notify: {},
    inventory: 
    JSON.parse(localStorage.getItem('Inventory')) !== null ? JSON.parse(localStorage.getItem('Inventory')) : false || 
    [{img: 'Money', name: "Gold", type: "money", category: "common", class: "money", price: 1, quantity: 10, used: false},
    {img: 'Book', name: "Book", type: "rise", category: "common", class: "none", price: 1000, used: false, quantity: 1, points: 1}],
    shop: 
    JSON.parse(localStorage.getItem('Shop')) !== null ? JSON.parse(localStorage.getItem('Shop')) : false || 
    [{img: 'Money', name: "Gold", type: "money", category: "common", class: "money", price: 1, quantity: 999, used: false}
    ,{img: 'blue_potion', name: "Mana potion", type: "potion", category: "common", class: "none", price: 50, used: false, quantity: 999, curMP: 20}
    ,{img: 'Book', name: "Book", type: "rise", category: "common", class: "none", price: 1000, used: false, quantity: 999, points: 1}
    ,{img: 'red_potion', name: "Health potion", type: "potion", category: "common", class: "none", price: 50, used: false, quantity: 999, curHP: 20}
    ,{img: 'bootsWar', name: "Iron boots", type: "boots", category: "armor", class: "Warrior", price: 150, used: false, quantity: 999, def: 8}
    ,{img: 'bootsMag', name: "Cloth boots", type: "boots", category: "armor", class: "Wizard", price: 150, used: false, quantity: 999, def: 3}
    ,{img: 'bootsArc', name: "Leather boots", type: "boots", category: "armor", class: "Archer", price: 150, used: false, quantity: 999, def: 5}
    ,{img: 'chestWar', name: "Iron chest", type: "chest", category: "armor", class: "Warrior", price: 350, used: false, quantity: 999, def: 20}
    ,{img: 'chestMag', name: "Cloth chest", type: "chest", category: "armor", class: "Wizard", price: 350, used: false, quantity: 999, def: 10}
    ,{img: 'chestArc', name: "Leather chest", type: "chest", category: "armor", class: "Archer", price: 350, used: false, quantity: 999, def: 15}
    ,{img: 'gloveWar', name: "Iron gloves", type: "gloves", category: "armor", class: "Warrior", price: 100, used: false, quantity: 999, def: 5}
    ,{img: 'gloveMag', name: "Cloth gloves", type: "gloves", category: "armor", class: "Wizard", price: 100, used: false, quantity: 999, def: 3}
    ,{img: 'gloveArc', name: "Leather gloves", type: "gloves", category: "armor", class: "Archer", price: 100, used: false, quantity: 999, def: 2}
    ,{img: 'helmWar', name: "Iron helm", type: "helm", category: "armor", class: "Warrior", price: 200, used: false, quantity: 999, def: 10}
    ,{img: 'helmMag', name: "Cloth helm", type: "helm", category: "armor", class: "Wizard", price: 200, used: false, quantity: 999, def: 5}
    ,{img: 'helmArc', name: "Leather helm", type: "helm", category: "armor", class: "Archer", price: 200, used: false, quantity: 999, def: 7}
    ,{img: 'pantWar', name: "Iron pants", type: "pants", category: "armor", class: "Warrior", price: 300, used: false, quantity: 999, def: 15}
    ,{img: 'pantMag', name: "Cloth pants", type: "pants", category: "armor", class: "Wizard", price: 300, used: false, quantity: 999, def: 8}
    ,{img: 'pantArc', name: "Leather pants", type: "pants", category: "armor", class: "Archer", price: 300, used: false, quantity: 999, def: 12}
    ,{img: 'shoulderWar', name: "Iron shoulders", type: "shoulders", category: "armor", class: "Warrior", price: 250, used: false, quantity: 999, def: 12}
    ,{img: 'shoulderMag', name: "Cloth shoulders", type: "shoulders", category: "armor", class: "Wizard", price: 250, used: false, quantity: 999, def: 6}
    ,{img: 'shoulderArc', name: "Leather shoulders", type: "shoulders", category: "armor", class: "Archer", price: 250, used: false, quantity: 999, def: 8}
    ,{img: 'low_sword', name: "Common sword", type: "sword", category: "weapon", class: "Warrior", price: 50, used: false, quantity: 999, atck: 5}
    ,{img: 'mid_sword', name: "Excellent sword", type: "sword", category: "weapon", class: "Warrior", price: 500, used: false, quantity: 999, atck: 25}
    ,{img: 'high_sword', name: "Enchanted sword", type: "sword", category: "weapon", class: "Warrior", price: 1500, used: false, quantity: 999, atck: 50}
    ,{img: 'low_wand', name: "Common wand", type: "wand", category: "weapon", class: "Wizard", price: 50, used: false, quantity: 999, atck: 5}
    ,{img: 'mid_wand', name: "Excellent wand", type: "wand", category: "weapon", class: "Wizard", price: 500, used: false, quantity: 999, atck: 25}
    ,{img: 'high_wand', name: "Enchanted wand", type: "wand", category: "weapon", class: "Wizard", price: 1500, used: false, quantity: 999, atck: 50}
    ,{img: 'low_bow', name: "Common bow", type: "bow", category: "weapon", class: "Archer", price: 50, used: false, quantity: 999, atck: 5}
    ,{img: 'mid_bow', name: "Excellent bow", type: "bow", category: "weapon", class: "Archer", price: 500, used: false, quantity: 999, atck: 25}
    ,{img: 'high_bow', name: "Enchanted bow", type: "bow", category: "weapon", class: "Archer", price: 1500, used: false, quantity: 999, atck: 50} 
    ]
};