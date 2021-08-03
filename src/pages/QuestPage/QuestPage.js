import React from 'react';
import { BrowserRouter as Router, Route, useHistory, useRouteMatch } from 'react-router-dom'
import { Context } from '../../Context';
import QuestsNavBar from './QuestsNavBar';
import QuestsMainQuests from './QuestsMainQuests';
import QuestsSecondQuests from './QuestsSecondQuests';
import QuestsMainAntiquities from './QuestsMainAntiquities';
import MainItem from './MainItem';
import SecondItem from './SecondItem';
import AntiquitieItem from './AntiquitieItem';

const QuestPage = () => {
    const history = useHistory();

    const toMainQuest = (id) => {
        history.push(`/quest/mainQuests/${id}`);
        window.location.reload();
    }
    const toSecondQuest = (id) => {
        history.push(`/quest/secondQuests/${id}`);
        window.location.reload();
    }
    const toAntiquitieQuest = (id) => {
        history.push(`/quest/antiquities/${id}`);
        window.location.reload();
    }
    return (
        <Context.Provider value={{ toMainQuest, toSecondQuest, toAntiquitieQuest }}>
            <Router>
                <div className="questsBackground height100vh">
                    <QuestsNavBar />
                    <Route exact path='/quest/mainQuests' component={QuestsMainQuests} />
                    <Route exact path='/quest/mainQuests/:id' component={MainItem} />
                    <Route exact path='/quest/secondQuests' component={QuestsSecondQuests} />
                    <Route exact path='/quest/SecondQuests/:id' component={SecondItem} />
                    <Route exact path='/quest/antiquities' component={QuestsMainAntiquities} />
                    <Route exact path='/quest/antiquities/:id' component={AntiquitieItem} />
                </div>
            </Router>
        </Context.Provider>
    )
}


export default QuestPage;