import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../logical_classes/Hero.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroHP, heroMP, saveGame} from '../actions';
import Sidebar from './Sidebar.js';
import { setTimeout, clearTimeout } from 'timers';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({heroHP, heroMP}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Rest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false
        }
        this.handleSleep = this.handleSleep.bind(this);
    }
    handleSleep() {
        this.setState({checkbox: true});
        let timerr = setInterval(()=>{
        this.props.heroHP(-this.props.hero.lvl-3)
        this.props.heroMP(-this.props.hero.lvl-3)
            if (this.props.hero.curHP >= this.props.hero.maxHP*(this.props.hero.att3+100)/100 && this.props.hero.curMP >= this.props.hero.maxMP*(this.props.hero.att4+100)/100){
                clearInterval(timerr);
                this.setState({checkbox: false});
            }
        },1000)
    }
    render() {
        return (
           <div className="village">
               <div className="village-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/fire.jpg")+')'}}>
                {this.state.checkbox ? null : <Sidebar />}
                    <div className="left">
                        <Hero/>
                    </div>
                    <div className="center">
                    </div>
                    <div className="right">
                        <div className="btns">
                            <a className="torest">{this.state.checkbox ? null : <button onClick={this.handleSleep}>Sleep</button>}</a>
                            {this.state.checkbox ? null : <Link className="inforest" to="/village"><button>Back</button></Link> }
                        </div>
                    </div>
                </div>
           </div>


        )
    }
}