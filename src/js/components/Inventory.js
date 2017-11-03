import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as choosenTypes from '../constants/StarterSets';
import {addHeroType} from '../actions';
import {bindActionCreators} from 'redux';


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addHeroType }, dispatch);
}

@connect(null, mapDispatchToProps)
export default class Inventory extends React.Component {
  
    render() {
        return (
            <div className='menu'>  
                <div className="name-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/class_chouse.jpg")+')'}}>
                    <div className="left">
                    </div>
                    <div className="center">
                        <div className="btns"> 
                            <p>Choose your class:</p>
                            <Link className="enter-name" to='/village'><button onClick={() => this.setClass("Warrior")}>Warrior</button></Link>
                            <Link className="enter-name" to='/village'><button onClick={() => this.setClass("Archer")}>Archer</button></Link>
                            <Link className="enter-name" to='/village'><button onClick={() => this.setClass("Wizard")}>Wizard</button></Link>
                        </div>
                    </div>
                    <div className="right">
                    </div>
                </div>

            </div>

        )

    }

}