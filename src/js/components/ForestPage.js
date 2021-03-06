import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeForestLvl, setEnemy, setPortal, heroMP} from '../actions';
import Sidebar from './Sidebar.js';

import * as mobs from '../constants/Mobs.js';
import Hero from '../logical_classes/Hero.js';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeForestLvl, setEnemy, setPortal, heroMP}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {forest: state.forest, hero: state.hero};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ForestPage extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            images: [require("../../img/forest2.jpg"), require("../../img/forest3.jpg")
            ,require("../../img/forest4.jpg"), require("../../img/forest5.jpg")]
        }
    }
    levelUp = () => {
        this.props.changeForestLvl(1);
        let rand = Math.floor(Math.random()*5);
        if(rand == 4) {
            this.addEnemy();
            this.props.history.push("/forest-battle");
        }
    }
    levelDown = () => {
        this.props.changeForestLvl(-1);
        let rand = Math.floor(Math.random()*5);
        if(rand == 4) {
            this.addEnemy;
            this.props.history.push("/forest-battle");
        }
    }
    addEnemy = () => {
        const shuffle = arr => arr.sort(() => Math.random() - 0.5);
        this.props.setEnemy(shuffle(mobs.mobs[this.props.forest-1])[0]);
        
    }
    portal = () => {
        if (this.props.hero.curMP >= Math.floor(this.props.hero.maxMP*0.1)) {
            this.props.heroMP(Math.floor(this.props.hero.maxMP*0.1));
            this.props.setPortal(this.props.forest)
            this.props.changeForestLvl(-this.props.forest);
        }
        else {
            alert ("No enough MP!")
        }
    }
    render() {
        return (
            <div className='forest'>
                <div className="forest-img" style={{height: "100%", width: "100%", backgroundImage: 'url(' + this.state.images[Math.floor(Math.random()*4)]+')'}}>
                    <Sidebar />
                    <div className="left">
                        <Hero/>
                    </div>
                    <div className="center">
                    </div>
                    <div className="right">
                        <div className="btns">
                            <p>Forest lvl: {this.props.forest}</p>
                            <Link className="hunt" to={"/forest-battle"}><button onClick={this.addEnemy}>Hunt</button></Link>
                            {this.props.hero.lvl+1 >= this.props.forest && this.props.forest < 10 ? <a className="deep"><button onClick={this.levelUp}>Go deeper in forest</button></a>  : null}
                            <Link className="goback" to={this.props.forest == 1 ? "/village" : "forest"}><button onClick={this.levelDown}>Go back</button></Link>
                            {this.props.hero.lvl >= 3 && this.props.forest > 3 ? this.props.hero.curMP >= Math.floor(this.props.hero.maxMP*0.1) 
                            ? <Link className='portal' to="/village"><button onClick={this.portal}>Portal to the village ({Math.floor(this.props.hero.maxMP*0.1)} MP)</button></Link> 
                            : <a className='portal-unworked'><button onClick={this.portal}>Portal to the village ({Math.floor(this.props.hero.maxMP*0.1)} MP)</button></a> 
                            : null}
                            
                        </div>
                    </div>
              </div>
            </div>
        )
    }
}