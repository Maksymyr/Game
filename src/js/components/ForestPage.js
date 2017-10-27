import React from 'react';
import {Link} from 'react-router-dom';

import * as types from '../constants/RoadWay.js'
import Hero from '../logical_classes/Hero.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeForestLvl} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeForestLvl}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return state;
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ForestPage extends React.Component {
    levelUp = () => {
        this.props.changeForestLvl(1);
    }
    levelDown = () => {
        this.props.changeForestLvl(-1);
    }
    render() {
        // const shuffle = arr => arr.sort(() => Math.random() - 0.5);
        // let rand = shuffle(types.road);

        // console.log(rand);
        return (
            <div className='village'>
                 <Hero/>
                <div className="menu-list">
                    <Link to={"/forest-battle"}><button>Hunt</button></Link>
                    <Link to={"/forest-lvl1"}><button onClick={this.levelUp}>Go deeper in forest</button></Link>
                    <Link to={"/village"}><button onClick={this.levelDown}>Go back</button></Link>
                </div>
              
            </div>
        )
    }
}