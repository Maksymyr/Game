import React from 'react';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {newEnemy: state.enemy}
}

@connect(mapStateToProps)
export default class Enemy extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        return (
            <div className='cards-style'>
            <h2>{this.props.newEnemy.name}</h2>
               
   
           <div className="image-style" style={{backgroundImage: 'url('+this.props.newEnemy.img+')'}}>
                <div className="under-hp-bar"></div>
                <div className="hp-bar" style={{width: this.props.newEnemy.curHP*100/this.props.newEnemy.maxHP+"%"}}></div>
                <div className="under-mp-bar"></div>
                <div className="mp-bar" style={{width: this.props.newEnemy.curMP*100/this.props.newEnemy.maxMP+"%"}}></div>
               
               
               {/* <span className='exp'>Level: {this.props.newHero.lvl+1}</span> */}
           
               
               
           </div>
           <div className="profile-btns">
               <div className="profile"><button>Monster</button></div>
               <div className="character"><button>About</button></div>
           </div>   


            {/* <div className='cards-enemy-style'>
                <h2>{this.props.newEnemy.name}</h2>
                <h3>{this.props.newEnemy.type}</h3>
                <div>
                <div className="image-style" style={{backgroundImage: 'url('+this.props.newEnemy.img+')'}}>
                    
                    <span>Lvl: {this.props.newEnemy.lvl}</span><br/>
                    <span className='hp'>{this.props.newEnemy.maxHP} / {this.props.newEnemy.curHP}</span><br/> 
                    <span className='mp'>{this.props.newEnemy.maxMP} / {this.props.newEnemy.curMP}</span>
                </div>
                </div>
                <div className='chars'>
                    <span className="char-right">Strength: {this.props.newEnemy.str}</span><br/>
                    <span className="char-right">Dexterity: {this.props.newEnemy.dex}</span><br/>
                    <span className="char-right">Constitution: {this.props.newEnemy.con}</span><br/>
                    <span className="char-right">Intellect: {this.props.newEnemy.int}</span><br/>
                    <span className="char-right">Wisdom: {this.props.newEnemy.wit}</span>
                </div> */}
            </div>
        )
    }
}