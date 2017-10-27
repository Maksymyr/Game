import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {newHero: state.hero.hero}
}

@connect(mapStateToProps)
export default class Hero extends React.Component {

    render() {
        console.log(this.props.newHero);
            return (
                <div className='cards-style'>
                    <h2>{this.props.newHero.name}</h2>
                    <h3>{this.props.newHero.type}</h3>
                    <div className='image-style'>
            {/* <img src = {this.props.newHero.img}/> */} 
                        <span>Lvl: {this.props.newHero.lvl}</span><span className='exp'> Exp: {this.props.newHero.exp}</span><br/>
                        <span className='hp'>HP: {this.props.newHero.con*10}</span><br/> 
                        <span className='mp'>MP: {this.props.newHero.wit*10}</span>
                    </div>
                    <div className='win-wrap'>
                        <span className='char-left'>Str: {this.props.newHero.str}</span><span className='char-right'>Int: {this.props.newHero.int}</span><br/>
                        <span className='char-left'>Dex: {this.props.newHero.dex}</span><span className='char-right'>Wit: {this.props.newHero.wit}</span><br/>
                        <span className='char-bot'>Con: {this.props.newHero.con}</span> 
                    </div>
                </div>
            )
    }
}