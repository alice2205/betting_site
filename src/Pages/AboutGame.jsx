import React, {useState} from 'react';
import s from "./AboutGame.module.css";

export const AboutGame = (props) => {
    const [active, setActive] = useState(true)

    return (
        <>
            <div className={s.card}>
                <div className={s.card__team}>
                    <img src={props.title.team1.img}/>
                    <p>{props.title.team1.name}</p>
                </div>
                <div className={s.card__team}>
                    <img src={props.title.team2.img}/>
                    <p>{props.title.team2.name}</p>
                </div>
                <span>{props.data}</span>
                <div className={s.coefficient}>
                    <div className={s.coefficient__box}>
                        <p>Хозяева</p>
                        <div className={s.coefficient__value}>
                            <p>{props.coefficient.p1}</p>
                        </div>
                    </div>
                    <div className={s.coefficient__box}>
                        <p>Ничья</p>
                        <div className={s.coefficient__value}>
                            <p>{props.coefficient.x}</p>
                        </div>
                    </div>
                    <div className={s.coefficient__box}>
                        <p>Гости</p>
                        <div className={s.coefficient__value}>
                            <p>{props.coefficient.p2}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={s.card}>
                Ставка
                <div className={active ? 'button_active' : 'button'} onClick={()=> {setActive(prev => !prev)}}>Сделать ставку</div>
            </div>
        </>

    );
};
