import React, {useContext} from "react";
import style from "../about.module.css";
import {adBlockContext} from "../../../State/State";

const Block2 = () =>{
    const abBlock = useContext(adBlockContext);
    // console.log(abBlock);
    return(
        <div>
            <div className={style.tit}>What <span>I Do</span></div>
            <div className={style.main_tit}>
            {abBlock.map(a=>{
                return(
                    <div key={a.id} className={style.tit_block}>
                        <div className={style.icon}>{a.icon}</div>
                        <div className={style.tit_name}>{a.name}</div>
                        <div className={style.tit_text}>{a.text}</div>
                    </div>
                )
            })}
            </div>
        </div>
    )
};

export default Block2;