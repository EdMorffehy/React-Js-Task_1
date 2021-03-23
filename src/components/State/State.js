import React, {createContext} from "react";
import aboutBlockImg1 from "../../images/testimonial-1.jpg";
import aboutBlockImg2 from "../../images/testimonial-2.jpg"
import aboutBlockImg3 from "../../images/testimonial-3.jpg"
import portfolioImg1 from "../../images/1.jpg";
import portfolioImg2 from "../../images/2.jpg";
import portfolioImg3 from "../../images/3.jpg";
import portfolioImg4 from "../../images/4.jpg";
import portfolioImg5 from "../../images/5.jpg";
import portfolioImg6 from "../../images/6.jpg";
import blogPost1 from "../../images/blog_post_1.jpg";
import blogPost2 from "../../images/blog_post_2.jpg";
import blogPost3 from "../../images/blog_post_3.jpg";
import blogPost4 from "../../images/blog_post_4.jpg";
import {BiPencil, BsFlag, IoStorefrontOutline, MdPhonelink} from "react-icons/all";
const state={
    nav:[
        {id:1, name:"Home"},
        {id:2, name:"About"},
        {id:3, name:"Resume"},
        {id:4, name:"Portfolio"},
        {id:5, name:"Blog"},
        {id:6, name:"Contact"},
    ],
    aboutMe:[
        {id:1, name:'Age', title:'32'},
        {id:2, name:'Residence', title:'USA'},
        {id:3, name:'Address', title:"88 Some Street, Some Town"},
        {id:4, name:'e-mail', title:"email@example.com"},
        {id:5, name:'Phone', title:"+0123 123 456 789"},
    ],
    aboutBLock:[
        {id:1, name:'Ecommerce',  text:'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.',icon:<IoStorefrontOutline/>},
        {id:2, name:'Copywriting', text:'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.', icon:<BiPencil/>},
        {id:3, name:'Web Design', text:'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.', icon:<MdPhonelink/>},
        {id:4, name:'Management', text:'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.', icon:<BsFlag/>}
    ],
    portfolio:[
        {id:1, name:"SoundCloud Audio", src:portfolioImg1, title:"Detailed"},
        {id:2, name:"Detailed Project 2", src:portfolioImg2, title:'Detailed'},
        {id:3, name:"Vimeo Video 1", src:portfolioImg3, title:'Mockups'},
        {id:4, name:"Vimeo Video 1", src:portfolioImg4, title:' SoundCloud'},
        {id:5, name:"Mockup Design 1", src:portfolioImg5, title:'Vimeo Videos'},
        {id:6, name:"YouTube Video 1", src:portfolioImg6, title:'YouTube Videos'},
    ],
    blog:[
        {id:1, title:'Why I Switched to Sketch For UI Design', dat:'05 Mar 2020', img:blogPost1},
        {id:2, title:'Best Practices for Animated Progress Indicators', dat:'23 Feb 2020', img:blogPost2},
        {id:3, title:'Designing the Perfect Feature Comparison Table', dat:'06 Feb 2020', img:blogPost3},
        {id:4, title:'An Overview of E-Commerce Platforms', dat:'07 Jan 2020',  img:blogPost4}
    ],
    animations:[
        {id:1, animateName:'animated-section-moveFromLeft'},
        {id:2, animateName:'animated-section-moveFromRight'},
        {id:3, animateName:'animated-section-moveFromTop'},
        {id:4, animateName:'animated-section-moveFromBottom'},
        {id:5, animateName:'animated-section-moveFromLeftFade'},
        {id:6, animateName: 'animated-section-moveFromRightFade'},
        {id:7, animateName: 'animated-section-moveFromTopFade'},
        {id:8, animateName: 'animated-section-moveFromBottomFade'},
        {id:9, animateName: 'animated-section-scaleUp'},
        {id:10, animateName: 'animated-section-scaleUpDown '},
        {id:11, animateName: 'animated-section-scaleUpCenter'},
        {id:12, animateName: 'animated-section-flipInLeft'},
        {id:13, animateName: 'animated-section-flipInRight'},
        {id:14, animateName: 'animated-section-flipInBottom'},
        {id:15, animateName: 'animated-section-flipInTop'},
        {id:16, animateName: 'animated-section-rotateInNewspaper'},
        {id:17, animateName: 'animated-section-rotatePullRight'},
        {id:18, animateName: 'animated-section-rotatePullLeft'},
        {id:19, animateName: 'animated-section-rotatePullTop'},
        {id:20, animateName: 'animated-section-rotatePullBottom'},
        {id:21, animateName: 'animated-section-rotateUnfoldLeft'},
        {id:22, animateName: 'animated-section-rotateUnfoldRight'},
        {id:23, animateName: 'animated-section-rotateUnfoldTop'},
        {id:24, animateName: 'animated-section-rotateUnfoldBottom '},
        {id:25, animateName: 'animated-section-rotateRoomLeftIn'},
        {id:26, animateName: 'animated-section-rotateRoomRightIn'},
        {id:27, animateName: 'animated-section-rotateRoomTopIn'},
        {id:28, animateName: 'animated-section-rotateRoomBottomIn'},
        {id:29, animateName: 'animated-section-rotateCubeLeftIn'},
        {id:30, animateName: 'animated-section-rotateCubeRightIn'},
    ],
}

export const animationContext = createContext(state.animations);
export const blogContext = createContext(state.blog);
export const portfolioContext = createContext(state.portfolio);
export const navsContext = createContext(state.nav);
export const aboutContext = createContext(state.aboutMe);
export const adBlockContext = createContext(state.aboutBLock);