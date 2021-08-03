import React from 'react';
import { Link } from 'react-router-dom';




const MainNavBar = () => {

    return (
        <aside>
            <h1 className='text-center'>Меню</h1>
            <ul className='ul ul__aside'>
                <li>
                    <Link to="/">Описание</Link>
                    <i className="far fa-circle"></i>
                </li>
                <li>
                    <Link to="/main/system">Системные требования</Link>
                    <i className="far fa-circle"></i>
                </li>
            </ul>
        </aside>
    )
}


export default MainNavBar;