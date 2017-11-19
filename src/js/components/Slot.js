import React from 'react';
import {Link} from 'react-router-dom';
import Info from './Info';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useItem, heroHP, heroMP, heroLvlPoints, changeDeffence, changeAttack} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({useItem, heroHP, heroMP, heroLvlPoints, changeDeffence, changeAttack}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero, inventory: state.inventory}
}

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
        if (this.props.hero.type == this.props.item.class || this.props.item.class == "none") {
            if (this.props.item.type == "potion") {
                switch(this.props.item.name) {
                    case "Mana potion":
                        this.props.heroMP(-this.props.hero.curMP*this.props.item.curMP/100);
                        return this.props.useItem(this.props.item);
                    case "Health potion":
                        this.props.heroHP(-this.props.hero.curHP*this.props.item.curHP/100);                
                        return this.props.useItem(this.props.item);
                }
            }
            else if (this.props.item.type == "rise") {
                this.props.heroLvlPoints(-1);
            }
            else if (this.props.item.category == "armor") {
                if(this.props.item.used) {
                    //off
                    console.log("off")
                    
                    this.props.changeDeffence(-this.props.item.def)
                }
                else {
                    console.log("on")
                    this.props.changeDeffence(this.props.item.def)
                    //on
                }
            }
            else if (this.props.item.category == "weapon") {
                if(this.props.item.used) {
                    //off
                    this.props.changeAttack(-this.props.item.atck)
                }
                else {
                    this.props.changeAttack(this.props.item.atck)
                    //on
                }
            }
            this.props.useItem(this.props.item);
        }
    }
    render() {

        return (
           <div className="inv-slot" onClick={this.handleUse} onMouseEnter={this.props.item ? this.handleEnter : null} onMouseLeave={this.props.item ? this.handleLeave : null}>
                <div className={this.props.item && this.props.item.used ? "inv-img-used" : "inv-img"} style={ this.props.item ? { height: "100%", width: "100%", backgroundImage: 'url('+this.props.item.img+')'} : null }>
                    {this.state.checkbox ? <Info>{this.props.item ? this.props.item.name : null}</Info> : null}
                    <p>{this.props.item ? this.props.item.quantity : null}</p>
                </div>
               
           </div>
        )
    }
}