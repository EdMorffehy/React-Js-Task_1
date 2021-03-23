import React, {useContext, useState} from "react";
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import style from "./nav.module.css";
import {navsContext} from "../State/State";
import {NavLink, useHistory} from "react-router-dom";

const Page = ({randomItem, setAnim}) =>{
    const nav = useContext(navsContext);
    const history = useHistory();
    const pages = [];
    nav.map(n=>{
        !pages.includes(n.id) && pages.push(n.id)
    })

    const page = (type) => {
        switch (type){
            case 'increment': {
                const url = window.location.pathname.split('/')[1];
                let id = nav.find(item => item.name === url).id;
                let u = nav.find(item => item.id === id + 1);
                setAnim(randomItem)
                history.push(u !== undefined ? u.name : '/Home');
                break;
            }
            case 'decrement': {
                const url = window.location.pathname.split('/')[1];
                let id = nav.find(item => item.name === url).id;
                let u = nav.find(item => item.id === id - 1);
                setAnim(randomItem)
                history.push(u !== undefined ? u.name : '/Contact')
                break;
            }
        }
    }


    return(
        <div className={style.pages}>
             <ul>
                <li onClick={() => page("decrement")}>
                      <IoIosArrowBack/>
                 </li>
                 <li onClick={() => page("increment")}>
                     <IoIosArrowForward/>
                 </li>
             </ul>
        </div>
    )
};

export default Page;