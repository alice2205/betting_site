import React from 'react';
import s from "./Modal.module.css";

const Modal = ({active, setActive}) => {
    return (
        <div className={s.modal} onClick={() => {setActive(false)}}>Х
            <div className={s.modal__content} onClick={e => e.stopPropagation()}></div>
            Hi
        </div>
    );
};

export default Modal;