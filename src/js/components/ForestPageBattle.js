import React from 'react';
import {Link} from 'react-router-dom';

import * as types from '../constants/RoadWay.js'
import Hero from '../logical_classes/Hero.js';

export default class ForestPageBattle extends React.Component {

    render() {
        
        return (
            <div className='village'>
                 <Hero/>
                 <Enemy/>
            </div>
        )
    }
}