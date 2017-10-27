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
        this.props.addHeroName({name: this.refs.name.value.trim()});
    }
    
    render() {
        return (
            <div className='start-btns'>  
                <p>Enter your name:</p>
                <input ref="name" type="text" placeholder="name"/>
                <Link to='/start'><button onClick={() => this.setName()}>Submit</button></Link>
            </div>

        )

    }

}