import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import * as types from '../constants/RoadWay.js';

import StartMenu from '../components/StartMenu.js';
import VillagePage from '../components/VillagePage.js';
import ChouseNameMenu from '../components/ChouseNameMenu.js';
import ForestPage from '../components/ForestPage.js';
import ForestPageBattle from '../components/ForestPageBattle.js';
import Rest from '../components/Rest.js';



{/* CONNECT => WILL NOT UPDATE PAGE! */}
export default class MainLayout extends React.Component {

    render() {
       
        return(
            <div className='wrapper'>
                <Switch>
                    <Route exact path="/" component={ChouseNameMenu} /> 
                    <Route path="/start" component={StartMenu} />
                    <Route path="/village" component= {VillagePage} />
                    <Route path="/rest" component={Rest} />
                    <Route path="/forest" component={ForestPage} />
                    <Route path="/forest-battle" component={ForestPageBattle} />
                </Switch>
                {/* <Route path={"/item"+this.state.viewvar.index} component={() => <Item data={this.state.viewvar}/>} /> */}
                {/* <Route path="*" component={Footer} /> */}
            </div>
        )
    }
}
