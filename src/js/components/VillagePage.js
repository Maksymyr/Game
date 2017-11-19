import React from 'react';
import {Link} from 'react-router-dom';

import Inventory from './Inventory.js';
import Sidebar from './Sidebar.js';
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
    constructor(props){
        super(props);
        this.state = { 
            images: [require("../../img/village.jpg"), require("../../img/village2.jpg"), require("../../img/village3.jpg")]
        }
    }
    levelUp = () => {
        this.props.changeForestLvl(1); 
    }
    render() {
        return (
            <div className="village">
                <div className="village-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+ this.state.images[Math.floor(Math.random()*3)]+')'}}>
                    <Sidebar />
                    <div className="left">
                        
                        <Hero/>
                    </div>
                    <div className="center">
 
                    </div>
                    <div className="right">
                        <div className="btns">
                            <Link className='hunt' to="/headman"><button>Headman</button></Link>
                            <Link className='hunt' to="/store"><button>Store</button></Link>                            
                            <Link className='hunt' to="/rest"><button>Rest</button></Link>
                            <Link className='hunt' to="/forest"><button onClick={this.levelUp}>Forest</button></Link>
                        </div>
                    </div>
                </div>
              
            </div>
        )
    }
}