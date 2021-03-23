import React, { useState, useEffect } from "react";
import style from "../portfolio.module.css";
const SelectedImage = ({
                           photo,
                           index,
                           name,
                           selected
                       }) => {
    const [isSelected, setIsSelected] = useState(selected);
    const handleOnClick = (e, index) => {
        setIsSelected(!isSelected);
    };

    useEffect(() => {
        setIsSelected(selected);
    }, [selected]);

    return (
        <div className={style.block}>
            <div className={style.blogImg}>
                <div className={style.images}>
                    <img
                        alt={photo.title}
                        {...photo}
                        onClick={handleOnClick}
                        style={{
                            width:'100%',
                        }}
                    />

                </div>
                <span className={style.imgName}> {photo.name} </span>
            </div>
        </div>
    );
};

export default SelectedImage;
