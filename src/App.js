import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";
import Header from './Components/Header/Header';
import LogIn from './Components/Login/Login';
import Todo from './Components/Todo/Todo';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/todo">
              <Todo></Todo>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
