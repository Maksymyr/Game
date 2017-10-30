import React from 'react';
import {Link} from 'react-router-dom';

import * as types from '../constants/RoadWay.js'
import Hero from '../logical_classes/Hero.js';
import Enemy from '../logical_classes/Enemy.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroEXP, enemyHP, heroHP, setForestLvl} from '../actions';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({heroEXP, enemyHP, heroHP, setForestLvl}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero, enemy: state.enemy};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ForestPageBattle extends React.Component {
    constructor(props) {
        super(props);
    }

    attacking = () => {
        if (this.props.hero.type == "Warrior") {
            this.props.enemyHP(this.props.hero.str);
            this.props.heroHP(this.props.enemy.str);
            if (this.props.enemy.curHP-this.props.hero.str <= 0) {
                this.props.enemyHP(this.props.enemy.curHP);
                this.props.heroEXP(this.props.enemy.exp);
                this.props.history.push("/forest");
            }
            if (this.props.hero.curHP-this.props.enemy.str <= 0) {
                this.props.enemyHP(this.props.enemy.curHP);
                this.props.heroEXP(this.props.enemy.exp);
                this.props.setForestLvl(0);
                this.props.history.push("/village");
            }
        }


       
    }
    render() {

        return (
            <div className='forest'>
                <img src={require('../../img/forest.jpg')}/>
                <Hero/>
                <div className="battle-btns">
                    <button onClick={this.attacking}>Attack</button>
                    <button>Defence</button>    
                    <button>Surrender</button>    
                    <button>Continue</button>                            
                </div>
                <Enemy/>
            </div>
        )
    }
}
