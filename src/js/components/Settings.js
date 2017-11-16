import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as choosenTypes from '../constants/StarterSets';
import {enemyKilled, addHeroName, setForestLvl, delInventory} from '../actions';
import {bindActionCreators} from 'redux';
import Sidebar from './Sidebar.js';


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ enemyKilled, addHeroName, setForestLvl, delInventory}, dispatch);
}

@connect(null, mapDispatchToProps)
export default class Settings extends React.Component {
    returning = () => {
        this.props.history.push("/");
    }
    restarting = () => {
        this.props.addHeroName(undefined);
        this.props.setForestLvl(0);
        this.props.enemyKilled();
        this.props.delInventory();
        localStorage.clear();
        this.props.history.push("/");
    }
    render() {
        return (
            <div className='menu'>  
                <div className="name-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/class_chouse.jpg")+')'}}>
                    {/* <Sidebar /> */}
                    <div className="left">
                    </div>
                    <div className="center">
                        <div className="btns"> 
                        <p>Settings:</p>
                            <div className="enter-name">
                                <button onClick={this.restarting}>Restart</button>
                                <button onClick={this.returning}>Back</button>
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