import React from 'react';
import {Link} from 'react-router-dom';
import Slot from './Slot.js';
import Enemy from '../logical_classes/Enemy';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItemToInventory, removeItemFromInventory, addNotify, reloadInventory} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addItemToInventory, removeItemFromInventory, addNotify, reloadInventory}, dispatch);
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
    componentDidUpdate() {
        console.log(this.state.inventory);
        console.log(this.state.goodsS);
    }
    componentWillUpdate() {

    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.inventory !== this.state.inventory) {
            this.setState({inventory: nextProps.inventory}); 
        }
    }
    inventoryFill() {
        let arr = [];
        for (let i = 0; i < 40; i++){  
            let a = <Slot key={i} item={this.state.inventory[i]} index={i} move={this.moveGoodsFromInventory}/>;
            arr.push(a);
        }

        return arr
    }
    storeFill() {
        let arr = [];
        for (let i = 0; i < 40; i++){  
            let a = <Slot key={i} index={i} item={this.state.shop[i]} move={this.moveGoodsFromShop}/>;
            arr.push(a);
        }

        return arr
    }
    tradeFill() {
        let arr = [];
        for (let i = 0; i < 10; i++){  
            
            let a = <Slot key={i} index={i} item={this.state.goodsNS[i]} back={this.moveGoodsBackToInventory}/>;
            arr.push(a);
        }

        return arr
    }
    tradeFillShop () {
        let arr = [];
        for (let i = 0; i < 10; i++){  
            
            let a = <Slot key={i} index={i} item={this.state.goodsS[i]} back={this.moveGoodsBackToShop}/>;
            arr.push(a);
        }

        return arr
    }
    moveGoodsBackToShop = (item) => {
        if(this.state.shop.some(arrItem => item.name == arrItem.name)) {
            if (item.quantity > 1) {
                this.setState({goodsS: this.state.goodsS.map(arrItem => {
                    if (item.name == arrItem.name) {
                        return {...arrItem, quantity: arrItem.quantity-1} 
                    }
                    else return arrItem
                    })
                })
            }
            else {
                this.setState({goodsS: this.state.goodsS.filter(arrItem => item.name != arrItem.name)})
            }
            this.pay(item, "shop"); 
        }
        else {
            if (item.quantity > 1) {
  
                    this.setState({shop: [...this.state.shop, {...item, quantity: 1, tradecheck: false}]});
                    this.setState({goodsS: this.state.goodsS.map(arrItem => {
                        if (item.name == arrItem.name) {
                            return {...arrItem, quantity: arrItem.quantity-1} 
                        }
                        else return arrItem
                    })
                })
                
            }
            else {
            this.setState({shop: [...this.state.shop, {...item, tradecheck: false}]});
            this.setState({goodsS: this.state.goodsS.filter(arrItem => item.name != arrItem.name)})
            }
            this.pay(item, "shop"); 
        }
    }
    moveGoodsBackToInventory = (item) => {
        if(this.state.inventory.some(arrItem => item.name == arrItem.name)) {
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
            this.pay(item, "inventory");
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
            this.pay(item, "inventory");
        }
        
    }
    moveGoodsFromShop = (item) => {
        if (this.state.inventory[0].quantity-item.price >= 0) {
            if(this.state.goodsS.some(arrItem => item.name == arrItem.name)) {
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
                            return {...arrItem} 
                        }
                        else return arrItem
                        })
                    })
                }
                else {
                    this.setState({shop: this.state.shop.filter(arrItem => item.name != arrItem.name)})
                }
                this.pay(item, "shop");
            }
            else {
                if (item.quantity > 1) {
                        this.setState({goodsS: [...this.state.goodsS, {...item, quantity: 1, tradecheck: true}]});
                        this.setState({shop: this.state.shop.map(arrItem => {
                            if (item.name == arrItem.name) {
                                return {...arrItem} 
                            }
                            else return arrItem
                        })
                    })
                }
                else {
                    this.setState({goodsS: [...this.state.goodsS, {...item, tradecheck: true}]});
                    this.setState({shop: this.state.shop.filter(arrItem => item.name != arrItem.name)})
                }
                this.pay(item, "shop");
            }
        }
        else {
            this.props.addNotify("Not enough gold!")
        }
    }
    moveGoodsFromInventory = (item) => {

            if(this.state.goodsNS.some(arrItem => item.name == arrItem.name)) {
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
            this.pay(item, "inventory");
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
            this.pay(item, "inventory");
        }
       
    }

    pay(item, type) {
        if (item.tradecheck){
            if (type == "inventory"){
                let x = [...this.state.goodsS];
                x.shift();
                if (this.state.goodsS[0].quantity-item.price/2 <= 0) {
                    this.setState({goodsS: x})
                }
                else{
                    this.setState({goodsS: [{img: "Money", name: "Gold", 
                    type: "money", category: "common", class: "money", 
                    price: 1, quantity: this.state.goodsS[0].quantity-item.price/2, used: false}, ...x]})
                }
                console.log("back to inv")
            }
            else {
                let x = [...this.state.goodsNS];
                x.shift();
                if (this.state.goodsNS[0].quantity-item.price <= 0) {
                    this.setState({goodsNS: x})
                }
                else{
                    this.setState({goodsNS: [{img: "Money", name: "Gold", 
                    type: "money", category: "common", class: "money", 
                    price: 1, quantity: this.state.goodsNS[0].quantity-item.price, used: false}, ...x]})
                }
                console.log("back to shop")
                let y = [...this.state.inventory];
                y.shift();
                this.setState({inventory: [{img: "Money", name: "Gold", 
                type: "money", category: "common", class: "money", 
                price: 1, quantity: this.state.inventory[0].quantity+item.price, used: false} , ...y]})
           
            }
        }
        else {
            
            if (type == "inventory"){
                if (this.state.goodsS.some(name => name.name == "Gold")) {
                    
                    this.setState({goodsS: this.state.goodsS.map((name, index) => {
                        if (name.name == "Gold")
                            return {...name, quantity: this.state.goodsS[0].quantity+item.price/2}
                        else return name;
                })})}
                else {
                    this.setState({goodsS: [{img: "Money", name: "Gold", 
                    type: "money", category: "common", class: "money", 
                    price: 1, quantity: item.price/2, used: false},...this.state.goodsS]});
                }
                console.log("from inv")
            }
            else{
                    if (this.state.goodsNS.some(name => name.name == "Gold")) {
                        
                        this.setState({goodsNS: this.state.goodsNS.map((name, index) => {
                            if (name.name == "Gold")
                                return {...name, quantity: this.state.goodsNS[0].quantity+item.price}
                            else return name;
                    })})}
                    else {
                        this.setState({goodsNS: [{img: "Money", name: "Gold", 
                        type: "money", category: "common", class: "money", 
                        price: 1, quantity: item.price, used: false},...this.state.goodsNS]});
                    }
                    console.log("from shop")
                    let y = [...this.state.inventory];
                    y.shift();
                    this.setState({inventory: [{img: "Money", name: "Gold", 
                    type: "money", category: "common", class: "money", 
                    price: 1, quantity: this.state.inventory[0].quantity-item.price, used: false} , ...y]})
               
            }
        }
    }
    handleSubmit = () => {
        let x = [...this.state.inventory];
        this.state.goodsS.map(purchase => {
            if (this.state.inventory.some(item => item.name == purchase.name)) {
                // INDEX!!!
                this.state.inventory.find((item,index) => {
                if (item.name == purchase.name) 
                    x[index] = {...x[index], quantity: x[index].quantity+purchase.quantity, tradecheck: false} 
                })
            }
            else {                   
                x = [...x, {...purchase, tradecheck: false}];
            }               
         
            }
        )
            
        this.setState({goodsNS:[], goodsS:[]});
        this.props.reloadInventory(x);
        
    }
    returning = () => {
        this.props.history.push("/");
    }
    render() {
        return (
           <div className="village">
                <div className="village-img" style={{ height: "100%", width: "100%", backgroundImage: 'url('+require("../../img/store.jpg")+')'}}>
                    
                    <div className="char-window-shop">
                        <div className="shop-title"><p><span>STORE</span></p></div>
                        <div className="shop-inv">                        
                        
                            <div className="inventory-shop">
                                {this.storeFill()} 
                            </div>
                            
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
                        <div className="card">
                        <div className="enter-name"><button onClick={this.handleSubmit}>Trade</button></div>
                        </div>
                        <div className="menu-list-shop">
                        
                            <Link to="/"><div className="menu-img" style={{height: "20%", width: "100%", backgroundImage: 'url('+ require("../../img/back.png")+')'}}></div></Link>
                            <Link to="/inventory"><div className="menu-img" style={{height: "20%", width: "100%", backgroundImage: 'url('+ require("../../img/inventory.png")+')'}}></div></Link>
                            <Link to="/character"><div className="menu-img" style={{height: "20%", width: "100%", backgroundImage: 'url('+ require("../../img/skills.png")+')'}}></div></Link>
                            <Link to="/achivments"><div className="menu-img" style={{height: "20%", width: "100%", backgroundImage: 'url('+ require("../../img/achiv.png")+')'}}></div></Link>
                            <Link to="/settings"><div className="menu-img" style={{height: "20%", width: "100%", backgroundImage: 'url('+ require("../../img/settings.png")+')'}}></div></Link>
           
                        </div> 
                    </div>
                   
                    
                </div>
           </div>
        )
    }
}