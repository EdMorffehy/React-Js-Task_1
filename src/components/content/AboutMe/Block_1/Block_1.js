import React, {useContext} from 'react';
import {aboutContext} from "../../../State/State";
import style from "../about.module.css";
const Block_1 = () =>{
    const about = useContext(aboutContext);
    // console.log(about);
    return(
        <div className={style.block_1}>
            <div className={style.block_1_text}>
                Proin volutpat mauris ac pellentesque pharetra.<br/>
                Suspendisse congue elit vel odio suscipit,
                sit amet <br/> tempor nisl imperdiet. Quisque ex justo,
                faucibus <br/> ut mi in, condimentum finibus dolor.
                Aliquam  <br/>vitae hendrerit dolor, eget imperdiet mauris.<br/>
                Maecenas et ante id ipsum condimentum dictum <br/> et vel <br/> massa.
                Ut in imperdiet dolor, vel consectetur dui.
            </div>
            <div>
                {about.map(a=>{
                    return(
                        <div key={a.id} className={style.block_1_info}>
                            <span className={style.name}>{a.name}</span>
                            <span className={style.info}>{a.title}</span></div>
                    )
                })}
            </div>
        </div>
    )
};

export default Block_1;