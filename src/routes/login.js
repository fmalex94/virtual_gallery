import React from 'react';
import { Route } from 'react-router-dom'

import Login from '../components/Login'

export default [
    <Route exact path="/login" component={Login} key="login"/>
];