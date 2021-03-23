import React from "react";
import img from "../../../images/main_photo.jpg";
import style from "./blockInfo.module.css";
import { ImLinkedin2 } from 'react-icons/im';
import { CgFacebook } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io';

const BlockInfo = () =>{
    return(
        <div className={style.main}>
                <div className={style.img}>
                    <img src={img}/>
                </div>
                 <div>
                    <div className={style.name}>Alex Smith</div>
                    <div className={style.proffesia}>Web Desinger</div>
                    <div className={style.icons}>
                        <a href="#"><ImLinkedin2 /> </a>
                        <a href="#">  <CgFacebook /></a>
                        <a href="#"> <IoLogoTwitter /></a>
                    </div>
                    <div>
                        <input id="5" type="file" className={style.home_file}/>
                        <label className={style.lb} for="5">Dawnload CV</label>
                    </div>
                    <div className={style.inf}>© 2020 All rights reserved.</div>
                 </div>
        </div>
    )
};

export default BlockInfo;