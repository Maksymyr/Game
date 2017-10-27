import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {newEnemy: state.hero.hero}
}

@connect(mapStateToProps)
export default class Enemy extends React.Component {

    render() {
        console.log(this.props.newHero);
            return (
                <div className='cards-style'>
                    <h2>{this.props.newEnemy.name}</h2>
                    <h3>{this.props.newEnemy.type}</h3>
                    <div className='image-style'>
            {/* <img src = {this.props.newHero.img}/> */} 
                        <span>Lvl: {this.props.newEnemy.lvl}</span><br/>
                        <span className='hp'>HP: {this.props.newEnemy.con*10}</span><br/> 
                        <span className='mp'>MP: {this.props.newEnemy.wit*10}</span>
                    </div>
                    <div className='win-wrap'>
                        <span className='char-left'>Str: {this.props.newEnemy.str}</span><span className='char-right'>Int: {this.props.newEnemy.int}</span><br/>
                        <span className='char-left'>Dex: {this.props.newEnemy.dex}</span><span className='char-right'>Wit: {this.props.newEnemy.wit}</span><br/>
                        <span className='char-bot'>Con: {this.props.newEnemy.con}</span> 
                    </div>
                </div>
            )
    }
}