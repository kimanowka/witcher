import React from 'react';
import { Context } from './Context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage/MainPage';
import QuestPage from './pages/QuestPage/QuestPage';
import NewsPage from './pages/NewsPage/NewsPage';
import MapPage from './pages/MapPage/MapPage';
import AccountPage from './pages/AccountPage/AccountPage';



const App = () => {

  return (
    <Context.Provider value={{}}>
      <Router>
        <NavBar />
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/quest'>
          <QuestPage />
        </Route>
        <Route path='/news'>
          <NewsPage />
        </Route>
        <Route path='/map'>
          <MapPage />
        </Route>
        <Route path='/account'>
          <AccountPage />
        </Route>
      </Router>

    </Context.Provider>
  )
}

export default App;