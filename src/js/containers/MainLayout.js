import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import StartMenu from '../components/StartMenu.js';
import VillagePage from '../components/VillagePage.js';
import ChouseNameMenu from '../components/ChouseNameMenu.js';
import ForestPage from '../components/ForestPage.js';
import ForestPageBattle from '../components/ForestPageBattle.js';
import Rest from '../components/Rest.js';
import Character from '../components/Character.js';
import Inventory from '../components/Inventory.js';
import Achivments from '../components/Achivments.js';
import Settings from '../components/Settings.js';
import Notify from '../components/Notify.js';
import Shop from '../components/Shop.js'

export default class MainLayout extends React.Component {

    render() {
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
                    <Route path="/character" component={Character}/>
                    <Route path="/inventory" component={Inventory}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/achivments" component={Achivments}/>
                    <Route path="/store" component={Shop}/>
                    
                </Switch>
                <Notify/>
                {/* <Route path="*" component={Footer} /> */}
            </div>
        )
    }
}
