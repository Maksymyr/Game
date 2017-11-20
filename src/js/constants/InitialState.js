import gold from '../../img/Items/Money.jpg';
import redpotion from '../../img/Items/Red_potion.jpg';
import bluepotion from '../../img/Items/Blue_potion.jpg';
import book from '../../img/Items/Book.jpg';

import low_sword from '../../img/Weapon/low_sword.jpg';
import mid_sword from '../../img/Weapon/mid_sword.jpg';
import high_sword from '../../img/Weapon/high_sword.jpg';

import low_wand from '../../img/Weapon/low_wand.jpg';
import mid_wand from '../../img/Weapon/mid_wand.jpg';
import high_wand from '../../img/Weapon/high_wand.jpg';

import low_bow from '../../img/Weapon/low_bow.jpg';
import mid_bow from '../../img/Weapon/mid_bow.jpg';
import high_bow from '../../img/Weapon/high_bow.jpg';

import bootsWar from '../../img/armor/bootsWar.jpg';
import bootsMag from '../../img/armor/bootsMag.jpg';
import bootsArc from '../../img/armor/bootsArc.jpg';

import chestWar from '../../img/armor/chestWar.jpg';
import chestMag from '../../img/armor/chestMag.jpg';
import chestArc from '../../img/armor/chestArc.jpg';

import gloveWar from '../../img/armor/gloveWar.jpg';
import gloveMag from '../../img/armor/gloveMag.jpg';
import gloveArc from '../../img/armor/gloveArc.jpg';

import helmWar from '../../img/armor/helmWar.jpg';
import helmMag from '../../img/armor/helmMag.jpg';
import helmArc from '../../img/armor/helmArc.jpg';

import pantWar from '../../img/armor/pantWar.jpg';
import pantMag from '../../img/armor/pantMag.jpg';
import pantArc from '../../img/armor/pantArc.jpg';

import shoulderWar from '../../img/armor/shoulderWar.jpg';
import shoulderMag from '../../img/armor/shoulderMag.jpg';
import shoulderArc from '../../img/armor/shoulderArc.jpg';



