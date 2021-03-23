import React, {useState} from 'react';
import style from "./content.module.css";
import Card from "./Card";

const Content = () => {
    return (
        <div className={style.background}>
        <Card/>
        </div>
    )
};

export default Content;