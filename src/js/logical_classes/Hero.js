import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {newHero: state.hero}
}

@connect(mapStateToProps)
export default class Hero extends React.Component {

    render() {

            return (
                <div className='cards-style'>
                     <h2>{this.props.newHero.name}</h2>
                        
            
                    <div className="image-style" style={{backgroundImage: 'url('+this.props.newHero.img+')'}}>
                        <div className="under-exp-bar"></div> 
                        <div className="exp-bar" style={{width: this.props.newHero.curEXP*100/this.props.newHero.maxEXP+"%"}}></div>
                        <div className="under-hp-bar"></div>
                        <div className="hp-bar" style={{width: this.props.newHero.curHP*100/this.props.newHero.maxHP+"%"}}></div>
                        <div className="under-mp-bar"></div>
                        <div className="mp-bar" style={{width: this.props.newHero.curMP*100/this.props.newHero.maxMP+"%"}}></div>
                        
                        
                        {/* <span className='exp'>Level: {this.props.newHero.lvl+1}</span> */}
                    
                        
                        
                    </div>
                    <div className="profile-btns">
                        <div className="profile clicked"><button>Hero</button></div>
                        <div className="character"><button>Character</button></div>
                    </div>   

                    {/* <div className='chars'>
                    <div className="lvl-bar">{this.props.newHero.lvl+1}</div>
                        <h3>{this.props.newHero.type}</h3>
                        <span className='hp'>{this.props.newHero.maxHP} / {this.props.newHero.curHP}</span><br/> 
                        <span className='mp'>{this.props.newHero.maxMP} / {this.props.newHero.curMP}</span>
                         <span> {this.props.newHero.curEXP} / {this.props.newHero.maxEXP}</span><br/>
                        <span className="char-right">Strength: {this.props.newHero.str}</span><br/>
                        <span className="char-right">Dexterity: {this.props.newHero.dex}</span><br/>
                        <span className="char-right">Constitution: {this.props.newHero.con}</span><br/>
                        <span className="char-right">Intellect: {this.props.newHero.int}</span><br/>
                        <span className="char-right">Wisdom: {this.props.newHero.wit}</span>
                    </div>  */}
                </div>
            )
    }
}