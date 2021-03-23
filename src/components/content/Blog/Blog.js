import React, {useContext} from "react";
import style from "./blog.module.css";
import {blogContext} from "../../State/State";

const Blog = () =>{
    const blocks = useContext(blogContext);
    return(
        <div className={style.main}>
            <div className={style.title}>Blog</div>
            <div className={style.mainBlock}>
                {blocks.map(b=>{
                    return(
                    <div className={style.block}>
                        <div className={style.imgBlock}>
                            <img src={b.img}/>
                        </div>
                        <div className={style.dat}>{b.dat}</div>
                        <div className={style.name}>{b.title}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Blog;