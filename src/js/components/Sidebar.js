import React from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends React.Component {
    render(){
        return (
            <div className="side-menu">
                <Link to="/inventory"><div className="menu-img" style={{height: "100%", width: "25%", backgroundImage: 'url('+ require("../../img/inventory.png")+')'}}></div></Link>
                <Link to="/character"><div className="menu-img" style={{height: "100%", width: "25%", backgroundImage: 'url('+ require("../../img/skills.png")+')'}}></div></Link>
                <Link to="/achivments"><div className="menu-img" style={{height: "100%", width: "25%", backgroundImage: 'url('+ require("../../img/achiv.png")+')'}}></div></Link>
                <Link to="/settings"><div className="menu-img" style={{height: "100%", width: "25%", backgroundImage: 'url('+ require("../../img/settings.png")+')'}}></div></Link>
            </div>
        )
    }
}