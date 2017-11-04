import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../logical_classes/Hero.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroHP, heroMP} from '../actions';
import Sidebar from './Sidebar.js';

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
        this.resting = this.resting.bind(this);
    }
    resting() {
        this.setState({checkbox: !this.state.checkbox});
        let resttime;

            resttime = setInterval(() => {
                (this.props.hero.curHP < this.props.hero.maxHP) && this.state.checkbox ? this.props.heroHP(-1): (this.props.hero.curMP < this.props.hero.maxMP) && this.state.checkbox ? null : clearInterval(resttime),
                (this.props.hero.curMP < this.props.hero.maxMP) && this.state.checkbox ? this.props.heroMP(-1): (this.props.hero.curHP < this.props.hero.maxHP) && this.state.checkbox ? null : clearInterval(resttime)
            }, 2000)

    
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
                            <a className="torest"><button onClick={this.resting}>{this.state.checkbox ? "Awake" : "Sleep"}</button></a>
                            {this.state.checkbox ? null : <Link className="inforest" to="/village"><button>Back</button></Link> }
                        </div>
                    </div>
                </div>
           </div>


        )
    }
}