import React, {useContext} from "react";
import {AiOutlineHome} from 'react-icons/ai';
import {FaRegUser} from 'react-icons/fa';
import {ImBriefcase} from 'react-icons/im';
import {ImBook} from 'react-icons/im';
import {RiMailLine} from 'react-icons/ri';
import {FaGraduationCap} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import style from "./nav.module.css";


const NavBar = ({randomItem, setAnim}) => {
    console.log(randomItem);
    const changeAnimate = () =>{
        setAnim(randomItem)
    }

    return (
        <div className={style.navBar}>
            <ul className={style.nav}>
                <NavLink to='/Home'>
                    <li onClick={changeAnimate}><AiOutlineHome/><span  className={style.navText}>Home</span></li>
                </NavLink>
                <NavLink to='/About'>
                    <li onClick={changeAnimate}><FaRegUser/> <span  className={style.navText}>About Me</span></li>
                </NavLink>
                <NavLink to="/Resume">
                    <li onClick={changeAnimate}><FaGraduationCap/> <span  className={style.navText}>Resume</span></li>
                </NavLink>
                <NavLink to="/Portfolio">
                    <li onClick={changeAnimate}><ImBriefcase/> <span  className={style.navText}>Portfolio</span></li>
                </NavLink>
                <NavLink to="/Blog">
                    <li onClick={changeAnimate}><ImBook/> <span  className={style.navText}>Blog</span></li>
                </NavLink>
                <NavLink to="/Contact">
                    <li onClick={changeAnimate}><RiMailLine/> <span  className={style.navText}>Contact</span></li>
                </NavLink>
            </ul>
        </div>
    )
};

export default NavBar;