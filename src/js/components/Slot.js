import React from 'react';
import {Link} from 'react-router-dom';
import Info from './Info';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useItem} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({useItem}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Slot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            checkbox: false,
            borderUsed: false
        }

    }
    handleEnter = () => {

        this.setState({checkbox: true})

    }
    handleLeave = () => {       
        this.setState({checkbox: false})
    
    }
    handleUse = () => {
        if (this.props.hero.type == this.props.item.class || this.props.item.class == "none") {
            this.props.useItem(this.props.item);
        }
    }
    render() {

        return (
           <div className="inv-slot" onClick={this.handleUse} onMouseEnter={this.props.item ? this.handleEnter : null} onMouseLeave={this.props.item ? this.handleLeave : null}>
                <div className="inv-img" style={ this.props.item ? { height: "100%", width: "100%", backgroundImage: 'url('+this.props.item.img+')'} : null }>
                    {this.state.checkbox ? <Info>{this.props.item ? this.props.item.name : null}</Info> : null}
                    <p>{this.props.item ? this.props.item.quantity : null}</p>
                </div>
               
           </div>
        )
    }
}