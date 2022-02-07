import React from 'react';
import { NavLink } from 'react-router-dom';

/*Подключаем файл стилей*/
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return(
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                <div className = {s.dialog}><NavLink to ="/dialogs/1"> Artem </NavLink></div>
                <div className = {s.dialog}><NavLink to ="/dialogs/2"> Artem </NavLink></div>
                <div className = {s.dialog}><NavLink to ="/dialogs/3"> Artem </NavLink></div>
                <div className = {s.dialog}><NavLink to ="/dialogs/4"> Artem </NavLink></div>
                <div className = {s.dialog}><NavLink to ="/dialogs/5"> Artem </NavLink></div>
                <div className = {s.dialog}><NavLink to ="/dialogs/6"> Artem </NavLink></div>

            </div>

            <div className = {s.messages}>
                <div className = {s.message}>hi</div>
                <div className = {s.message}>how are you?</div>
                <div className = {s.message}>hey ho</div>
            </div>
        </div>
    );
}


export default Dialogs;