import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Slot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }

    }

    render() {
        console.log(this.props.item)
        return (
           <div className="inv-slot">
                <div className="inv-img" style={ this.props.item ? { height: "100%", width: "100%", backgroundImage: 'url('+this.props.item.img+')'} : null }>
                    {/* <p>{this.props.item ? this.props.item.name : null}</p> */}
                </div>
                 
           </div>
        )
    }
}