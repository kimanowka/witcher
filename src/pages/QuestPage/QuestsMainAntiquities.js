import React,{useState,useEffect} from 'react';
import QuestsMainAntiquitiesOne from './QuestsMainAntiquitiesOne'


const QuestsMainAntiquities = () => {
    const [data,setData]=useState([]);

    useEffect(() => {
        let antiquitieQuests = require('../../data/antiquitieQuests.json');
        setData(antiquitieQuests);

    }, [])
    return (
        <ul className='ul ul__quests'>
            {data.map(item=> {
                return (
                    <QuestsMainAntiquitiesOne
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


export default QuestsMainAntiquities;