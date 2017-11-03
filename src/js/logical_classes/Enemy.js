import React from 'react';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {newEnemy: state.enemy}
}

@connect(mapStateToProps)
export default class Enemy extends React.Component {
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
                        <h2>{this.props.newEnemy.name}</h2>  
                        <div className="image-style" style={{backgroundImage: 'url('+this.props.newEnemy.img+')'}}>
                            <div className="under-hp-bar"></div>
                            <div className="hp-bar" style={{width: this.props.newEnemy.curHP*100/this.props.newEnemy.maxHP+"%"}}></div>
                            <div className="under-mp-bar"></div>
                            <div className="mp-bar" style={{width: this.props.newEnemy.curMP*100/this.props.newEnemy.maxMP+"%"}}></div>
                        </div>  
                        <div className="profile-btns">
                            <div className={this.state.switchbox ? "profile clicked" : "profile"}><button onClick={this.switcher}>Monster</button></div>
                            <div className={!this.state.switchbox ? "character clicked" : "character"}><button onClick={this.switcher}>About</button></div>
                        </div>   
                </div>
            )}
            else {
                return (
                    <div className='cards-style'>
                        <h3>{this.props.newEnemy.type}</h3>
                        <div className="chars">
                            
                            <h4 className="lvl-bar">Level: {this.props.newEnemy.lvl+1}</h4>
                            <p className='hp'>Health: {this.props.newEnemy.maxHP} / {this.props.newEnemy.curHP}</p> 
                            <p className='mp'>Mana: {this.props.newEnemy.maxMP} / {this.props.newEnemy.curMP}</p>
                            <p className="char-right">Strength: {this.props.newEnemy.str}</p>
                            <p className="char-right">Dexterity: {this.props.newEnemy.dex}</p>
                            <p className="char-right">Constitution: {this.props.newEnemy.con}</p>
                            <p className="char-right">Intellect: {this.props.newEnemy.int}</p>
                            <p className="char-right">Wisdom: {this.props.newEnemy.wit}</p>
                        </div>
                        <div className="profile-btns">
                            <div className={this.state.switchbox ? "profile clicked" : "profile"}><button onClick={this.switcher}>Monster</button></div>
                            <div className={!this.state.switchbox ? "character clicked" : "character"}><button onClick={this.switcher}>About</button></div>
                        </div>  
                    </div>
            )}
        }
    }
}

