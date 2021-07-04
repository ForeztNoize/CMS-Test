import ArticlesList from './Articles/ArticlesList';
import './App.css';
import Login from './AccountManagement/Login';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from './actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Articles">Articles</Link>
            </li>
            <li>
              <Link to="/LoginPage">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Articles">
            <Articles/>
          </Route>
          <Route path="/LoginPage">
            <LoginPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

function Home() {
  return <div>
    <h1 id="title">A Nice Title for the Web Page</h1>
    <h2>Home</h2>;
  </div> 
}

function Articles() {
  return <div>
    <h1 id="title">A Nice Title for the Web Page</h1>
    <ArticlesList/>
  </div>;
}

function LoginPage() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return <div>
    <h1 id="title">A Nice Title for the Web Page</h1>
    <h2>Login</h2>
    <h1>Counter {counter}</h1>
    <button onClick={() => dispatch(increment())}>+</button>
    {isLogged ? <h1>Not Visible</h1> : ''} 
    <Login/>
  </div> 

}
export default App;
