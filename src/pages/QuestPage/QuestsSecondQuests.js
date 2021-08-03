import React,{useState,useEffect} from 'react';
import QuestsSecondQuestsOne from './QuestsSecondQuestsOne';

const QuestsSecondQuests = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let secondQuests = require('../../data/sideQuests.json');
        setData(secondQuests);

    }, [])
    return (
        <ul className='ul ul__content'>
            {data.map(item=> {
                return (
                    <QuestsSecondQuestsOne 
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


export default QuestsSecondQuests;