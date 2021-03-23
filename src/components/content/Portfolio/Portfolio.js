import React, {useContext, useState, useCallback} from "react";
import style from "./portfolio.module.css";
import {portfolioContext} from "../../State/State";
import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage/SelectedImage";
const Portfolio = () =>{
    const images = useContext(portfolioContext);

    const  cotegory=[];
    const group = images.map((i, index)=>{
        let y =  !cotegory.includes(i.title) && cotegory.push(i.title)
    })
    cotegory.unshift('All');
    const photos = [];

    const [x, setX] = useState('All');
    images.map(i=>{
        if(i.title === x ){
            photos.push(i)
        }
    })

    const [activeIndex, setActiveIndex] = useState(0);

    const click = (e, index)=>{
        console.log(index)
        setX(e)
        setActiveIndex(index);

    }

    const all = [];
    images.map(i=>{
        all.push(i);
    })

    const [selectAll, setSelectAll] = useState(false);

    const imageRenderer = useCallback(
        ({ index, key, photo }) => (
            <SelectedImage
                key={key}
                index={index}
                photo={photo}
            />
        ),
        [selectAll]
    );
    return(
        <div className={style.port}>
           <div className={style.title}>Portfolio</div>
            <div className={style.bar}>
                {cotegory.map((c, index)=>{
                    return(
                        <span
                              className={activeIndex === index ? style.active : style.unactive }
                              key={c}
                              onClick={()=>click(c, index)}
                        >{c}</span>
                    )
                })}
            </div>
            <div>
                <Gallery photos={x==='All' ? all : photos  }  renderImage={imageRenderer} width='1' height='1'/>
            </ div>
        </div>
    )
};

export default Portfolio;