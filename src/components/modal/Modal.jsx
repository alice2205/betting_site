import React from 'react';
import s from "./Modal.module.css";
import {useState} from "react";

const Modal = ({active, setActive}) => {
    const [modalActive, setModalActive] = useState(true)


    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => {setActive(false)}}>
            <p onClick={() => {setModalActive(true)}} style={{color: 'black', margin: 0}}>x</p>
            <div className={s.modal__content} onClick={e => e.stopPropagation()}>
                Поздравляем! Вы сделали ставку хххх руб  коэффициентом yyy в матче ххххх
            </div>

        </div>
    );
};

export default Modal;