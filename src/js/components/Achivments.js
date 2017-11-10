import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../logical_classes/Hero.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroHP, heroSTR, heroDEX, heroCON, heroINT, heroWIT, heroLvlPoints,
heroAtt1, heroAtt2, heroAtt3, heroAtt4, heroLvlAttPoints} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({heroHP, heroSTR, heroDEX, heroCON, heroINT, heroWIT, heroLvlPoints,
        heroAtt1, heroAtt2, heroAtt3, heroAtt4, heroLvlAttPoints}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Achivments extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }

    }
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps){

    }



    returning = () => {
        this.props.history.push("/");
    }
    render() {
        return (
           <div className="village">
                <div className="village-img" style={{ height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/levelup.jpg")+')'}}>
                    
                    <div className="char-window">

                        <div className="menu-list">
                        
                            <Link to="/"><div className="menu-img" style={{height: "25%", width: "100%", backgroundImage: 'url('+ require("../../img/back.png")+')'}}></div></Link>
                            <Link to="/inventory"><div className="menu-img" style={{height: "25%", width: "100%", backgroundImage: 'url('+ require("../../img/inventory.png")+')'}}></div></Link>
                            <Link to="/character"><div className="menu-img" style={{height: "25%", width: "100%", backgroundImage: 'url('+ require("../../img/skills.png")+')'}}></div></Link>
                            <Link to="/settings"><div className="menu-img" style={{height: "25%", width: "100%", backgroundImage: 'url('+ require("../../img/settings.png")+')'}}></div></Link>
           
                        </div>
                    </div>
                   
                    
                </div>
           </div>
        )
    }
}