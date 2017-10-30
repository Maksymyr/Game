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
            <div className='cards-enemy-style'>
                <h2>{this.props.newEnemy.name}</h2>
                <h3>{this.props.newEnemy.type}</h3>
                <div>
                <img className="image-style" src={this.props.newEnemy.img} />
                    <span>Lvl: {this.props.newEnemy.lvl}</span><br/>
                    <span className='hp'>{this.props.newEnemy.maxHP} / {this.props.newEnemy.curHP}</span><br/> 
                    <span className='mp'>{this.props.newEnemy.maxMP} / {this.props.newEnemy.curMP}</span>
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