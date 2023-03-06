import React, {useState} from 'react';
import s from './Home.module.css'
import CurrentGame from "../components/CurrentGame";

export const Home = (props) => {
    return (
        <div className={s.container} >
            <div className={s.current_games} >
                <p>Текущие события</p>
                <div className={s.live} >Live</div>
            </div>
            {props.items.map(el=>
                <CurrentGame id={el.id} title={el.title} data={el.data} />
            )}
            <p>Предстоящие события</p>

        </div>
    );
};
