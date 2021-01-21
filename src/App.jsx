import './App.css';
import Login from './components/login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import List from './components/list/list';
import SignUp from './components/sign_up/sign_up';

function App({authService, listRepository}) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login authService={authService}/>
        </Route>
        <Route path="/list">
          <List authService={authService} listRepository={listRepository} />
        </Route>
        <Route path="/signup" authService={authService}>
          <SignUp />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
