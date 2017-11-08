import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../logical_classes/Hero.js';
import Enemy from '../logical_classes/Enemy.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroEXP, enemyHP, heroHP, heroMP, heroSTR, heroDEX, heroCON, heroINT, heroWIT, setForestLvl, heroDeath, enemyKilled, skill1CD, skill2CD,
    skill3CD, skill4CD} from '../actions';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({heroEXP, enemyHP, heroHP, heroMP, heroSTR, heroDEX, heroCON, heroINT, heroWIT, setForestLvl, heroDeath, enemyKilled, skill1CD, skill2CD,
        skill3CD, skill4CD}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero, enemy: state.enemy};
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
    attacking(imp_dmg) {
        let hero_attack;
        let enemy_attack;
        console.log(imp_dmg);
        if (imp_dmg == null) {
            if (this.props.hero.type == "Warrior") { hero_attack = this.props.hero.str;}
            if (this.props.hero.type == "Archer") { hero_attack = Math.floor(this.props.hero.dex*1.5);}
            if (this.props.hero.type == "Wizard") { hero_attack = this.props.hero.int*2;}
            console.log(hero_attack);
        }
        else {
            hero_attack = imp_dmg; 
            console.log(hero_attack);
        }
        enemy_attack = this.props.enemy.str;

        this.props.enemyHP(hero_attack);
        this.props.heroHP(enemy_attack);
        if (this.props.enemy.curHP-hero_attack <= 0) {
            this.setState({hero_lvl: this.props.hero.lvl}, () => {
                if (this.props.hero.lvl > this.state.hero_lvl) {
                    this.props.history.push("/character");
                } 
                else this.props.history.push("/forest");
            });
            this.props.enemyHP(this.props.enemy.curHP);
            this.props.heroEXP(this.props.enemy.exp);
            this.props.enemyKilled();

        }
        if (this.props.hero.curHP-enemy_attack <= 0) {
            this.props.setForestLvl(0);
            this.props.heroDeath();
            this.props.history.push("/village");
            this.props.enemyKilled();

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
            // if (this.props.hero.cdSkill4  == 3){
            //     this.props.heroSTR(this.props.hero.str/2);
            //     this.props.heroDEX(this.props.hero.dex/2);
            //     this.props.heroCON(this.props.hero.con/2);
            //     this.props.heroINT(this.props.hero.int/2);
            //     this.props.heroWIT(this.props.hero.wit/2);   
            //     this.props.heroHP(this.props.hero.curHP/2)             
            // }
        }
    }
    surrender() {
        this.props.heroHP(Math.floor(this.props.hero.curHP/3) + Math.floor(Math.random())*(this.props.hero.curHP/2));
        this.props.heroMP(Math.floor(this.props.hero.curMP/3) + Math.floor(Math.random())*(this.props.hero.curMP/2));
        this.props.heroEXP(-Math.floor(Math.random()*(this.props.hero.lvl+1)*(this.props.enemy.lvl+1)));
        this.props.history.push("/forest");
        this.props.enemyKilled();

    }
    skill() {
        if (this.props.hero.cdSkill1  == 0) {
            let hero_attack;
            if (this.props.hero.type == "Warrior") { hero_attack = this.props.hero.str*2;}
            if (this.props.hero.type == "Archer") { hero_attack = this.props.hero.dex*3;}
            if (this.props.hero.type == "Wizard") { hero_attack = this.props.hero.int*4;}
            this.attacking(hero_attack);
            this.props.skill1CD(1);
        }
    }
    skill2() {
        if (this.props.hero.cdSkill2  == 0 && this.props.hero.lvl > 5) {
            let hero_attack;
            if (this.props.hero.type == "Warrior") { hero_attack = this.props.hero.str*3;}
            if (this.props.hero.type == "Archer") { hero_attack =  Math.floor(this.props.hero.dex*4.5);}
            if (this.props.hero.type == "Wizard") { hero_attack = this.props.hero.int*6;}
            this.attacking(hero_attack);
            this.props.skill2CD(1);
        }
    }
    skill3() {
        if (this.props.hero.cdSkill3  == 0 && this.props.hero.lvl > 10) {
            let hero_attack;
            if (this.props.hero.type == "Warrior") { hero_attack = this.props.hero.str*4;}
            if (this.props.hero.type == "Archer") { hero_attack = this.props.hero.dex*6;}
            if (this.props.hero.type == "Wizard") { hero_attack = this.props.hero.int*9;}
            this.attacking(hero_attack);
            this.props.skill3CD(1);
        }
    }
    skill4() {
        if (this.props.hero.cdSkill4  == 0 && this.props.hero.lvl > 15) {
            // this.props.heroSTR(this.props.hero.str*2);
            // this.props.heroDEX(this.props.hero.dex*2);
            // this.props.heroCON(this.props.hero.con*2);
            // this.props.heroINT(this.props.hero.int*2);
            // this.props.heroWIT(this.props.hero.wit*2);  
            // this.props.heroHP(-this.props.hero.curHP)
            this.props.skill4CD(1);
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
                            <button className={this.props.hero.cdSkill1 == 0 ? 'skill' : 'disp-op skill'} onClick={this.skill} style={{backgroundImage: 'url('+require("../../img/Skills/skill1war.jpg")+')'}}>{this.props.hero.cdSkill1 == 0 ? null : 4-this.props.hero.cdSkill1}</button>    
                            <button className={this.props.hero.lvl < 5 ? 'disp-op100 skill' : this.props.hero.cdSkill2 == 0 ? 'skill' : 'disp-op skill'} onClick={this.skill2} style={{backgroundImage: 'url('+require("../../img/Skills/skill2war.jpg")+')'}}>{this.props.hero.cdSkill2 == 0 ? null : 5-this.props.hero.cdSkill2}</button>
                            <button className={this.props.hero.lvl < 10 ? 'disp-op100 skill' : this.props.hero.cdSkill3 == 0 ? 'skill' : 'disp-op skill'} onClick={this.skill3} style={{backgroundImage: 'url('+require("../../img/Skills/skill3war.jpg")+')'}}>{this.props.hero.cdSkill3 == 0 ? null : 6-this.props.hero.cdSkill3}</button>    
                            <button className={this.props.hero.lvl < 15 ? 'disp-op100 skill' : this.props.hero.cdSkill4 == 0 ? 'skill' : 'disp-op skill'} onClick={this.skill4} style={{backgroundImage: 'url('+require("../../img/Skills/skill4war.jpg")+')'}}>{this.props.hero.cdSkill4 == 0 ? null : this.props.hero.cdSkill4 < 4 ? 4-this.props.hero.cdSkill4 : "-"}</button>     
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
