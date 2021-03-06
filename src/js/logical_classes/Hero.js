import React from 'react';
import {connect} from 'react-redux';
import warrior from '../../img/warrior.jpg';
import archer from '../../img/archer.jpg';
import wizard from '../../img/wizard.jpg';

const mapStateToProps = (state, ownProps) => {
    return {newHero: state.hero}
}

@connect(mapStateToProps)
export default class Hero extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            switchbox: true
        }
    }
    switcher = () => {
        this.setState({switchbox: !this.state.switchbox})
    }
    render() {
            {if (this.state.switchbox) { 
            return (
                <div className='cards-style'>
                        <h2>{this.props.newHero.name}</h2>  
                        <div className="image-style" style={this.props.newHero.type=="Warrior" ? 
                        {backgroundImage: 'url('+ warrior +')'} : this.props.newHero.type=="Archer" ? 
                        {backgroundImage: 'url('+ archer +')'} : {backgroundImage: 'url('+ wizard +')'}}>
                            <div className="under-exp-bar"></div> 
                            <div className="exp-bar" style={{width: this.props.newHero.curEXP*100/this.props.newHero.maxEXP+"%"}}>
                            {Math.floor(this.props.newHero.curEXP*100/this.props.newHero.maxEXP)+"%"}</div>
                            <div className="under-hp-bar"></div>
                            <div className="hp-bar" style={{width: (this.props.newHero.curHP*100/(this.props.newHero.maxHP*(this.props.newHero.att3+100)/100))+"%"}}>
                            {Math.floor(this.props.newHero.curHP*100/(this.props.newHero.maxHP*(this.props.newHero.att3+100)/100))+"%"}</div>
                            <div className="under-mp-bar"></div>
                            <div className="mp-bar" style={{width: this.props.newHero.curMP*100/(this.props.newHero.maxMP*(this.props.newHero.att4+100)/100)+"%"}}>
                            {Math.floor(this.props.newHero.curMP*100/(this.props.newHero.maxMP*(this.props.newHero.att4+100)/100))+"%"}</div>
                        </div>  
                        <div className="profile-btns">
                            <div className={this.state.switchbox ? "profile clicked" : "profile"}><button onClick={this.switcher}>Hero</button></div>
                            <div className={!this.state.switchbox ? "character clicked" : "character"}><button onClick={this.switcher}>Character</button></div>
                        </div>   
                </div>
            )}
            else {
                return (
                    <div className='cards-style'>
                        <h3>{this.props.newHero.type}</h3>
                        <div className="chars">
                            
                            <h4 className="lvl-bar">Level: {this.props.newHero.lvl}</h4>
                            <p className='hp'>Health: {this.props.newHero.curHP} / {this.props.newHero.maxHP*(this.props.newHero.att3+100)/100}</p> 
                            <p className='mp'>Mana: {this.props.newHero.curMP} / {this.props.newHero.maxMP*(this.props.newHero.att4+100)/100}</p>
                            <p>Experience: {this.props.newHero.curEXP} / {this.props.newHero.maxEXP}</p>
                            <p className="char-right">Strength: {this.props.newHero.str}</p>
                            <p className="char-right">Dexterity: {this.props.newHero.dex}</p>
                            <p className="char-right">Constitution: {this.props.newHero.con}</p>
                            <p className="char-right">Intellect: {this.props.newHero.int}</p>
                            <p className="char-right">Wisdom: {this.props.newHero.wit}</p>
                        </div>
                        <div className="profile-btns">
                            <div className={this.state.switchbox ? "profile clicked" : "profile"}><button onClick={this.switcher}>Hero</button></div>
                            <div className={!this.state.switchbox ? "character clicked" : "character"}><button onClick={this.switcher}>Character</button></div>
                        </div>  
                    </div>
            )}
        }
    }
}