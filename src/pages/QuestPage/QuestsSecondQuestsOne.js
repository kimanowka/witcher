import React,{useContext} from 'react';
import { Context } from '../../Context';

const QuestsSecondQuestsOne = ({id,title,img,location,like}) => {
    const {toSecondQuest} = useContext(Context);

    return  (
    <div onClick={()=> {toSecondQuest(id)}} className='col-5 blocks__questsLink text-center'>
        <h3 >{title}</h3>
        <h3 className='context__title'>{location}</h3>
        <div>{like}</div>
        <div>Полное описание</div>
    </div>
    )
}



export default QuestsSecondQuestsOne;