import React from "react";
import style from "./about.module.css";
import Block_1 from "./Block_1/Block_1";
import Block_2 from "./Block_2/Block_2";
import Testimonials from "./Testimonials/Testimonials";
import Clients from "./Cilents/Cilents";
const About = () =>{
    return(
        <div>
            <div className={style.about}>
                <div className={style.aboutContent}>
                <div className={style.title}>About <span>Me</span></div>
                <Block_1/>
                <Block_2/>
                <Testimonials/>
                <Clients/>
                </div>
            </div>
        </div>
    )
};

export default About;