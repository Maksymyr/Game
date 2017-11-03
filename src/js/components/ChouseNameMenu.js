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
export default class ChouseNameMenu extends React.Component {

    setName = () => {  
        this.props.addHeroName({name: this.refs.name.value.trim().charAt(0).toUpperCase() + this.refs.name.value.trim().substr(1).toLowerCase()
        });
    }
    
    render() {
        return (
            <div className='start-menu'> 
                 <div className="name-img" style={{height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/font_starter.jpg")+')'}}>
                    <div className="left">
                    </div>
                    <div className="center">
                        <div className="btns"> 
                            <p className="start-p">Enter your name:</p>
                            <input className="start-name-inp" ref="name" type="text" placeholder="Name"/>
                            <Link className="enter-name" to='/start'><button onClick={() => this.setName()}>Submit</button></Link>
                        </div>
                    </div>
                    <div className="right">
                    </div>
                </div>
            </div>

        )

    }

}