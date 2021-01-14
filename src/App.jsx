import './App.css';
import Login from './components/login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import List from './components/list/list';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
