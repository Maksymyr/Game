import React from 'react';
import {Link} from 'react-router-dom';
import Slot from './Slot.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItemToInventory, removeItemFromInventory} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addItemToInventory, removeItemFromInventory}, dispatch);
}
const mapStateToProps = (state, ownProps) => {
    return {hero: state.hero, inventory: state.inventory}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps){

    }
    inventoryFill() {
        let arr = [];
        for (let i = 0; i < 80; i++){  
            let a = <Slot key={i} item={this.props.inventory[i]} index={i} />;
            arr.push(a);
        }

        return arr
    }
    storeFill() {
        let arr = [];
        for (let i = 0; i < 80; i++){  
            let a = <Slot key={i} index={i} />;
            arr.push(a);
        }

        return arr
    }
    tradeFill() {
        let arr = [];
        for (let i = 0; i < 20; i++){  
            let a = <Slot key={i} index={i} />;
            arr.push(a);
        }

        return arr
    }

    returning = () => {
        this.props.history.push("/");
    }
    render() {
        return (
           <div className="village">
                <div className="village-img" style={{ height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/levelup.jpg")+')'}}>
                    
                    <div className="char-window">
                        <div className="shop-title"><p><span>STORE</span></p></div>
                        <div className="menu-list-shop">
                        
                            <Link to="/"><div className="menu-img" style={{height: "20%", width: "100%", backgroundImage: 'url('+ require("../../img/back.png")+')'}}></div></Link>
                            <Link to="/inventory"><div className="menu-img" style={{height: "20%", width: "100%", backgroundImage: 'url('+ require("../../img/inventory.png")+')'}}></div></Link>
                            <Link to="/character"><div className="menu-img" style={{height: "20%", width: "100%", backgroundImage: 'url('+ require("../../img/skills.png")+')'}}></div></Link>
                            <Link to="/achivments"><div className="menu-img" style={{height: "20%", width: "100%", backgroundImage: 'url('+ require("../../img/achiv.png")+')'}}></div></Link>
                            <Link to="/settings"><div className="menu-img" style={{height: "20%", width: "100%", backgroundImage: 'url('+ require("../../img/settings.png")+')'}}></div></Link>
           
                        </div>
                        <div className="inventory-shop">
                            {this.storeFill()} 
                        </div>
                        <div className="trade-plate">
                            {this.tradeFill()} 
                        </div>
                        <div className="inventory-shop">
                            {this.inventoryFill()} 
                        </div>
                       
                    </div>
                   
                    
                </div>
           </div>
        )
    }
}