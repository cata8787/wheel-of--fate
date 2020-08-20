import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Link, Switch, Route,useRouteMatch,useParams} from 'react-router-dom';
//import pick_employees from './pag5';
import pag1 from './pag1';
import pag2 from './pag2';
//import pag3 from './pag3';


function Home() {
  return <h2>Home</h2>;
}
function App(){
    return(
    <Router>
    <div>
        <ul>
          <li><Link to="/pag1">pag1</Link></li>
          <li><Link to="/pag2">pag2</Link></li>
          <li><Link to="/pag3">pag3</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
        

      
      <Switch>
        <Route path="/pag1" component={pag1}></Route>
        <Route path="/pag2" component={pag2}></Route>
        <Route path="/pag3" component={Topics}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  </Router>
    );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>pag3</h2>
      <ul>
      <li><Link to={`${match.url}/pag4`}>pag4</Link></li>
      <li><Link to={`${match.url}/pag5`}>pag5</Link></li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
      <Route path={`${match.path}/:topicId`}><Topic /></Route>
      <Route path={match.path}><h3>Please select a topic.</h3></Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  
  
  return <h3>Requested topic ID: {topicId}</h3>;
}


ReactDOM.render(
  <Router><App><Topics></Topics></App></Router>,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
