import rabbit from '../../img/rabbit.jpg';
import crow from '../../img/crow.jpg';
import squirrel from '../../img/squirrel.jpg';
import snake from '../../img/snake.jpg';
import rat from '../../img/rat.jpg';
import raccoon from '../../img/raccoon.jpg';


export const mobs= [
    [ 
        {name: "Rabbit", type: "Animal", img: rabbit, exp: 1, curHP: 10, maxHP: 10, curMP: 0, maxMP: 0, lvl: 0, str: 0, dex: 1, con: 1, int: 0, wit: 0 }, 
        {name: "Squirrel", type: "Animal", img: squirrel, exp: 1, curHP: 20, maxHP: 20, curMP: 10, maxMP: 10, lvl: 0, str: 1, dex: 2, con: 2, int: 0, wit: 1 }, 
        {name: "Crow", type: "Bird", img: crow, exp: 1, curHP: 10, maxHP: 10, curMP: 20, maxMP: 20, lvl: 0, str: 2, dex: 3, con: 1, int: 1, wit: 2 }],
    [
        {name: "Snake", type: "Animal", exp: 2, img: snake, curHP: 30, maxHP: 30, curMP: 20, maxMP: 20, lvl: 1, str: 2, dex: 3, con: 3, int: 1, wit: 2 }, 
        {name: "Rat", type: "Animal", exp: 2, img: rat, curHP: 40, maxHP: 40, curMP: 30, maxMP: 30, lvl: 1, str: 2, dex: 2, con: 4, int: 0, wit: 3 }, 
        {name: "Raccoon", type: "Animal", exp: 2, img: raccoon, curHP: 10, maxHP: 10, curMP: 20, maxMP: 20, lvl: 1, str: 3, dex: 4, con: 1, int: 0, wit: 2 },]    
    ]; 