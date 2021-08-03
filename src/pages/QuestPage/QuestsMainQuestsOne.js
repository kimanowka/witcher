import React,{useContext} from 'react';
import { Context } from '../../Context';
const QuestsMainQuestsOne = ({id,title,img,location,like}) => {

    const {toMainQuest} = useContext(Context);


    return  (
        <div onClick={()=> {toMainQuest(id)}} className='col-5 blocks__questsLink text-center'>
            <h3 >{title}</h3>
            <h3 className='context__title'>{location}</h3>
            <div>{like}</div>
            <div>Полное описание</div>
        </div>
    )
}



export default QuestsMainQuestsOne;