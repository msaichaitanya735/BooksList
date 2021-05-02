import './App.css';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Container from './component/Container'
import LandingPage from './component/LandingPage'


function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/login"><Login/></Route>
        <Route path="/register" component={Register}/>
        <Route path="/container"><Container/></Route>
    </Switch>
</Router>
  );
}

export default App;
