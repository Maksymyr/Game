import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../logical_classes/Hero.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeForestLvl} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeForestLvl}, dispatch);
}

@connect(null, mapDispatchToProps)
export default class VillagePage extends React.Component {
    levelUp = () => {
        this.props.changeForestLvl(1);
    }
    render() {
        return (
            <div className='village'>
                 <Hero/>
                <div className="menu-list">
                    <Link to="/store"><button>Store</button></Link>
                    <Link to="/headman"><button>Headman</button></Link>
                    <Link to="/forest"><button onClick={this.levelUp}>Forest</button></Link>
                </div>
              
            </div>
        )
    }
}