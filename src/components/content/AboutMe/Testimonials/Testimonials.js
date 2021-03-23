import  React, {useContext, useState} from "react";
import Carousel from 'react-elastic-carousel';
import "./style.css";
import style from "../about.module.css";
import img1 from "../../../../images/testimonial-1.jpg";
import img2 from "../../../../images/testimonial-2.jpg";
import img3 from "../../../../images/testimonial-3.jpg"
import {FaQuoteRight} from "react-icons/all";
const Testimonials = () =>{


    return(
        <div className={style.TestimonialsMain}>
            <div className={style.Testimo}>Testimonials</div>
            <Carousel itemsToShow={2}>
              <div className={style.testimBlock1}>
                  <div>
                      <img src={img1}/>
                  </div>
                  <div className={style.testimText}>
                      Vivamus at molestie dui, eu ornare orci.
                      Curabitur vel egestas dolor. Nulla condimentum
                      nunc sit amet urna tempus finibus. Duis mollis
                      leo id ligula pellentesque, at vehicula dui ultrices.
                  </div>
                  <div className={style.testimBlock2}>
                      <div>
                          <div className={style.testimName}>Julia Hickman</div>
                          <div className={style.testimTITLE}>Omni Source</div>
                      </div>
                      <div>
                          <FaQuoteRight style={{
                              fontSize:'30px',
                              color:'#136B81'
                          }}/>
                      </div>
                  </div>

              </div>
                <div className={style.testimBlock1}>
                    <div>
                        <img src={img2}/>
                    </div>
                    <div className={style.testimText}>
                        Vivamus at molestie dui, eu ornare orci.
                        Curabitur vel egestas dolor. Nulla condimentum
                        nunc sit amet urna tempus finibus. Duis mollis
                        leo id ligula pellentesque, at vehicula dui ultrices.
                    </div>
                    <div className={style.testimBlock2}>
                        <div>
                            <div className={style.testimName}>Robert Watkins</div>
                            <div className={style.testimTITLE}>Endicott Shoes</div>
                        </div>
                        <div>
                            <FaQuoteRight style={{
                                fontSize:'30px',
                                color:'#136B81'
                            }}/>
                        </div>
                    </div>
                </div>
                <div className={style.testimBlock1}>
                    <div>
                        <img src={img3}/>
                    </div>
                    <div className={style.testimText}>
                        Vivamus at molestie dui, eu ornare orci.
                        Curabitur vel egestas dolor. Nulla condimentum
                        nunc sit amet urna tempus finibus. Duis mollis
                        leo id ligula pellentesque, at vehicula dui ultrices.
                    </div>
                    <div className={style.testimBlock2}>
                        <div>
                            <div className={style.testimName}>Kristin Carroll</div>
                            <div className={style.testimTITLE}>Helping Hand</div>
                        </div>
                        <div>
                            <FaQuoteRight style={{
                                fontSize:'30px',
                                color:'#136B81'
                            }}/>
                        </div>
                    </div>

                </div>
            </Carousel>
        </div>
    )
};

export default Testimonials;