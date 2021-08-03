import React from 'react';
import {Link} from "react-router-dom";

import mainQuest from './images/mainQuests.jpg'
import secondQuests from './images/secondQuests.jpg'
import antiquitiesQuests from './images/antiquitiesQuests.jpg'


const QuestsNavBar = () => {

    return (
    <aside>
        <h1 className='text-center'>Меню</h1>
        <ul className='ul ul__aside'>
            <li>
                <Link to="/quest/mainQuests">Основные квесты</Link>
                <i className="far fa-circle"></i>
            </li>
            <li>
                <Link to="/quest/secondQuests">Побочные квесты</Link>
                <i className="far fa-circle"></i>
            </li>
            <li>
                <Link to="/quest/antiquities">Ведьмачьи древности</Link>
                <i className="far fa-circle"></i>
            </li>
        </ul>
    </aside>

    )
}


export default QuestsNavBar;