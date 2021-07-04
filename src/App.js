import ArticlesList from './Articles/ArticlesList';
import './App.css';
import React from "react";
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
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Articles">
            <Articles/>
          </Route>
          <Route path="/users">
            <Users />
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
  return <h2>Home</h2>;
}

function Articles() {
  return <div>
            <h1 id="title">A Nice Title for the Web Page</h1>
      <ArticlesList/>
    </div>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