export default {
    
    hero: JSON.parse(localStorage.getItem('Hero')) !== null ? JSON.parse(localStorage.getItem('Hero')) : false || {},
    enemy: JSON.parse(localStorage.getItem('Enemy')) !== null ? JSON.parse(localStorage.getItem('Enemy')) : false || {},
    levelOfForest: JSON.parse(localStorage.getItem('Forest'))  || 0,
    notify: {},
    inventory: JSON.parse(localStorage.getItem('Inventory')) !== null ? JSON.parse(localStorage.getItem('Inventory')) : false || [{img: gold, name: "Gold", type: "money", category: "money", class: "money", price: 1, quantity: 10, used: false}, 
    {img: book, name: "Book", type: "rise", category: "common", class: "none", price: 1000, used: false, quantity: 1, points: 1}],
    shop: JSON.parse(localStorage.getItem('Shop')) !== null ? JSON.parse(localStorage.getItem('Shop')) : false || 
    [{img: gold, name: "Gold", type: "money", category: "money", class: "money", price: 1, quantity: 999, used: false}, 
    {img: redpotion, name: "Health potion", type: "potion", category: "common", class: "none", price: 50, used: false, quantity: 999, curHP: 20},
    {img: bluepotion, name: "Mana potion", type: "potion", category: "common", class: "none", price: 50, used: false, quantity: 999, curMP: 20},
    {img: book, name: "Book", type: "rise", category: "common", class: "none", price: 1000, used: false, quantity: 999, points: 1},
    {img: bootsWar, name: "Iron boots", type: "boots", category: "armor", class: "Warrior", price: 150, used: false, quantity: 1, def: 8},
    {img: bootsMag, name: "Cloth boots", type: "boots", category: "armor", class: "Wizard", price: 150, used: false, quantity: 1, def: 3},
    {img: bootsArc, name: "Leather boots", type: "boots", category: "armor", class: "Archer", price: 150, used: false, quantity: 1, def: 5},
    {img: chestWar, name: "Iron chest", type: "chest", category: "armor", class: "Warrior", price: 350, used: false, quantity: 1, def: 20},
    {img: chestMag, name: "Cloth chest", type: "chest", category: "armor", class: "Wizard", price: 350, used: false, quantity: 1, def: 10},
    {img: chestArc, name: "Leather chest", type: "chest", category: "armor", class: "Archer", price: 350, used: false, quantity: 1, def: 15},
    {img: gloveWar, name: "Iron gloves", type: "gloves", category: "armor", class: "Warrior", price: 100, used: false, quantity: 1, def: 5},
    {img: gloveMag, name: "Cloth gloves", type: "gloves", category: "armor", class: "Wizard", price: 100, used: false, quantity: 1, def: 3},
    {img: gloveArc, name: "Leather gloves", type: "gloves", category: "armor", class: "Archer", price: 100, used: false, quantity: 1, def: 2},
    {img: helmWar, name: "Iron helm", type: "helm", category: "armor", class: "Warrior", price: 200, used: false, quantity: 1, def: 10},
    {img: helmMag, name: "Cloth helm", type: "helm", category: "armor", class: "Wizard", price: 200, used: false, quantity: 1, def: 5},
    {img: helmArc, name: "Leather helm", type: "helm", category: "armor", class: "Archer", price: 200, used: false, quantity: 1, def: 7},
    {img: pantWar, name: "Iron pants", type: "pants", category: "armor", class: "Warrior", price: 300, used: false, quantity: 1, def: 15},
    {img: pantMag, name: "Cloth pants", type: "pants", category: "armor", class: "Wizard", price: 300, used: false, quantity: 1, def: 8},
    {img: pantArc, name: "Leather pants", type: "pants", category: "armor", class: "Archer", price: 300, used: false, quantity: 1, def: 12},
    {img: shoulderWar, name: "Iron shoulders", type: "shoulders", category: "armor", class: "Warrior", price: 250, used: false, quantity: 1, def: 12},
    {img: shoulderMag, name: "Cloth shoulders", type: "shoulders", category: "armor", class: "Wizard", price: 250, used: false, quantity: 1, def: 6},
    {img: shoulderArc, name: "Leather shoulders", type: "shoulders", category: "armor", class: "Archer", price: 250, used: false, quantity: 1, def: 8},
    {img: low_sword, name: "Common sword", type: "sword", category: "weapon", class: "Warrior", price: 50, used: false, quantity: 1, atck: 5},
    {img: mid_sword, name: "Excellent sword", type: "sword", category: "weapon", class: "Warrior", price: 500, used: false, quantity: 1, atck: 25},
    {img: high_sword, name: "Enchanted sword", type: "sword", category: "weapon", class: "Warrior", price: 1500, used: false, quantity: 1, atck: 50},
    {img: low_wand, name: "Common wand", type: "wand", category: "weapon", class: "Wizard", price: 50, used: false, quantity: 1, atck: 5},
    {img: mid_wand, name: "Excellent wand", type: "wand", category: "weapon", class: "Wizard", price: 500, used: false, quantity: 1, atck: 25},
    {img: high_wand, name: "Enchanted wand", type: "wand", category: "weapon", class: "Wizard", price: 1500, used: false, quantity: 1, atck: 50},
    {img: low_bow, name: "Common bow", type: "bow", category: "weapon", class: "Archer", price: 50, used: false, quantity: 1, atck: 5},
    {img: mid_bow, name: "Excellent bow", type: "bow", category: "weapon", class: "Archer", price: 500, used: false, quantity: 1, atck: 25},
    {img: high_bow, name: "Enchanted bow", type: "bow", category: "weapon", class: "Archer", price: 1500, used: false, quantity: 1, atck: 50} ]
};