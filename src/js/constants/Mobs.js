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

import skeleton from '../../img/lvl5/skeleton.jpg';
import zomb from '../../img/lvl5/zomb.jpg';
import darkspirit from '../../img/lvl5/darkspirit.jpg';

import demoncat from '../../img/lvl6/demon-cat.jpg';
import demonhunt from '../../img/lvl6/demon-hunt.jpg';
import demonwar from '../../img/lvl6/demon-war.jpg';

import demonpriest from '../../img/lvl7/demon-priest.jpg';
import evilbeast from '../../img/lvl7/evil-beast.jpg';
import reaper from '../../img/lvl7/reaper.jpg';

import croc from '../../img/lvl8/croc.jpg';
import forestdrake from '../../img/lvl8/forest-drake.jpg';
import hidra from '../../img/lvl8/hidra.jpg';

import dragon from '../../img/lvl9/dragon.jpg';
import fallen from '../../img/lvl10/fallen.jpg';

import * as items from '../constants/Items';

export const mobs= [
    [ 
        {name: "Antman", type: "Creature", drop: items.healthpot, img: antman, exp: 1, curHP: 10, maxHP: 10, curMP: 0, maxMP: 0, lvl: 0, str: 2, dex: 3, con: 1, int: 0, wit: 0 }, 
        {name: "Bly", type: "Creature",  drop: items.manapot, img: bly, exp: 1, curHP: 20, maxHP: 20, curMP: 0, maxMP: 0, lvl: 0, str: 3, dex: 1, con: 2, int: 0, wit: 0 }, 
        {name: "Flying rabbit", type: "Bird", img: flyrabbit, exp: 1, curHP: 10, maxHP: 10, curMP: 0, maxMP: 0, lvl: 0, str: 1, dex: 3, con: 1, int: 0, wit: 0 },
        {name: "Flying snake", type: "Creature", img: flysnake, exp: 1, curHP: 10, maxHP: 10, curMP: 0, maxMP: 0, lvl: 0, str: 2, dex: 3, con: 1, int: 0, wit: 0 }]
    ,[
        {name: "Goblin", type: "Humanoid", drop: items.glovewar,  exp: 3, img: goblin, curHP: 60, maxHP: 60, curMP: 10, maxMP: 10, lvl: 1, str: 2, dex: 3, con: 6, int: 1, wit: 1 }, 
        {name: "Cock", type: "Bird", drop: items.glovemag, exp: 3, img: han, curHP: 40, maxHP: 40, curMP: 10, maxMP: 10, lvl: 1, str: 2, dex: 2, con: 4, int: 1, wit: 1 }, 
        {name: "Wolf", type: "Animal", drop: items.glovearc, exp: 3, img: wolf, curHP: 50, maxHP: 50, curMP: 10, maxMP: 10, lvl: 1, str: 3, dex: 4, con: 5, int: 1, wit: 1 }]  
    ,[
        {name: "Ent", type: "Humanoid", drop: items.manapot, exp: 7, img: ent, curHP: 70, maxHP: 70, curMP: 20, maxMP: 20, lvl: 2, str: 3, dex: 4, con: 7, int: 2, wit: 2 }, 
        {name: "Horse", type: "Animal", drop: items.lowwand, exp: 7, img: horse, curHP: 60, maxHP: 60, curMP: 20, maxMP: 20, lvl: 2, str: 4, dex: 3, con: 6, int: 2, wit: 2 }, 
        {name: "Lion", type: "Animal", drop: items.lowbow, exp: 8, img: lion, curHP: 80, maxHP: 80, curMP: 20, maxMP: 20, lvl: 2, str: 6, dex: 5, con: 8, int: 2, wit: 2 },         
        {name: "Bearbird", type: "Animal", drop: items.lowsword, exp: 10, img: bearbird, curHP: 100, maxHP: 100, curMP: 20, maxMP: 20, lvl: 2, str: 5, dex: 2, con: 10, int: 2, wit: 2 }]    
    ,[
        {name: "Werewolf", type: "Humanoid", drop: items.bootsarc, exp: 21, img: werewolf, curHP: 120, maxHP: 120, curMP: 30, maxMP: 30, lvl: 3, str: 6, dex: 7, con: 12, int: 3, wit: 3 }, 
        {name: "Beast", type: "Animal", drop: items.bootswar, exp: 27, img: beast, curHP: 160, maxHP: 160, curMP: 30, maxMP: 30, lvl: 3, str: 8, dex: 6, con: 16, int: 3, wit: 3 }, 
        {name: "Forest golem", type: "Creature", drop: items.skill, exp: 40, img: forest_golem, curHP: 200, maxHP: 200, curMP: 30, maxMP: 30, lvl: 3, str: 6, dex: 5, con: 20, int: 3, wit: 3 },         
        {name: "Unicorn", type: "Animal", drop: items.bootsmag, exp: 23, img: unicorn, curHP: 130, maxHP: 130, curMP: 30, maxMP: 30, lvl: 3, str: 7, dex: 6, con: 13, int: 3, wit: 3 }]   
    ,[
        {name: "Skeleton", type: "Undead", drop: items.chestarc, exp: 50, img: skeleton, curHP: 200, maxHP: 200, curMP: 40, maxMP: 40, lvl: 4, str: 12, dex: 7, con: 20, int: 4, wit: 4 }, 
        {name: "Zombie", type: "Undead", drop: items.chestwar, exp: 52, img: zomb, curHP: 220, maxHP: 220, curMP: 40, maxMP: 40, lvl: 4, str: 10, dex: 6, con: 22, int: 4, wit: 4 }, 
        {name: "Spirit", type: "Mage", drop: items.chestmag, exp: 60, img: darkspirit, curHP: 150, maxHP: 150, curMP: 40, maxMP: 40, lvl: 4, str: 3, dex: 5, con: 15, int: 10, wit: 8 }]
    ,[
        {name: "Demon cat", type: "Demon", drop: items.pantmag, exp: 85, img: demoncat, curHP: 250, maxHP: 250, curMP: 50, maxMP: 50, lvl: 5, str: 12, dex: 15, con: 25, int: 5, wit: 5 }, 
        {name: "Demon hunter", type: "Demon", drop: items.pantarc, exp: 92, img: demonhunt, curHP: 300, maxHP: 300, curMP: 50, maxMP: 50, lvl: 5, str: 14, dex: 10, con: 30, int: 5, wit: 5 }, 
        {name: "Demon warrior", type: "Demon", drop: items.pantwar, exp: 95, img: demonwar, curHP: 320, maxHP: 320, curMP: 50, maxMP: 50, lvl: 5, str: 15, dex: 8, con: 32, int: 5, wit: 5 }]
    
    ,[
        {name: "Demon priest", type: "Mage", drop: items.helmmag, exp: 132, img: demonpriest, curHP: 300, maxHP: 300, curMP: 100, maxMP: 100, lvl: 6, str: 2, dex: 9, con: 30, int: 25, wit: 10 }, 
        {name: "Evil beast", type: "Demon", drop: items.helmwar, exp: 142, img: evilbeast, curHP: 400, maxHP: 400, curMP: 60, maxMP: 60, lvl: 6, str: 28, dex: 7, con: 40, int: 6, wit: 6 }, 
        {name: "Reaper", type: "Demon", drop: items.helmarc, exp: 121, img: reaper, curHP: 370, maxHP: 370, curMP: 60, maxMP: 60, lvl: 6, str: 21, dex: 15, con: 37, int: 6, wit: 6 }]
    ,[
        {name: "Croc", type: "Demon", drop: items.shoulderwar, exp: 205, img: croc, curHP: 450, maxHP: 450, curMP: 70, maxMP: 70, lvl: 7, str: 35, dex: 15, con: 45, int: 7, wit: 7 }, 
        {name: "Forest drake", type: "Creature", drop: items.shouldermag, exp: 215, img: forestdrake, curHP: 480, maxHP: 480, curMP: 70, maxMP: 70, lvl: 7, str: 32, dex: 15, con: 48, int: 7, wit: 7 }, 
        {name: "Hidra", type: "Creature", drop: items.shoulderarc, exp: 241, img: hidra, curHP: 520, maxHP: 520, curMP: 70, maxMP: 70, lvl: 7, str: 28, dex: 15, con: 52, int: 7, wit: 7 }]
    ,[
        {name: "Dragon", type: "Creature", drop: items.midsword, exp: 400, img: dragon, curHP: 800, maxHP: 800, curMP: 80, maxMP: 80, lvl: 8, str: 50, dex: 40, con: 80, int: 8, wit: 8 },
        {name: "Dragon", type: "Creature", drop: items.midbow, exp: 400, img: dragon, curHP: 800, maxHP: 800, curMP: 80, maxMP: 80, lvl: 8, str: 50, dex: 40, con: 80, int: 8, wit: 8 },
        {name: "Dragon", type: "Creature", drop: items.midwand, exp: 400, img: dragon, curHP: 800, maxHP: 800, curMP: 80, maxMP: 80, lvl: 8, str: 50, dex: 40, con: 80, int: 8, wit: 8 }
    ]
    ,[
        {name: "Fallen angel", type: "Creature", drop: items.topsword, exp: 1000, img: fallen, curHP: 2000, maxHP: 2000, curMP: 100, maxMP: 100, lvl: 9, str: 100, dex: 150, con: 200, int: 10, wit: 10 },
        {name: "Fallen angel", type: "Creature", drop: items.topbow, exp: 1000, img: fallen, curHP: 2000, maxHP: 2000, curMP: 100, maxMP: 100, lvl: 9, str: 100, dex: 150, con: 200, int: 10, wit: 10 },
        {name: "Fallen angel", type: "Creature", drop: items.topwand, exp: 1000, img: fallen, curHP: 2000, maxHP: 2000, curMP: 100, maxMP: 100, lvl: 9, str: 100, dex: 150, con: 200, int: 10, wit: 10 }        
    ]  
    
    ]; 