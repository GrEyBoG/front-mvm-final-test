import React from "react";

//Styles
import style from '../styles/customerPage/mainIcons.css';

//Images
import pqrs from '../images/1x/pqrsIcon.png';
import pqrs2x from '../images/2x/pqrsIcon@2x.png';
import pqrs3x from '../images/3x/pqrsIcon@3x.png';

import news from '../images/1x/newsIcon.png';
import news2x from '../images/2x/newsIcon@2x.png'
import news3x from '../images/3x/newsIcon@3x.png';


import developments from '../images/1x/developmentIcon.png';
import developments2x from '../images/2x/developmentIcon@2x.png';
import developments3x from '../images/3x/developmentIcon@3x.png';


function MainIcons(props){

    const setTypeRequest = props.setTypeRequest;

    const pqrsValue = {
        value: 1,
        label: 'PQRS'
    }

    const newsValue = {
        value: 2,
        label: 'New'
    }

    const developmentsValue = {
        value: 3,
        label: 'Development'
    }

    const setPQRS = () => {
        setTypeRequest(pqrsValue);
        console.log(pqrsValue);
    }

    const setNews = () => {
        setTypeRequest(newsValue);
        console.log(newsValue);
    }

    const setDevelopments = () => {
        setTypeRequest(developmentsValue);
        console.log(developmentsValue);
    }

    return(
        <div className="main-icons-container">

            <ul className="icons-list">
                <li >
                    <img className="pqrs-icon" srcSet={`${pqrs} 1x, ${pqrs2x} 2x, ${pqrs3x} 3x`} src={pqrs} alt="pqrsIcon" />
                </li>

                <li>
                    <img className="developments-icon" srcSet={`${developments} 1x, ${developments2x} 2x, ${developments3x} 3x`} src={developments} alt="developmentsicon" />
                </li>

                <li>
                    <img className="news-icon" srcSet={`${news} 1x, ${news2x} 2x, ${news3x} 3x`} src={news} alt="newsIcon" />
                </li>
            </ul>


            <a className="pqrs-hover" href="#form" onClick={()=> setPQRS()}>

                <img className="pqrs-icon" srcSet={`${pqrs} 1x, ${pqrs2x} 2x, ${pqrs3x} 3x`} src={pqrs} alt="pqrsIcon" />
                <p className="pqrs-text">PQRS</p>

            </a>

            <a className="developments-hover" href="#form" onClick={()=> setDevelopments()}>

                <p className="developments-text">DEVELOPMENTS</p>
                <img className="developments-icon" srcSet={`${developments} 1x, ${developments2x} 2x, ${developments3x} 3x`} src={developments} alt="developmentsicon"/>

            </a>

            <a className="news-hover" href="#form" onClick={()=> setNews()}>

                <p className="news-text">NEWS</p>
                <img className="news-icon" srcSet={`${news} 1x, ${news2x} 2x, ${news3x} 3x`} src={news} alt="newsIcon"/>

            </a>


        </div>
    )
}

export {MainIcons};