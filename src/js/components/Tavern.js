import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as choosenTypes from '../constants/StarterSets';
import {enemyKilled} from '../actions';
import {bindActionCreators} from 'redux';



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ enemyKilled}, dispatch);
}

@connect(null, mapDispatchToProps)
export default class Settings extends React.Component {
    returning = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div className='menu'>  
                <div className="name-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/tavern.jpg")+')'}}>
                    <div className="left">
                    </div>
                    <div className="center">
                        <div className="btns"> 
                        <p>Settings:</p>
                            <div className="enter-name">
                                
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