import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import * as types from '../constants/RoadWay.js';

import StartMenu from '../components/StartMenu.js';
import VillagePage from '../components/VillagePage.js';
import ChouseNameMenu from '../components/ChouseNameMenu.js';
import ForestPage from '../components/ForestPage.js';
import ForestPageBattle from '../components/ForestPageBattle.js';
import Rest from '../components/Rest.js';
import LevelUp from '../components/LevelUp.js';



{/* CONNECT => WILL NOT UPDATE PAGE! */}
export default class MainLayout extends React.Component {

    render() {
    //    console.log(localStorage.getItem("Enemy"));
        return(
            <div className='wrapper'>
                <Switch>
                    {localStorage.getItem("Hero") ? localStorage.getItem("Forest") > 0 ? 
                    JSON.parse(localStorage.getItem("Enemy")).name != null ? 
                    <Route exact path="/" component={ForestPageBattle} /> :
                    <Route exact path="/" component={ForestPage} /> :
                    <Route exact path="/" component={VillagePage} /> : 
                    <Route exact path="/" component={ChouseNameMenu} />}

                    <Route path="/start" component={StartMenu} />
                    <Route path="/village" component= {VillagePage} />
                    <Route path="/rest" component={Rest} />
                    <Route path="/forest" component={ForestPage} />
                    <Route path="/forest-battle" component={ForestPageBattle} />
                    <Route path="/levelup" component={LevelUp}/>
                </Switch>
                {/* <Route path={"/item"+this.state.viewvar.index} component={() => <Item data={this.state.viewvar}/>} /> */}
                {/* <Route path="*" component={Footer} /> */}
            </div>
        )
    }
}
