import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import MainView from './Containers/MainView/MainView';
import Collections from './Containers/Collections/Collections';
import TopBar from './Components/TopBar/TopBar';
import BottomBar from './Components/BottomBar/BottomBar.js';
import DetailPhoto from './Components/DetailPhoto/DetailPhoto';
import DetailCollection from './Components/DetailCollection/DetailCollection';
import Search from './Containers/Search/Search';
import UserProfile from './Containers/UserProfile/UserProfile';
import Login, {Oauth} from "./Containers/Login/Login";

function App() {
  let style = {
    marginBottom: `${navigator.userAgent.match('CriOS')&&`86px`}`
  }
  return (
      <Router>
        <div className="App">
          <TopBar/>
          <section style={style} className='scroller'>
            <Route path="/login" exact component={Login} />
            <Route path="/oauth" component={Oauth} />
            <Route path="/" exact component={MainView} />
            <Route path="/collections/" exact component={Collections} />
            <Route path="/photo/:id" exact component={DetailPhoto} />
            <Route path="/user/:userName" exact component={UserProfile} />
            <Route path="/profile" exact component={UserProfile} />
            <Route path="/collection/:id" exact component={DetailCollection} />
            <Route path="/search/" exact component={Search} />
          </section>
          <BottomBar/>
        </div>
      </Router>
  );
}

export default App;
