import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../logical_classes/Hero.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {heroHP, heroSTR, heroDEX, heroCON, heroINT, heroWIT} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({heroHP, heroSTR, heroDEX, heroCON, heroINT, heroWIT}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LevelUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            count: 0,
            str_up: false,
            dex_up: false,
            con_up: false,
            int_up: false,
            wit_up: false,
        }
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.submitting = this.submitting.bind(this);
    }
    plus(att) {
        if (this.state.count < 5) {
            this.refs[att].value = parseInt(this.refs[att].value) + 1;
            this.setState({count: this.state.count+1});
            this.setState({[att+"_up"]: true})
        }
        if (this.state.count == 4) {
            this.setState({checkbox: true})
        }
        console.log(this.state.count);
        
    }
    minus(att) {
        if (this.refs[att].value > this.props.hero[att]) {
            this.refs[att].value = parseInt(this.refs[att].value) - 1;
            this.setState({count: this.state.count-1})
        }
        if (this.refs[att].value == this.props.hero[att]) {
            this.setState({[att+"_up"]: false}) 
        }
        if (this.state.count <= 5) {
            this.setState({checkbox: false})
        }
    }
    submitting(){
        this.props.heroSTR(this.refs.str.value-this.props.hero.str);
        this.props.heroDEX(this.refs.dex.value-this.props.hero.dex);
        this.props.heroCON(this.refs.con.value-this.props.hero.con);
        this.props.heroINT(this.refs.int.value-this.props.hero.int);        
        this.props.heroWIT(this.refs.wit.value-this.props.hero.wit);  
        this.props.history.push("/forest");
    }
    render() {
        return (
           <div className="village">
                <img src={require('../../img/fire.jpg')}/>
                <div className="lvlup-list">
                    <h3>Congratulations! You get level {this.props.hero.lvl}!</h3>
                    <p>
                        <span>Strength</span><input ref="str" disabled defaultValue={this.props.hero.str}/>
                        {this.state.checkbox ? null : <button onClick={() => this.plus("str")}>+</button>}
                        {this.state.str_up ? <button onClick={() => this.minus("str")}>-</button> : null}
                    </p>
                    <p>
                        <span>Dexterity</span><input ref="dex" disabled defaultValue={this.props.hero.dex}/>
                        {this.state.checkbox ? null : <button onClick={() => this.plus("dex")}>+</button>}
                        {this.state.dex_up ? <button onClick={() => this.minus("dex")}>-</button> : null}
                    </p>
                    <p>
                        <span>Constitution</span><input ref="con" disabled defaultValue={this.props.hero.con}/>
                        {this.state.checkbox ? null : <button onClick={() => this.plus("con")}>+</button>}
                        {this.state.con_up ? <button onClick={() => this.minus("con")}>-</button> : null}
                    </p>
                    <p>
                        <span>Intellect</span><input ref="int" defaultValue={this.props.hero.int}/>
                        {this.state.checkbox ? null : <button onClick={() => this.plus("int")}>+</button>}
                        {this.state.int_up ? <button onClick={() => this.minus("int")}>-</button> : null}
                    </p>
                    <p>
                        <span>Wisdom</span><input ref="wit" disabled defaultValue={this.props.hero.wit}/>
                        {this.state.checkbox ? null : <button onClick={() => this.plus("wit")}>+</button>}
                        {this.state.wit_up ? <button onClick={() => this.minus("wit")}>-</button> : null}
                    </p>
                    {this.state.checkbox ? <button onClick={this.submitting}>Submit</button> : null}
                </div>
                
           </div>


        )
    }
}