import React from 'react';
import s from "./CurrentGame.module.css";
import {Navigate} from "react-router-dom";
import {useState} from "react";

const CurrentGame = (props) => {
    const [goToCurrentGame, setGoToCurrentGame] = useState(false)
    if(goToCurrentGame) {
        return <Navigate to={'/aboutGame' + '/' + props.id}/>
    }

    const onClickHandler = () => {
        setGoToCurrentGame(true)
    }

    return (
        <>
            <div className={s.card} onClick={onClickHandler}>
                <p>{props.title.team1.name}</p>
                <p>{props.title.team2.name}</p>
                <span>{props.data}</span>
            </div>
        </>
    );
};

export default CurrentGame;