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
export default class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            att_lvlup: false,
            lvlup: false,
            att_checkbox: true,
            checkbox: true,
            count: 0,
            att_count: 0,
            str_up: false,
            dex_up: false,
            con_up: false,
            int_up: false,
            wit_up: false,
            att1_up: false,
            att2_up: false,
            att3_up: false,
            att4_up: false,
            
        }
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.submitting = this.submitting.bind(this);
        this.att_plus = this.att_plus.bind(this);
        this.att_minus = this.att_minus.bind(this);
        this.att_submitting = this.att_submitting.bind(this);
    }
    componentWillMount() {
        if (this.props.hero.points >= 5) {
            this.setState({ lvlup: true, checkbox: false })
        }
        if (this.props.hero.att_points >= 1) {
            this.setState({ att_lvlup: true, att_checkbox: false })
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps != this.props) {
            this.refs.att.value = Math.floor(this.refs.str.value * (1 +parseInt(this.refs.att1.value)/100));
            this.refs.def.value = this.refs.con.value;
        } 
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
    att_plus(att) {
        if (this.state.att_count < 1) {
            this.refs[att].value = (parseInt(this.refs[att].value) + 10)+'%';
            this.setState({att_count: this.state.att_count+1});
            this.setState({[att+"_up"]: true})
        }
        if (this.state.att_count == 0) {
            this.setState({att_checkbox: true})
        }
 
        
    }
    att_minus(att) {
        if (parseInt(this.refs[att].value) > this.props.hero[att]) {
            this.refs[att].value = (parseInt(this.refs[att].value) - 10)+'%';
            this.setState({att_count: this.state.att_count-1})
        }
        if (parseInt(this.refs[att].value) == this.props.hero[att]) {
            this.setState({[att+"_up"]: false}) 
        }
        if (this.state.att_count <= 1) {
            this.setState({att_checkbox: false})
        }
    }
    submitting(){
        this.props.heroSTR(this.refs.str.value-this.props.hero.str);
        this.props.heroDEX(this.refs.dex.value-this.props.hero.dex);
        this.props.heroCON(this.refs.con.value-this.props.hero.con);
        this.props.heroINT(this.refs.int.value-this.props.hero.int);        
        this.props.heroWIT(this.refs.wit.value-this.props.hero.wit);  
        this.props.heroLvlPoints();
        if (this.props.hero.points > 5)
        this.setState({lvlup: true, count: 0, checkbox: false, str_up: false, dex_up: false, con_up: false, int_up: false, wit_up: false})
        else
        this.setState({lvlup: false, checkbox: true, str_up: false, dex_up: false, con_up: false, int_up: false, wit_up: false})
    }
    att_submitting(){
        this.props.heroAtt1(parseInt(this.refs.att1.value)/10-this.props.hero.att1);
        this.props.heroAtt2(parseInt(this.refs.att2.value)/10-this.props.hero.att2);
        this.props.heroAtt3(parseInt(this.refs.att3.value)/10-this.props.hero.att3);
        this.props.heroAtt4(parseInt(this.refs.att4.value)/10-this.props.hero.att4);        
        this.props.heroLvlAttPoints();
        if (this.props.hero.att_points > 1)
        this.setState({att_lvlup: true, att_count: 0, att_checkbox: false, att1_up: false, att2_up: false, att3_up: false, att4_up: false})
        else
        this.setState({att_lvlup: false, att_checkbox: true, att1_up: false, att2_up: false, att3_up: false, att4_up: false})
    }
    returning = () => {
        this.props.history.push("/");
    }
    render() {
        return (
           <div className="village">
                <div className="village-img" style={{ height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/levelup.jpg")+')'}}>
                    
                    <div className="char-window">
                        <div className="first">
                            <div className="fst-window">
                                <h3>{this.props.hero.name}</h3>
                                <div>
                                    <p>Level: {this.props.hero.lvl}</p>
                                    <p>Class: {this.props.hero.type}</p>
                                    <p>Experience: <span className="gold">{this.props.hero.curEXP}/{this.props.hero.maxEXP}</span></p>
                                </div>
                                <div>
                                    <p>Health: <span className="red">{this.props.hero.curHP}/{this.props.hero.maxHP}</span></p>
                                    <p>Mana: <span className="blue">{this.props.hero.curMP}/{this.props.hero.maxMP}</span></p>
                                    <p>Free points: <span className="white">{this.props.hero.points}</span></p>
                                </div>
                                
                            </div>
                            <div className="scd-window">
                                <div>
                                    <p>Strength : </p>
                                    <p>Dexterity : </p>
                                    <p>Intellect : </p>
                                    <p>Wisdom : </p>
                                    <p>Constitution : </p>
                                </div>
                                <div className="att-icons">
                                <p>
                                    {this.state.str_up ? <button className="min-icon" onClick={() => this.minus("str")}>-</button> : null}
                                    <input className="att-icon" ref="str" disabled defaultValue={this.props.hero.str}/>
                                    {this.state.checkbox ? null : <button onClick={() => this.plus("str")}>+</button>}
                                </p>
                                <p>
                                    {this.state.dex_up ? <button className="min-icon" onClick={() => this.minus("dex")}>-</button> : null}
                                    <input className="att-icon" ref="dex" disabled defaultValue={this.props.hero.dex}/>
                                    {this.state.checkbox ? null : <button onClick={() => this.plus("dex")}>+</button>}
                                </p>
                                <p>
                                    {this.state.int_up ? <button className="min-icon" onClick={() => this.minus("int")}>-</button> : null}
                                    <input className="att-icon" ref="int" defaultValue={this.props.hero.int}/>
                                    {this.state.checkbox ? null : <button onClick={() => this.plus("int")}>+</button>}
                                </p>
                                <p>
                                    {this.state.wit_up ? <button className="min-icon" onClick={() => this.minus("wit")}>-</button> : null}
                                    <input className="att-icon" ref="wit" disabled defaultValue={this.props.hero.wit}/>
                                    {this.state.checkbox ? null : <button onClick={() => this.plus("wit")}>+</button>}
                                </p>
                                <p>
                                    {this.state.con_up ? <button className="min-icon" onClick={() => this.minus("con")}>-</button> : null}
                                    <input className="att-icon" ref="con" disabled defaultValue={this.props.hero.con}/>
                                    {this.state.checkbox ? null : <button onClick={() => this.plus("con")}>+</button>}
                                </p>
                                </div>
                                {this.state.checkbox && this.state.lvlup ? <button className="submit-lvl" onClick={this.submitting}>Submit</button> : null}
                            </div>
                            <div className="trd-window">
                                <div>
                                    <p>Attack : </p>
                                    <p>Deffence : </p>
                                </div>
                                <div className="att-icons">
                                    <p>
                                        <input className="att-icon" ref="att" disabled defaultValue={
                                            
                                            Math.floor(this.props.hero.str * (1 +this.props.hero.att1*10/100)) 
                                            
                                        }/>
                                    </p>
                                    <p>
                                        <input className="att-icon" ref="def" disabled defaultValue={this.props.hero.con}/>
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div className="second">
                            <div className="frt-window">
                                <p className="skill-title">Skills : </p>
                                <div>
                                    <div style={{backgroundImage: 'url('+require("../../img/Skills/skill1war.jpg")+')'}}></div>
                                    <p>Skill #1 (lvl 0)</p>
                                    <p>Crushing blow: reinforced strike</p>
                                </div>
                                <div className={this.props.hero.lvl < 5 ? "closed-skill": null}>
                                    <div style={{backgroundImage: 'url('+require("../../img/Skills/skill2war.jpg")+')'}}></div>
                                    <p>Skill #2 (lvl 5)</p>
                                    <p>Stun: disorient opponent on 2-3 turn</p>
                                </div>
                                <div className={this.props.hero.lvl < 10 ? "closed-skill": null}>
                                    <div style={{backgroundImage: 'url('+require("../../img/Skills/skill3war.jpg")+')'}}></div>
                                    <p>Skill #3 (lvl 10)</p>
                                    <p>Vampirism: steal opponent's health</p>
                                </div>
                                 <div className={this.props.hero.lvl < 15 ? "closed-skill": null}> 
                                    <div style={{backgroundImage: 'url('+require("../../img/Skills/skill4war.jpg")+')'}}></div>
                                    <p>Skill #4 (lvl 15)</p>
                                    <p>Rage: increase all your parametrs</p>
                                </div>
                            </div>
                            <div className="fth-window">
                                <p className="att-title">Attainments : </p>
                                <div className="fth-div">
                                    <p>Weapon mastery : </p>
                                    <p>Armor mastery : </p>
                                    <p>Fortitude : </p>
                                    <p>Will : </p>
                                </div>
                                <div className="att-icons">
                                    <p>
                                        {this.state.att1_up ? <button className="min-icon" onClick={() => this.att_minus("att1")}>-</button> : null}
                                        <input className="att-icon" ref="att1" disabled defaultValue={this.props.hero.att1*10 + "%"}/>
                                        {this.state.att_checkbox  ? null : <button onClick={() => this.att_plus("att1")}>+</button>}
                                    </p>
                                    <p>
                                        {this.state.att2_up ? <button className="min-icon" onClick={() => this.att_minus("att2")}>-</button> : null}
                                        <input className="att-icon" ref="att2" disabled defaultValue={this.props.hero.att2*10 + "%"}/>
                                        {this.state.att_checkbox  ? null : <button onClick={() => this.att_plus("att2")}>+</button>}
                                    </p>
                                    <p>
                                        {this.state.att3_up ? <button className="min-icon" onClick={() => this.att_minus("att3")}>-</button> : null}
                                        <input className="att-icon" ref="att3" disabled defaultValue={this.props.hero.att3*10 + "%"}/>
                                        {this.state.att_checkbox  ? null : <button onClick={() => this.att_plus("att3")}>+</button>}
                                    </p>
                                    <p>
                                        {this.state.att4_up ? <button className="min-icon" onClick={() => this.att_minus("att4")}>-</button> : null}
                                        <input className="att-icon" ref="att4" disabled defaultValue={this.props.hero.att4*10 + "%"}/>
                                        {this.state.att_checkbox ? null : <button onClick={() => this.att_plus("att4")}>+</button>}
                                    </p>
                                </div>
                                {this.state.att_checkbox && this.state.att_lvlup ? <button className="submit-lvl" onClick={this.att_submitting}>Submit</button> : null}
                                
                            </div>
                        </div> 
                        <div className="menu-list">
                        
                            <Link to="/"><div className="menu-img" style={{height: "25%", width: "100%", backgroundImage: 'url('+ require("../../img/back.png")+')'}}></div></Link>
                            <Link to="/inventory"><div className="menu-img" style={{height: "25%", width: "100%", backgroundImage: 'url('+ require("../../img/inventory.png")+')'}}></div></Link>
                            <Link to="/achivments"><div className="menu-img" style={{height: "25%", width: "100%", backgroundImage: 'url('+ require("../../img/achiv.png")+')'}}></div></Link>
                            <Link to="/settings"><div className="menu-img" style={{height: "25%", width: "100%", backgroundImage: 'url('+ require("../../img/settings.png")+')'}}></div></Link>
           
                        </div>
                    </div>
                   
                    
                </div>
           </div>
        )
    }
}