import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

const SecondItem = ({ match }) => {

    let flagLike = false;
    let { id } = match.params;

    const [data, setData] = useState([])

    useEffect(() => {
        let secondQuests = require('../../data/sideQuests.json');
        setData(secondQuests[id - 1]);
    }, [])

    const addLike = () => {
        if (!flagLike) {
            data.like = data.like + 1;
        } else {
            data.like = data.like - 1;
        }
        flagLike = !flagLike;
        console.log(data.like)
    }
    return (
        <section className='col-5 ul__content height70vh text-center'>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h3 className='context__title'>{data.location}</h3>
            <i
                onClick={addLike}
                className="fas fa-heart like"
                id='likeBtn'>{data.like}</i>
        </section>
    )
}



export default withRouter(SecondItem);