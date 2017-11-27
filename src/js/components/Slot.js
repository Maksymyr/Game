import React from 'react';
import {Link} from 'react-router-dom';
import Info from './Info';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {useItem, heroHP, heroMP, heroLvlPoints, changeDeffence, changeAttack, addNotify} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({useItem, heroHP, heroMP, heroLvlPoints, changeDeffence, changeAttack, addNotify}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero, inventory: state.inventory}
}
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Slot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            checkbox: false,
            borderUsed: false
        }

    }
    handleEnter = () => {

        this.setState({checkbox: true})

    }
    handleLeave = () => {       
        this.setState({checkbox: false})
    
    }
    handleUse = () => {
            if (this.props.match.url.includes("inventory")) {
                if (this.props.hero.type == this.props.item.class || this.props.item.class == "none") {
                    if (this.props.item.type == "potion") {
                        switch(this.props.item.name) {
                            case "Mana potion":
                                this.props.heroMP(-this.props.hero.maxMP*this.props.item.curMP/100);
                                return this.props.useItem(this.props.item);
                            case "Health potion":
                                this.props.heroHP(-this.props.hero.maxHP*this.props.item.curHP/100);                
                                return this.props.useItem(this.props.item);
                        }
                    }
                    else if (this.props.item.type == "rise") {
                        this.props.heroLvlPoints(-1);
                    }
                    else if (this.props.item.category == "armor") {
                        if (Object.keys(this.props.hero.armSlots).length <= 0) {
                            let armor = {};
                            armor[this.props.item.type] = this.props.item.def;
                            let result = this.props.item.def;
                            this.props.changeDeffence({armor: armor, result: result});
                        }
                        else {
                            var slots = this.props.hero.armSlots;
                            let armor = {};
                            let result = 0;
                            for (let key in slots) {
                                if (key == this.props.item.type) {
                                    result += slots[key];
                                }
                                else {
                                    if(this.props.item.used) {
                                        armor[this.props.item.type] = 0;
                                    }
                                    else {
                                        result += this.props.item.def;
                                        armor[this.props.item.type] = this.props.item.def;
                                    }
                                }
                            }
                            this.props.changeDeffence({armor: armor, result: result});
                        }
                    }
                    else if (this.props.item.category == "weapon") {
                        if(this.props.item.used) {
                            this.props.changeAttack(0)
                        }
                        else {
                            this.props.changeAttack(this.props.item.atck)
                        }
                    }
                    this.props.useItem(this.props.item);
                }
            }
            else {
                if (this.props.item.type != "money" && this.props.item.used == false) { 
                    this.props.item.tradecheck ? this.props.back(this.props.item) : this.props.move(this.props.item);
                }
            }
       
    }
    handleContext = (event) => {
        event.preventDefault();
        this.props.addNotify(this.props.item);
       
    }
    render() {
        
        return (
           <div className="inv-slot" onClick={this.handleUse} onContextMenu={this.handleContext} onMouseEnter={this.props.item ? this.handleEnter : null} onMouseLeave={this.props.item ? this.handleLeave : null}>
                <div className={this.props.item && this.props.item.used ? "inv-img-used" : "inv-img"} style={ this.props.item ? { height: "100%", width: "100%", backgroundImage: "url("+ require(`../../img/${this.props.item.category}/${this.props.item.img}.jpg`)+ ")" } : null }>
                    {this.props.match.url.includes("inventory") && this.state.checkbox ? <Info>{this.props.item ? this.props.item.name : null}</Info> : null}
                    <p>{this.props.item ? this.props.item.quantity : null}</p>
                </div>
               
           </div>
        )
    }
}