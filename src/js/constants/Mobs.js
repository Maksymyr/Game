import antman from '../../img/lvl1/antman.jpg';
import bly from '../../img/lvl1/bly.jpg';
import flyrabbit from '../../img/lvl1/flyrabbit.jpg';
import flysnake from '../../img/lvl1/flysnake.jpg';

import goblin from '../../img/lvl2/goblin.jpg';
import han from '../../img/lvl2/han.jpg';
import wolf from '../../img/lvl2/wolf.jpg';

import ent from '../../img/lvl3/ent.jpg';
import bearbird from '../../img/lvl3/bearbird.jpg';
import horse from '../../img/lvl3/horse.jpg';
import lion from '../../img/lvl3/lion.jpg';

import werewolf from '../../img/lvl4/werewolf.jpg';
import beast from '../../img/lvl4/beast.jpg';
import forest_golem from '../../img/lvl4/forest-golem.jpg';
import unicorn from '../../img/lvl4/unicorn.jpg';

export const mobs= [
    [ 
        {name: "Antman", type: "Creature", img: antman, exp: 1, curHP: 10, maxHP: 10, curMP: 0, maxMP: 0, lvl: 0, str: 2, dex: 3, con: 1, int: 0, wit: 0 }, 
        {name: "Bly", type: "Creature", img: bly, exp: 1, curHP: 20, maxHP: 20, curMP: 0, maxMP: 0, lvl: 0, str: 3, dex: 1, con: 2, int: 0, wit: 0 }, 
        {name: "Flying rabbit", type: "Bird", img: flyrabbit, exp: 1, curHP: 10, maxHP: 10, curMP: 0, maxMP: 0, lvl: 0, str: 1, dex: 3, con: 1, int: 0, wit: 0 },
        {name: "Flying snake", type: "Creature", img: flysnake, exp: 1, curHP: 10, maxHP: 10, curMP: 0, maxMP: 0, lvl: 0, str: 2, dex: 3, con: 1, int: 0, wit: 0 }]
    ,[
        {name: "Goblin", type: "Humanoid", exp: 3, img: goblin, curHP: 60, maxHP: 60, curMP: 10, maxMP: 10, lvl: 1, str: 2, dex: 3, con: 6, int: 1, wit: 1 }, 
        {name: "Cock", type: "Bird", exp: 3, img: han, curHP: 40, maxHP: 40, curMP: 10, maxMP: 10, lvl: 1, str: 2, dex: 2, con: 4, int: 1, wit: 1 }, 
        {name: "Wolf", type: "Animal", exp: 3, img: wolf, curHP: 50, maxHP: 50, curMP: 10, maxMP: 10, lvl: 1, str: 3, dex: 4, con: 5, int: 1, wit: 1 }]  
    ,[
        {name: "Ent", type: "Humanoid", exp: 7, img: ent, curHP: 70, maxHP: 70, curMP: 20, maxMP: 20, lvl: 2, str: 3, dex: 4, con: 7, int: 2, wit: 2 }, 
        {name: "Horse", type: "Animal", exp: 7, img: horse, curHP: 60, maxHP: 60, curMP: 20, maxMP: 20, lvl: 2, str: 4, dex: 3, con: 6, int: 2, wit: 2 }, 
        {name: "Lion", type: "Animal", exp: 8, img: lion, curHP: 80, maxHP: 80, curMP: 20, maxMP: 20, lvl: 2, str: 6, dex: 5, con: 8, int: 2, wit: 2 },         
        {name: "Bearbird", type: "Animal", exp: 10, img: bearbird, curHP: 100, maxHP: 100, curMP: 20, maxMP: 20, lvl: 2, str: 5, dex: 2, con: 10, int: 2, wit: 2 }]    
    ,[
        {name: "Werewolf", type: "Humanoid", exp: 21, img: werewolf, curHP: 120, maxHP: 120, curMP: 30, maxMP: 30, lvl: 3, str: 6, dex: 7, con: 12, int: 3, wit: 3 }, 
        {name: "Beast", type: "Animal", exp: 27, img: beast, curHP: 160, maxHP: 160, curMP: 30, maxMP: 30, lvl: 3, str: 8, dex: 6, con: 16, int: 3, wit: 3 }, 
        {name: "Forest golem", type: "Creature", exp: 20, img: forest_golem, curHP: 200, maxHP: 200, curMP: 30, maxMP: 30, lvl: 3, str: 6, dex: 5, con: 20, int: 3, wit: 3 },         
        {name: "Unicorn", type: "Animal", exp: 23, img: unicorn, curHP: 130, maxHP: 130, curMP: 30, maxMP: 30, lvl: 3, str: 7, dex: 6, con: 13, int: 3, wit: 3 }]   
    ]; 