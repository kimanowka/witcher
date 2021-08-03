import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router';

import axios from 'axios';

const QuestsMainQuestsOne = () => {

    const match = useRouteMatch();

    let { id } = match.params;

    const [data, setData] = useState([])
    const [like,setLike] = useState(false)

    useEffect(() => {
        let basicQuests = require('../../data/basicQuests.json');
        setData(basicQuests[id - 1]);


    }, [])

    //todo сделать по нормальному
     const addLike = (e) => {
        e.preventDefault();
        if (!like) {
           fetch("http://php", {
                method: 'POST',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: JSON.stringify({
                    'id': data.id,
                    'flag': '+',
                    'json': 'basicQuests.json',
                })
            })
                .then(res => {
                    setLike(!like);
                    return res.json();
                })
                .catch(error => console.log('Request failed', error))
        } else {
            fetch("http://php", {
                method: 'POST',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: JSON.stringify({
                    'id': data.id,
                    'flag': '-',
                    'json': 'basicQuests.json',
                })
            })
                .then(res => {
                    setLike(!like);
                    return res.json();
                })
                .then(res => console.log(res.status))
                .catch(error => console.log('Request failed', error))
        }
    }

    return (
        <section className='col-5 ul__content height70vh text-center'>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h3 className='context__title'>{data.location}</h3>
            <i
                className="fas fa-heart like"
                onClick={addLike}
            >{data.like}</i>
        </section>
    )
}



export default QuestsMainQuestsOne;