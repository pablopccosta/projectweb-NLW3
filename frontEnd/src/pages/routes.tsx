import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 

import landing from './landing';
import orphanageMap from './orphanageMap';

function Routes () {
    return (
       <BrowserRouter>
       <Switch>
       <Route path="/" exact component={landing} />  
       <Route path="/app" component={orphanageMap} /> 
       </Switch>    
       </BrowserRouter> 
    );
}

export default Routes;