import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as choosenTypes from '../constants/StarterSets';
import {addHeroType} from '../actions';
import {bindActionCreators} from 'redux';


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addHeroType }, dispatch);
}

@connect(null, mapDispatchToProps)
export default class StartMenu extends React.Component {
    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass(type) {  
        let hero = null;
            if (type == "Warrior") {
                hero = choosenTypes.chooseWar;
                // this.setState({hero: choosenTypes.chooseWar});
                // localStorage.setItem("Hero", JSON.stringify(choosenTypes.chooseWar));   
            }
            else if (type == "Archer") {
                hero = choosenTypes.chooseArch;
                // this.setState({hero: choosenTypes.chooseArch});  
                // localStorage.setItem("Hero", JSON.stringify(choosenTypes.chooseArch));  
            }
            else if (type == "Wizard") {
                hero = choosenTypes.chooseMage;
                // this.setState({hero: choosenTypes.chooseMage});  
                // localStorage.setItem("Hero", JSON.stringify(choosenTypes.chooseMage));  
            }
            // console.log(hero)
            this.props.addHeroType(hero);

        }
    
    render() {
        return (
            <div className='start-btns'>  
                <p>Choose your class:</p>
                <Link to='/village'><button onClick={() => this.setClass("Warrior")}>Warrior</button></Link>
                <Link to='/village'><button onClick={() => this.setClass("Archer")}>Archer</button></Link>
                <Link to='/village'><button onClick={() => this.setClass("Wizard")}>Wizard</button></Link>
            </div>

        )

    }

}