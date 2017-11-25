import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../logical_classes/Hero.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroHP, heroMP, saveGame} from '../actions';
import Sidebar from './Sidebar.js';
import { setTimeout } from 'timers';

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
        this.handleBack = this.handleBack.bind(this);
        this.sleep = this.sleep.bind(this);
        
        
    }
    handleSleep() {
        this.setState({checkbox: !this.state.checkbox});
        
        if (!this.state.checkbox) {
            this.sleep(true);
            console.log("zzz");
        }
        else {
            this.sleep(false);
        }
    }
    sleep(bool) {
        if (bool) {
            
            this.props.heroHP(-this.props.hero.lvl)
            this.props.heroMP(-this.props.hero.lvl)
            setTimeout(()=>{
                if (this.props.hero.curHP < this.props.hero.maxHP || this.props.hero.curMP < this.props.hero.maxMP) {
                    this.sleep(true);
                } 
                else  {
                    this.handleBack();
                }
            },1000)
        }
        // (this.props.hero.curHP < this.props.hero.maxHP) && this.state.checkbox ? this.props.heroHP(-this.props.hero.lvl-3): (this.props.hero.curMP < this.props.hero.maxMP) && this.state.checkbox ? null : clearInterval(resttime),
        // (this.props.hero.curMP < this.props.hero.maxMP) && this.state.checkbox ? this.props.heroMP(-this.props.hero.lvl-3): (this.props.hero.curHP < this.props.hero.maxHP) && this.state.checkbox ? null : clearInterval(resttime)
    }
    handleBack() {
        this.setState({checkbox: false});
        this.sleep(false);
    }

    
    render() {
        return (
           <div className="village">
               <div className="village-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/fire.jpg")+')'}}>
                    <Sidebar />
                    <div className="left">
                        <Hero/>
                    </div>
                    <div className="center">
                    </div>
                    <div className="right">
                        <div className="btns">
                            <a className="torest"><button onClick={this.handleSleep}>{this.state.checkbox ? "Awake" : "Sleep"}</button></a>
                            {this.state.checkbox ? null : <Link className="inforest" to="/village"><button onClick={this.handleBack}>Back</button></Link> }
                        </div>
                    </div>
                </div>
           </div>


        )
    }
}