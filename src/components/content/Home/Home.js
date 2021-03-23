import React from "react";
import style from "./home.module.css";
const Home = () =>{

    return(
        <div className={style.home}>
                <div className={style.name}>
                    Alex Smith
                </div>
                <div>
                    Web Designe
                </div>
        </div>
    )
};

export default Home;