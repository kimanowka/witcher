import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainNavBar from './MainNavBar';
import MainSystemPage from './MainSystemPage';
import MainAboutPage from './MainAboutPage';


const MainPage = () => {
    return (
        <Router>
            <div className='promoBackground'>
                <MainNavBar />
                <Route exact path='/'>
                    <MainAboutPage />
                </Route>
                <Route exact path='/main/system'>
                    <MainSystemPage />
                </Route>
            </div>
        </Router>
    )
}


export default MainPage;