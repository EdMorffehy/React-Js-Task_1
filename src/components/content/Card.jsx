import React, {useContext, useState} from 'react';
import { useSpring, animated } from 'react-spring'
import './styles.css'
import BlockInfo from "./BlockInfo/BlockInfo";
import Home from "./Home/Home";
import NavBar from "../NavBar/NavBar";
import {Switch,Route, Redirect} from "react-router-dom";
import About from "./AboutMe/About";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";
import Pages from "../NavBar/Pages";
import Contact from "./Content/Content";
import {animationContext} from "../State/State";
import "./animation.css";
import {useSelector} from 'react-redux';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`

function Card() {
    const  animation = useContext(animationContext);
    let arr = [];
    animation.map(a=>{
        arr.push(a.animateName);
    });
    let randomItem = arr[Math.floor(Math.random()*arr.length)];
    console.log(randomItem);

    const [anim, setAnim]  = useState('animated-section-rotateInNewspaper');
    console.log(anim)

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />

            <div className="test">
                <BlockInfo/>

                <div className={`contents_block ${anim}`}>
                        <Switch>
                            <Route exact path='/'  render={()=> <Redirect to='/Home'/>} />
                            <Route  path='/Home' render={()=> <Home/>}/>
                            <Route  path='/About' render={()=> <About/>}/>
                            <Route  path='/Resume' render={()=> <Resume/>}/>
                            <Route  path='/Portfolio' render={()=> <Portfolio/>}/>
                            <Route  path='/Blog' render={()=> <Blog/>}/>
                            <Route  path='/Contact' render={()=> <Contact/>}/>
                        </Switch>
                    {/*</div>*/}
                </div>
                <div>
                    <div className="nav">
                        <NavBar randomItem={randomItem} setAnim={setAnim}/>
                    </div>
                    <div className="bar">
                        <Pages randomItem={randomItem} setAnim={setAnim}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;