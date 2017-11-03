import React from 'react';
import {Link} from 'react-router-dom';

import Inventory from './Inventory.js';
import Hero from '../logical_classes/Hero.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroHP, changeForestLvl} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({heroHP, changeForestLvl}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class VillagePage extends React.Component {

    levelUp = () => {
        this.props.changeForestLvl(1); 
    }
    render() {
        return (
            <div className="village">
                <div className="village-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/village2.jpg")+')'}}>
                    <div className="left">
                        <div></div>
                        <Hero/>
                    </div>
                    <div className="center">
 
                    </div>
                    <div className="right">
                        <div className="btns">
                            {/* <Link to="/store"><button>Store</button></Link>
                            <Link to="/headman"><button>Headman</button></Link> */}
                            <Link className='torest' to="/rest"><button>Rest</button></Link>
                            <Link className='inforest' to="/forest"><button onClick={this.levelUp}>Forest</button></Link>
                        </div>
                    </div>
                </div>
              
            </div>
        )
    }
}