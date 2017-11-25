import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import * as choosenTypes from '../constants/StarterSets';
import {addHeroName, loadGame} from '../actions';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router';


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addHeroName, loadGame }, dispatch);
}

@withRouter
@connect(null, mapDispatchToProps)
export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: false
        }
    }
    setName = (event) => {  
        if (this.refs.regName.value.trim() != "" && this.refs.regPassword.value != "") {
            if(this.refs.regPassword.value == this.refs.regPasswordCheck.value) {
                var data = {name: this.refs.regName.value.trim(), 
                    password: this.refs.regPassword.value}
                var checkbox = false;
                fetch('/registration', {
                    method: "POST",
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(data)
                    }).then(function(response) {  
                        return response.text();  
                    }).then(function(text) {  
                        if(text == "1"){
                            alert("That nickname already exists!")
                        }
                        else {
                            checkbox = true;
                        } 
                    }).catch((err) => {console.log(err)})
                setTimeout(() => {
                    if (checkbox) {
                        this.props.addHeroName(data.name);
                        this.props.history.push("/start"); 
                        
                    }
                }, 500)
            }
            else {
                alert("Passwords do not match!");
            }
        }
        else {
            alert("Fill all entry fields please!");
        }
        event.preventDefault();
    }
    logIn = (event) => {
        if (this.refs.name.value.trim() != "" && this.refs.password.value != "") {
            var data = {name: this.refs.name.value.trim(), 
                password: this.refs.password.value}
            var checkbox = false;
            var getData = {};
            fetch('/login', {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(data)
                }).then(function(response) {  
                    return response.text();  
                }).then(function(text) {  
                    if(text == "1"){
                        alert("There is no such player!")
                    }
                    else if(text == "3") {
                        alert("Wrong password!")
                    }
                    else {
                        console.log('Request successful', text);
                        getData = JSON.parse(text);
                        checkbox = true;
                    } 
                }).catch((err) => {console.log(err)})
            setTimeout(() => {
                if (checkbox) {
                    this.props.loadGame(getData);
                    // setTimeout(() => {
                        this.props.history.push("/village"); 
                    // },500)
                    
                }
            }, 500)            
        }
        else {
            alert("Fill all entry fields please!");
        }
        event.preventDefault();
    }
    registration = () => {
        this.setState({ newUser: !this.state.newUser})
    }
    render() {    
        return (
            <div className='start-menu'> 
                 <div className="name-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/font_starter.jpg")+')'}}>
                    <div className="left">
                    </div>
                    <div className="center">
                        <div className="registration-btns"> 
                            <p className="start-p">{this.state.newUser ? "Registration:" : "Enter the game"}</p>
                            {this.state.newUser ? 
                            <form>
                                <label>Login:<input className="start-name-inp" ref="regName" type="text" placeholder="Name"/></label><br/>
                                <label>Password:<input className="start-name-inp" ref="regPassword" type="password" placeholder="Password"/></label><br/>
                                <label>Repeat:<input className="start-name-inp" ref="regPasswordCheck" type="password" placeholder="Password"/></label><br/>
                                <button onClick={this.setName}>Registrate</button>
                            </form> :
                            <form>
                                <label>Login:<input className="start-name-inp" ref="name" type="text" placeholder="Name"/></label><br/>
                                <label>Password:<input className="start-name-inp" ref="password" type="password" placeholder="Password"/></label><br/>                              
                                <button onClick={this.logIn}>Enter</button>
                            </form>}
                                <div className="enter-name"><button onClick={this.registration}>{this.state.newUser ? "Back" : "New user"}</button></div>
                        </div>
                    </div>
                    <div className="right">
                    </div>
                </div>
            </div>

        )

    }

}