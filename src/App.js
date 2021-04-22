import './App.css';
import Container from './component/Container'
import RowSelector from './component/RowSelector'
import {BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Container/>
      <Router>
        <Switch>
          <Route path="/rows"><RowSelector/></Route>
          <Route path="/container"><Container/></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
