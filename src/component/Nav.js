import React from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Nav = () => {
    return (
        <Router>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" style={{marginLeft:"80%"}} href="/login">Login</a>
            </nav>
            <Switch>
                <Route path="/login"><Login/></Route>
                <Route path="/register"><Register/></Route>
            </Switch>
        </Router>
    )
}

export default Nav
