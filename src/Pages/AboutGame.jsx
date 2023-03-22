import React, {useState} from 'react';
import s from "./AboutGame.module.css";
import {useNavigate} from "react-router-dom";
import Modal from "../components/modal/Modal";

export const AboutGame = (props) => {
    const [active, setActive] = useState(true)
    const [checked, setChecked] = useState(null)
    const [modalActive, setModalActive] = useState(false)


    const navigate = useNavigate()
    const onClickHandler = () => {
        setActive(prev => !prev)
        // navigate('/')
        setModalActive(true)
    }

    const isChecked = (value) => value === checked;
    const onSelect = ({target: {value}}) => {
        setChecked(value)
    }

    return (
        <>
            {<Modal active={modalActive} setActive={setModalActive}/>}
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
                <div className={s.coefficient} >
                    <div className={s.coefficient__box} >
                        <p>Хозяева</p>
                        <input type="radio" id="1" name="radios" value="p1"  checked={isChecked('p1')} onChange={onSelect}/>
                        <label htmlFor="1">{props.coefficient.p1}</label>
                    </div>
                    <div className={s.coefficient__box}>
                        <p>Ничья</p>
                        <input type="radio" id="2" name="radios" value="x" checked={isChecked('x')} onChange={onSelect}/>
                        <label htmlFor="2">{props.coefficient.x}</label>
                    </div>
                    <div className={s.coefficient__box}>
                        <p>Гости</p>
                        <input type="radio" id="3" name="radios" value="p2" checked={isChecked('p2')} onChange={onSelect}/>
                        <label htmlFor="3">{props.coefficient.p2}</label>
                    </div>
                </div>
            </div>
            <input type={"text"}></input>
            <div className={s.card}>
                Ставка

                <button className={s.button} onClick={()=> {onClickHandler()}} disabled={checked===null}>Сделать ставку</button>
            </div>
        </>
    );
}


