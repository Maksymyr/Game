import React from 'react';
import {Link} from 'react-router-dom';

import Inventory from './Inventory.js';
import Sidebar from './Sidebar.js';
import Hero from '../logical_classes/Hero.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroHP, changeForestLvl, setPortal} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({heroHP, changeForestLvl, setPortal}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero, portal: state.portal}
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
    portal = () => {
        this.props.changeForestLvl(this.props.portal); 
        this.props.setPortal(0);
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
                            <Link className='hunt' to="/tavern"><button>Tavern</button></Link>
                            <Link className='hunt' to="/store"><button>Store</button></Link>                            
                            <Link className='hunt' to="/rest"><button>Rest</button></Link>
                            <Link className='hunt' to="/forest"><button onClick={this.levelUp}>Forest</button></Link>
                            {this.props.hero.lvl >= 3 && this.props.portal > 0 ? 
                            <Link className='hunt' to="/forest"><button onClick={this.portal}>Portal to {this.props.portal} lvl</button></Link> : null}
                            
                        </div>
                    </div>
                </div>
              
            </div>
        )
    }
}