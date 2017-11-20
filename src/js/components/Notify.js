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
export default class Notify extends Component {
    handleClose = () => {
        this.props.addNotify({});
    }
    render() {
        // console.log(this.props.notify);
        {
            // if (this.props.notify.name == undefined )
                return null 
            // else { 
            //     // setTimeout(() => {this.props.addNotify("")}, 1500)
            //     return (
            //         <div className="notify-font">
            //             <div className="notify">
            //                 <div className="border-notify">
            //                     <p>{this.props.notify.name}</p>
            //                     <div className="image-notify" style={{backgroundImage: 'url('+this.props.notify.img+')'}}>
            //                     </div>
            //                     <p>Type : {this.props.notify.category}</p>
            //                     {this.props.notify.type != "money" ?<p>Class : {this.props.notify.class}</p> : null}
            //                     {this.props.notify.category == "armor" ? <p>Deffence : +{this.props.notify.def}%</p>: 
            //                     this.props.notify.category == "weapon" ? <p>Attack : +{this.props.notify.atck}%</p> : null}
            //                     <p>Price : {this.props.notify.price} gold</p>
            //                     <button onClick={this.handleClose}>x</button>
            //                 </div>
            //             </div>
            //         </div>
            //     )
            // }
        }
    }
}
