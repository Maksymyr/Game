import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as choosenTypes from '../constants/StarterSets';
import {enemyKilled, addHeroName, setForestLvl, delInventory, saveGame, restartGame} from '../actions';
import {bindActionCreators} from 'redux';
import Sidebar from './Sidebar.js';
import { setTimeout } from 'timers';


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ enemyKilled, addHeroName, setForestLvl, delInventory, saveGame, restartGame}, dispatch);
}

@connect(null, mapDispatchToProps)
export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkout: true
        }
    }
    handleReturn = () => {
        this.props.history.push("/");
    }
    handleRestart = () => {
        this.props.restartGame();
        this.props.addHeroName(undefined);
        this.props.setForestLvl(0);
        this.props.enemyKilled();
        this.props.delInventory();
        localStorage.clear();
        this.props.history.push("/");
    }
    handleExit = () => {
        this.props.addHeroName(undefined);
        this.props.setForestLvl(0);
        this.props.enemyKilled();
        this.props.delInventory();
        localStorage.clear();
        this.props.history.push("/");
    }
    handleSave = () => {
        
        if (this.state.checkout) {
            console.log("saved")
            this.setState({checkout: false})
            this.props.saveGame();
            setTimeout(()=>{
                this.setState({checkout: true})
            }, 5000)
        }


    }
    render() {
        return (
            <div className='menu'>  
                <div className="name-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/class_chouse.jpg")+')'}}>
                    <div className="left">
                    </div>
                    <div className="center">
                        <div className="btns"> 
                        <p>Settings:</p>
                            <div className="enter-name">
                                <button onClick={this.handleReturn}>Back</button>
                                <button onClick={this.handleSave}>Save game</button>
                                <button onClick={this.handleRestart}>Restart</button>
                                <button onClick={this.handleExit}>Exit</button>
                            </div>
                        </div> 
                    </div>
                    
                    <div className="right">
 
                    </div>
                </div>

            </div>

        )

    }

}