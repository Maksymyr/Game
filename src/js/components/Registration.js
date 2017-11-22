import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import * as choosenTypes from '../constants/StarterSets';
import {addHeroName} from '../actions';
import {bindActionCreators} from 'redux';


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addHeroName }, dispatch);
}

@connect(null, mapDispatchToProps)
export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: false
        }
    }
    setName = () => {  
        this.props.addHeroName({name: this.refs.name.value.trim().charAt(0).toUpperCase() + this.refs.name.value.trim().substr(1).toLowerCase(), password: this.refs.password.value});
        console.log(this.refs.name.value.trim().charAt(0).toUpperCase() + this.refs.name.value.trim().substr(1).toLowerCase())
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
                                <label>Login:<input className="start-name-inp" ref="name" type="text" placeholder="Name"/></label><br/>
                                <label>Password:<input className="start-name-inp" ref="password" type="text" placeholder="Password"/></label><br/>
                                <label>Repeat:<input className="start-name-inp" ref="passwordCheck" type="text" placeholder="Password"/></label><br/>
                                <Link className="enter-name" to='/start'><button onClick={() => this.setName()}>Registrate</button></Link>
                            </form> :
                            <form>
                                <label>Login:<input className="start-name-inp" ref="name" type="text" placeholder="Name"/></label><br/>
                                <label>Password:<input className="start-name-inp" ref="password" type="text" placeholder="Password"/></label><br/>                              
                                <Link className="enter-name" to='/start'><button onClick={() => this.setName()}>Enter</button></Link>
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