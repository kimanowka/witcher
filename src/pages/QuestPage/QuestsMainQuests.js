import React, { useState, useEffect } from 'react';
import QuestsMainQuestsOne from './QuestsMainQuestsOne'

const QuestsMainQuests = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let basicQuests = require('../../data/basicQuests.json');
        setData(basicQuests);

    }, [])
    return (
        <ul className='ul ul__content'>
            {data.map(item=> {
                return (
                    <QuestsMainQuestsOne
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    location={item.location}
                    id={item.id}
                    />
                )
            })}
        </ul>
    )
}


export default QuestsMainQuests;