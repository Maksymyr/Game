import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../logical_classes/Hero.js';
import Enemy from '../logical_classes/Enemy.js';

import * as items from '../constants/Items';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroEXP, enemyHP, heroHP, heroMP, heroSTR, heroDEX, heroCON, heroINT, 
    heroWIT, setForestLvl, heroDeath, enemyKilled, skill1CD, skill2CD,addNotify,
    skill3CD, skill4CD, addItemToInventory, moveMoney} from '../actions';


const mapDispatchToProps = dispatch => {
    return bindActionCreators({heroEXP, enemyHP, heroHP, heroMP, heroSTR, heroDEX, heroCON, 
        heroINT, heroWIT, setForestLvl, heroDeath, enemyKilled, skill1CD, skill2CD,addNotify,
        skill3CD, skill4CD, addItemToInventory, moveMoney}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero, enemy: state.enemy, inventory: state.inventory};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ForestPageBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero_lvl: 0 
        }
        this.attacking = this.attacking.bind(this);
        this.surrender = this.surrender.bind(this);
        this.skill = this.skill.bind(this);
        this.skill2 = this.skill2.bind(this);
        this.skill3 = this.skill3.bind(this);
        this.skill4 = this.skill4.bind(this);
    }
    componentWillMount () {
        this.props.skill1CD(0);
        this.props.skill2CD(0);
        this.props.skill3CD(0);
        this.props.skill4CD(0);
    }
    attacking(imported_damage) {
        let hero_attack;
        let enemy_attack;
        if (imported_damage == null) {
            switch (this.props.hero.type) {
                case "Warrior":
                    hero_attack = Math.floor((this.props.hero.str+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100);
                    break;
                case "Archer":
                    hero_attack = Math.floor((this.props.hero.dex*1.5+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100);
                    break;
                case "Wizard":
                    this.props.heroMP(5);
                    hero_attack = Math.floor((this.props.hero.int*2+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100);
                    break;
                default: 
                    break;
            }
            
        }
        else {
            hero_attack = Math.floor(imported_damage); 
        }
        if (this.props.hero.cdSkill2  > 0 && this.props.hero.cdSkill2 < (2+Math.floor(Math.random()))){
            enemy_attack = 0;
        }
        else {
            enemy_attack= Math.floor(this.props.enemy.str*(100-this.props.hero.def)/100);
        }

        this.props.enemyHP(hero_attack);
        this.props.heroHP(enemy_attack);
        if (this.props.enemy.curHP-hero_attack <= 0) {
            this.props.enemyHP(this.props.enemy.curHP);
            this.props.heroHP(-enemy_attack);
            this.props.heroEXP(this.props.enemy.exp);
            this.props.moveMoney((this.props.enemy.lvl+1)*5);
            let loot = Math.floor(Math.random()*(3+this.props.hero.lvl - this.props.enemy.lvl));
            if (this.props.enemy.drop && loot==0) {
                this.props.addItemToInventory(this.props.enemy.drop);
            }
            
            this.setState({hero_lvl: this.props.hero.lvl}, () => {
                if (this.props.hero.lvl > this.state.hero_lvl) {
                    this.props.addNotify("You win and get "+ parseInt(this.props.hero.lvl) + " level!");
                    this.props.history.push("/character");
                } 
                else {
                    this.props.addNotify("You win and get "+ this.props.enemy.exp + " exp points!");
                    this.props.history.push("/forest");
                }
            });
            setTimeout(() => {

                this.props.enemyKilled();
                if (this.props.hero.cdSkill4 > 0 && this.props.hero.cdSkill4 < 3){
                    this.props.heroSTR(-this.props.hero.str/2);
                    this.props.heroDEX(-this.props.hero.dex/2);
                    this.props.heroCON(-this.props.hero.con/2);
                    this.props.heroINT(-this.props.hero.int/2);
                    this.props.heroWIT(-this.props.hero.wit/2);   
                    this.props.heroHP(this.props.hero.curHP/2);  
                    this.props.heroMP(this.props.hero.curMP/2);             
                }
            }, 1500)
        }
        else if (this.props.hero.curHP-enemy_attack <= 0) {
            this.props.addNotify("You've died and lost your experience & all HP/MP!");
            setTimeout(() => {
                this.props.setForestLvl(0);
                this.props.heroDeath();
                this.props.history.push("/village");
                this.props.enemyKilled();
                if (this.props.hero.cdSkill4 > 0 && this.props.hero.cdSkill4 < 3){
                    this.props.heroSTR(-this.props.hero.str/2);
                    this.props.heroDEX(-this.props.hero.dex/2);
                    this.props.heroCON(-this.props.hero.con/2);
                    this.props.heroINT(-this.props.hero.int/2);
                    this.props.heroWIT(-this.props.hero.wit/2);               
                }
            },1500)
        }
        if (this.props.hero.cdSkill1  >= 1) {
            this.props.skill1CD(this.props.hero.cdSkill1 + 1);
            if (this.props.hero.cdSkill1  == 3){
                this.props.skill1CD(0);
            }
        }
        if (this.props.hero.cdSkill2  >= 1) {
            this.props.skill2CD(this.props.hero.cdSkill2 + 1);
            if (this.props.hero.cdSkill2  == 4){
                this.props.skill2CD(0);
            }
        }
        if (this.props.hero.cdSkill3  >= 1) {
            this.props.skill3CD(this.props.hero.cdSkill3 + 1);
            if (this.props.hero.cdSkill3  == 5){
                this.props.skill3CD(0);
            }
        }
        if (this.props.hero.cdSkill4  >= 1) {
            this.props.skill4CD(this.props.hero.cdSkill4 + 1);
            if (this.props.hero.cdSkill4  == 3){
                this.props.heroSTR(-this.props.hero.str/2);
                this.props.heroDEX(-this.props.hero.dex/2);
                this.props.heroCON(-this.props.hero.con/2);
                this.props.heroINT(-this.props.hero.int/2);
                this.props.heroWIT(-this.props.hero.wit/2);   
                this.props.heroHP(this.props.hero.curHP/2);
                this.props.heroMP(this.props.hero.curMP/2);             
            }
        }
    }
    surrender() {
        let lose = -Math.floor(Math.random()*(this.props.hero.lvl+1)*(this.props.enemy.lvl+1));
        this.props.addNotify("You've retreated and lost " + lose + " exp & some HP/MP!");
        setTimeout(() => {
            this.props.heroHP(Math.floor(this.props.hero.curHP/3) + Math.floor(Math.random())*(this.props.hero.curHP/2));
            this.props.heroMP(Math.floor(this.props.hero.curMP/3) + Math.floor(Math.random())*(this.props.hero.curMP/2));
            this.props.heroEXP(lose);
            this.props.history.push("/forest");
            if (this.props.hero.cdSkill4 > 0 && this.props.hero.cdSkill4 < 3){
                this.props.heroSTR(-this.props.hero.str/2);
                this.props.heroDEX(-this.props.hero.dex/2);
                this.props.heroCON(-this.props.hero.con/2);
                this.props.heroINT(-this.props.hero.int/2);
                this.props.heroWIT(-this.props.hero.wit/2);   
                this.props.heroHP(this.props.hero.curHP/2)   
                this.props.heroMP(this.props.hero.curMP/2)          
            }
            this.props.enemyKilled();
        }, 1500)
    }
    skill() {
        if (this.props.hero.cdSkill1  == 0) {
            let hero_attack;
            if (this.props.hero.type == "Warrior") { 
                if (this.props.hero.curMP >= 2) {
                    this.props.heroMP(2);
                    hero_attack = 2*(this.props.hero.str+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100;
                    this.attacking(hero_attack);
                    this.props.skill1CD(1); 
                }
                else 
                    this.props.addNotify('Not enough MP!');
            }
            if (this.props.hero.type == "Archer") { 
                if (this.props.hero.curMP >= 4) {
                    this.props.heroMP(4);
                    hero_attack = 3*(this.props.hero.dex+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100;
                    this.attacking(hero_attack);
                    this.props.skill1CD(1); 
                }
                else 
                    this.props.addNotify('Not enough MP!');
            }
            if (this.props.hero.type == "Wizard") {
                if (this.props.hero.curMP >= 10) { 
                    this.props.heroMP(10);
                    hero_attack = 4*(this.props.hero.int+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100;
                    this.attacking(hero_attack);
                    this.props.skill1CD(1); 
                }
                else 
                    this.props.addNotify('Not enough MP!');
            }
        }
    }
    skill2() {
        if (this.props.hero.cdSkill2  == 0 && this.props.hero.lvl >= 5) {
            let hero_attack;
            if (this.props.hero.type == "Warrior") { 
                if (this.props.hero.curMP >= 5) {
                        this.props.heroMP(5);
                    hero_attack = Math.floor((this.props.hero.str+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100*2);
                    this.attacking(hero_attack);
                    this.props.skill2CD(1);
                }
                else 
                    this.props.addNotify('Not enough MP!');
                }
            if (this.props.hero.type == "Archer") { 
                if (this.props.hero.curMP >= 8) {
                    this.props.heroMP(8);
                    hero_attack =  Math.floor((this.props.hero.dex+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100*1.5);
                    this.attacking(hero_attack);
                    this.props.skill2CD(1);
                }
                else 
                    this.props.addNotify('Not enough MP!');
            }
            if (this.props.hero.type == "Wizard") { 
                if (this.props.hero.curMP >= 15) {
                    this.props.heroMP(15);
                    hero_attack = Math.floor((this.props.hero.int+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100);
                    this.attacking(hero_attack);
                    this.props.skill2CD(1);
                }
                else 
                    this.props.addNotify('Not enough MP!');
            }
        }
    }
    skill3() {
        if (this.props.hero.cdSkill3  == 0 && this.props.hero.lvl >= 10) {
            let hero_attack;
            if (this.props.hero.type == "Warrior") { 
                if (this.props.hero.curMP >= 10) {
                    this.props.heroMP(10);
                    hero_attack = 4*(this.props.hero.str+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100;
                    this.attacking(hero_attack);
                    if (Math.floor(hero_attack/2) > this.props.hero.maxHP - this.props.hero.curHP)
                        this.props.heroHP(-(this.props.hero.maxHP - this.props.hero.curHP));
                    else if (this.props.hero.curEXP+this.props.enemy.exp >= this.props.hero.maxEXP) {}
                    else
                        this.props.heroHP(-Math.floor(hero_attack/2));
                    this.props.skill3CD(1);
                }
                else 
                    this.props.addNotify('Not enough MP!');
                }
            if (this.props.hero.type == "Archer") { 
                if (this.props.hero.curMP >= 15) {
                    this.props.heroMP(15);
                    hero_attack = 4*(this.props.hero.dex+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100;
                    this.attacking(hero_attack);
                    if (Math.floor(hero_attack/2) > this.props.hero.maxHP - this.props.hero.curHP)
                        this.props.heroHP(-(this.props.hero.maxHP - this.props.hero.curHP));
                    else if (this.props.hero.curEXP+this.props.enemy.exp >= this.props.hero.maxEXP) {}
                    else
                        this.props.heroHP(-Math.floor(hero_attack/2));
                    this.props.skill3CD(1);
                }
                else 
                    this.props.addNotify('Not enough MP!');
                }
            if (this.props.hero.type == "Wizard") { 
                if (this.props.hero.curMP >= 25) {
                    this.props.heroMP(25);
                    hero_attack = 4*(this.props.hero.int+this.props.hero.weapAtck)*(100+this.props.hero.att1)/100;
                    this.attacking(hero_attack);
                    if (Math.floor(hero_attack/2) > this.props.hero.maxHP - this.props.hero.curHP)
                        this.props.heroHP(-(this.props.hero.maxHP - this.props.hero.curHP));
                    else if (this.props.hero.curEXP+this.props.enemy.exp >= this.props.hero.maxEXP) {}
                    else
                        this.props.heroHP(-Math.floor(hero_attack/2));
                    this.props.skill3CD(1);
                }
                else 
                    this.props.addNotify('Not enough MP!');
                }
        }
    }
    skill4() {
        if (this.props.hero.cdSkill4  == 0 && this.props.hero.lvl >= 15) {
            switch(this.props.hero.type){
                case "Warrior":
                    if (this.props.hero.curMP >= 20) {
                        this.props.heroMP(20);
                        this.props.addNotify('You are under "Berserk" effect!');
                        setTimeout(() => {
                            this.props.heroSTR(this.props.hero.str);
                            this.props.heroDEX(this.props.hero.dex);
                            this.props.heroCON(this.props.hero.con);
                            this.props.heroINT(this.props.hero.int);
                            this.props.heroWIT(this.props.hero.wit);  
                            this.props.heroHP(-this.props.hero.curHP);
                            this.props.heroMP(-this.props.hero.curMP); 
                            this.props.skill4CD(1);
                        },1500)
                    }
                    else 
                        this.props.addNotify('Not enough MP!'); 
                    break;
                case "Archer":
                    if (this.props.hero.curMP >= 30) {
                        this.props.heroMP(30);
                        this.props.addNotify('You are under "Berserk" effect!');
                        setTimeout(() => {
                            this.props.heroSTR(this.props.hero.str);
                            this.props.heroDEX(this.props.hero.dex);
                            this.props.heroCON(this.props.hero.con);
                            this.props.heroINT(this.props.hero.int);
                            this.props.heroWIT(this.props.hero.wit);  
                            this.props.heroHP(-this.props.hero.curHP);
                            this.props.heroMP(-this.props.hero.curMP); 
                            this.props.skill4CD(1);
                        },1500)
                    }
                    else 
                        this.props.addNotify('Not enough MP!'); 
                    break;
                case "Wizard":
                    if (this.props.hero.curMP >= 50) {
                        this.props.heroMP(50);
                        this.props.addNotify('You are under "Berserk" effect!');
                        setTimeout(() => {
                            this.props.heroSTR(this.props.hero.str);
                            this.props.heroDEX(this.props.hero.dex);
                            this.props.heroCON(this.props.hero.con);
                            this.props.heroINT(this.props.hero.int);
                            this.props.heroWIT(this.props.hero.wit);  
                            this.props.heroHP(-this.props.hero.curHP);
                            this.props.heroMP(-this.props.hero.curMP); 
                            this.props.skill4CD(1);
                        },1500)
                    }
                    else 
                        this.props.addNotify('Not enough MP!'); 
                    break;
            }
        }
    }
    render() {
        return (
            <div className='forest'>
                <div className="forest-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/forest3.jpg")+')'}}>
                    <div className="left">
                        <Hero/>
                        <div className="battle-btns">
                            <button className='atck' onClick={() => this.attacking(null)}>Attack</button>
                            <button className={this.props.hero.cdSkill1 == 0 ? 'skill' : 'disp-op skill'} onClick={this.skill} style={this.props.hero.type == "Warrior" ? {backgroundImage: 'url('+require("../../img/Skills/skill1war.jpg")+')'} : this.props.hero.type == "Archer" ? {backgroundImage: 'url('+require("../../img/Skills/skill1arch.jpg")+')'} : {backgroundImage: 'url('+require("../../img/Skills/skill1wiz.jpg")+')'}}>{this.props.hero.cdSkill1 == 0 ? null : 4-this.props.hero.cdSkill1}</button>    
                            <button className={this.props.hero.lvl < 5 ? 'disp-op100 skill' : this.props.hero.cdSkill2 == 0 ? 'skill' : 'disp-op skill'} onClick={this.skill2} style={this.props.hero.type == "Warrior" ? {backgroundImage: 'url('+require("../../img/Skills/skill2war.jpg")+')'} : this.props.hero.type == "Archer" ? {backgroundImage: 'url('+require("../../img/Skills/skill2arch.jpg")+')'} : {backgroundImage: 'url('+require("../../img/Skills/skill2wiz.jpg")+')'}}>{this.props.hero.cdSkill2 == 0 ? null : 5-this.props.hero.cdSkill2}</button>
                            <button className={this.props.hero.lvl < 10 ? 'disp-op100 skill' : this.props.hero.cdSkill3 == 0 ? 'skill' : 'disp-op skill'} onClick={this.skill3} style={this.props.hero.type == "Warrior" ? {backgroundImage: 'url('+require("../../img/Skills/skill3war.jpg")+')'} : this.props.hero.type == "Archer" ? {backgroundImage: 'url('+require("../../img/Skills/skill3arch.jpg")+')'} : {backgroundImage: 'url('+require("../../img/Skills/skill3wiz.jpg")+')'}}>{this.props.hero.cdSkill3 == 0 ? null : 6-this.props.hero.cdSkill3}</button>    
                            <button className={this.props.hero.lvl < 15 ? 'disp-op100 skill' : this.props.hero.cdSkill4 == 0 ? 'skill' : 'disp-op skill'} onClick={this.skill4} style={this.props.hero.type == "Warrior" ? {backgroundImage: 'url('+require("../../img/Skills/skill4war.jpg")+')'} : this.props.hero.type == "Archer" ? {backgroundImage: 'url('+require("../../img/Skills/skill4arch.jpg")+')'} : {backgroundImage: 'url('+require("../../img/Skills/skill4wiz.jpg")+')'}}>{this.props.hero.cdSkill4 == 0 ? null : this.props.hero.cdSkill4 < 4 ? 4-this.props.hero.cdSkill4 : "-"}</button>     
                            <button className='surr' onClick={this.surrender}>Retreat</button>                            
                        </div>
                    </div>
                    <div className="center">
                    </div>
                    <div className="right">
                        <Enemy/>
                    </div>
                </div>
            </div>
        )
    }
}
