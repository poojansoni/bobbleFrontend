import React from "react"
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Signup from "./user/Signup"

export default function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </Router>
    )
}