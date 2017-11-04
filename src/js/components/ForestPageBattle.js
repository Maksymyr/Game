import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../logical_classes/Hero.js';
import Enemy from '../logical_classes/Enemy.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroEXP, enemyHP, heroHP, heroMP, setForestLvl, heroDeath, enemyKilled} from '../actions';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({heroEXP, enemyHP, heroHP, heroMP,  setForestLvl, heroDeath, enemyKilled}, dispatch)
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
    }

    attacking = () => {
        let hero_attack;
        let enemy_attack;
        if (this.props.hero.type == "Warrior") { hero_attack = this.props.hero.str;}
        if (this.props.hero.type == "Archer") { hero_attack = this.props.hero.dex;}
        if (this.props.hero.type == "Wizard") { hero_attack = this.props.hero.int;}

        enemy_attack = this.props.enemy.str;

        this.props.enemyHP(hero_attack);
        this.props.heroHP(enemy_attack);
        if (this.props.enemy.curHP-hero_attack <= 0) {
            this.setState({hero_lvl: this.props.hero.lvl}, () => {
                if (this.props.hero.lvl > this.state.hero_lvl) {
                    console.log("up!");
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

       
    }
    surrender = () => {
      console.log(-Math.floor(Math.random()*(this.props.hero.lvl+1)*(this.props.enemy.lvl+1)));
        this.props.heroHP(Math.floor(this.props.hero.curHP/3) + Math.floor(Math.random())*(this.props.hero.curHP/2));
        this.props.heroMP(Math.floor(this.props.hero.curMP/3) + Math.floor(Math.random())*(this.props.hero.curMP/2));
        this.props.heroEXP(-Math.floor(Math.random()*(this.props.hero.lvl+1)*(this.props.enemy.lvl+1)));
        this.props.history.push("/forest");
        this.props.enemyKilled();
    }

    render() {

        return (
            <div className='forest'>
                {/* <img src={require('../../img/forest.jpg')}/> */}
                <div className="forest-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/forest3.jpg")+')'}}>
                    <div className="left">
                        <Hero/>
                    </div>
                    <div className="center">
                        <div className="battle-btns">
                            <button className='atck' onClick={this.attacking}>Attack</button>
                            <button className='skill'>Use skill</button>    
                            <button className='skill2'>Use skill2</button>    
                            <button className='surr' onClick={this.surrender}>Surrender</button>                            
                        </div>
                    </div>
                    <div className="right">
                        <Enemy/>
                    </div>
                </div>
            </div>
        )
    }
}
