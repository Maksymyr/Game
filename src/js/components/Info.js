import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNotify} from '../actions';

const mapStateToProps = (state, ownProps) => {
    return { notify: state.notify }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addNotify}, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Info extends Component {
    render() {
        return (
            <div className="info">
                <p>{this.props.children}</p>
            </div>
        )
    }
}

