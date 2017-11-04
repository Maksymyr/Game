import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as choosenTypes from '../constants/StarterSets';
import {addHeroType} from '../actions';
import {bindActionCreators} from 'redux';
import Sidebar from './Sidebar.js';


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addHeroType }, dispatch);
}

@connect(null, mapDispatchToProps)
export default class Settings extends React.Component {
    returning = () => {
        this.props.history.push("/");
    }
    restarting = () => {
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
                    </div>
                    <div className="right">
                 
                    <button onClick={this.returning}>Back</button>
                    <button onClick={this.restarting}>Restart</button>
                    </div>
                </div>

            </div>

        )

    }

}