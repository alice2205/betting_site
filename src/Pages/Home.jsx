import React, {useState} from 'react';
import s from './Home.module.css'
import CurrentGame from "../components/CurrentGame";
import Modal from "../components/modal/Modal";

export const Home = (props) => {
    const [modalActive, setModalActive] = useState(true)

    return (
        <div className={s.container} >
            <Modal active={modalActive} setActive={setModalActive}/>
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
