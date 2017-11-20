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
    return {hero: state.hero, inventory: state.inventory, shop: state.shop}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            goodsNS: [], 
            goodsS: [], 
            inventory: this.props.inventory.map((item, index)=> {
                return {...item, tradecheck: false}  
            }),
            shop: this.props.shop.map((item, index)=> {
                return {...item, tradecheck: false}  
            }),
        }
    }
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps){

    }
    inventoryFill() {
        let arr = [];
        for (let i = 0; i < 80; i++){  
            let a = <Slot key={i} item={this.state.inventory[i]} index={i} move={this.moveGoodsFromInventary}/>;
            arr.push(a);
        }

        return arr
    }
    storeFill() {
        let arr = [];
        for (let i = 0; i < 80; i++){  
            let a = <Slot key={i} index={i} item={this.state.shop[i]} move={this.moveGoodsFromShop}/>;
            arr.push(a);
        }

        return arr
    }
    tradeFill() {
        let arr = [];
        for (let i = 0; i < 20; i++){  
            
            let a = <Slot key={i} index={i} item={this.state.goodsNS[i]} backToInventary={this.moveGoodsBackToInventary}/>;
            arr.push(a);
        }

        return arr
    }
    tradeFillShop () {
        let arr = [];
        for (let i = 0; i < 20; i++){  
            
            let a = <Slot key={i} index={i} item={this.state.goodsS[i]} backToShop={this.moveGoodsBackToShop}/>;
            arr.push(a);
        }

        return arr
    }
    moveGoodsBackToShop = (item) => {

    }
    moveGoodsBackToInventary = (item) => {
        let arrayCheck = this.state.inventory.filter(arrItem => {
            if (arrItem.name == item.name)
                return true
        })
        if (arrayCheck[0]) {
            this.setState({inventory: this.state.inventory.map(arrItem => {
                if (item.name == arrItem.name) {
                    return {...arrItem, quantity: arrItem.quantity+1} 
                }
                else return arrItem
                })
            })
            if (item.quantity > 1) {
                this.setState({goodsNS: this.state.goodsNS.map(arrItem => {
                    if (item.name == arrItem.name) {
                        return {...arrItem, quantity: arrItem.quantity-1} 
                    }
                    else return arrItem
                    })
                })
            }
            else {
                this.setState({goodsNS: this.state.goodsNS.filter(arrItem => item.name != arrItem.name)})
            }
            
        }
        else {
            if (item.quantity > 1) {
  
                    this.setState({inventory: [...this.state.inventory, {...item, quantity: 1, tradecheck: false}]});
                    this.setState({goodsNS: this.state.goodsNS.map(arrItem => {
                        if (item.name == arrItem.name) {
                            return {...arrItem, quantity: arrItem.quantity-1} 
                        }
                        else return arrItem
                    })
                })
                
            }
            else {
            this.setState({inventory: [...this.state.inventory, {...item, tradecheck: false}]});
            this.setState({goodsNS: this.state.goodsNS.filter(arrItem => item.name != arrItem.name)})
            }
        }
    }
    moveGoodsFromShop = (item) => {
        let arrayCheck = this.state.goodsS.filter(arrItem => {
            if (arrItem.name == item.name)
                return true
        })
        if (arrayCheck[0]) {
            this.setState({goodsS: this.state.goodsS.map(arrItem => {
                if (item.name == arrItem.name) {
                    return {...arrItem, quantity: arrItem.quantity+1} 
                }
                else return arrItem
                })
            })
            if (item.quantity > 1) {
                this.setState({shop: this.state.shop.map(arrItem => {
                    if (item.name == arrItem.name) {
                        return {...arrItem, quantity: arrItem.quantity-1} 
                    }
                    else return arrItem
                    })
                })
            }
            else {
                this.setState({shop: this.state.shop.filter(arrItem => item.name != arrItem.name)})
            }
            
        }
        else {
            if (item.quantity > 1) {
  
                    this.setState({goodsS: [...this.state.goodsS, {...item, quantity: 1, tradecheck: true}]});
                    this.setState({shop: this.state.shop.map(arrItem => {
                        if (item.name == arrItem.name) {
                            return {...arrItem, quantity: arrItem.quantity-1} 
                        }
                        else return arrItem
                    })
                })
                
            }
            else {
                this.setState({goodsS: [...this.state.goodsS, {...item, tradecheck: true}]});
                this.setState({shop: this.state.shop.filter(arrItem => item.name != arrItem.name)})
            }
        }
    }
    moveGoodsFromInventary = (item) => {
        let arrayCheck = this.state.goodsNS.filter(arrItem => {
            if (arrItem.name == item.name)
                return true
        })
        if (arrayCheck[0]) {
            this.setState({goodsNS: this.state.goodsNS.map(arrItem => {
                if (item.name == arrItem.name) {
                    return {...arrItem, quantity: arrItem.quantity+1} 
                }
                else return arrItem
                })
            })
            if (item.quantity > 1) {
                this.setState({inventory: this.state.inventory.map(arrItem => {
                    if (item.name == arrItem.name) {
                        return {...arrItem, quantity: arrItem.quantity-1} 
                    }
                    else return arrItem
                    })
                })
            }
            else {
                this.setState({inventory: this.state.inventory.filter(arrItem => item.name != arrItem.name)})
            }
            
        }
        else {
            if (item.quantity > 1) {
  
                    this.setState({goodsNS: [...this.state.goodsNS, {...item, quantity: 1, tradecheck: true}]});
                    this.setState({inventory: this.state.inventory.map(arrItem => {
                        if (item.name == arrItem.name) {
                            return {...arrItem, quantity: arrItem.quantity-1} 
                        }
                        else return arrItem
                    })
                })
                
            }
            else {
                this.setState({goodsNS: [...this.state.goodsNS, {...item, tradecheck: true}]});
                this.setState({inventory: this.state.inventory.filter(arrItem => item.name != arrItem.name)})
            }
        }
    }
    returning = () => {
        this.props.history.push("/");
    }
    render() {
        // console.log(this.state.goodsNS)
        return (
           <div className="village">
                <div className="village-img" style={{ height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/store.jpg")+')'}}>
                    
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
                        <button>Trade</button>
                        <div className="trade-plate-1">
                            {this.tradeFillShop()} 
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