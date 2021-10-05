import React from 'react';
import Header from './components/Header';
import Login from './Auth/Login';
import Register from './Auth/Register';
import LoginError from './Auth/LoginError';
import Admin from './components/Admin';
import Profile from './components/Profile';
import Apply from './pages/Apply';
import PostJob from './pages/PostJob';
import Detail from './components/Detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Show from './components/Show';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

//import posts from './posts';
//import axios from 'axios';
//import { Link } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/details/:detailId" component={Detail} />
        <Route exact path="/show/:showId" component={Show} />
        <Route exact path="/details/:jobId" component={Detail} />
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/admin/jobs/:postedId" component={Admin}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/admin/:userId/dashboard" component={Profile}></Route>
        <Route exact path="/admin/:postId/postjob" component={PostJob}></Route>
        <Route exact path="/login-error" component={LoginError}></Route>
        <Route exact path="/apply/:applyId/:userId" component={Apply}></Route>
      </Switch>
    </Router>
  )

}

export default App;