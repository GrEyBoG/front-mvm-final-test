import React from "react";
import { Link} from 'react-router-dom';

//Styles
import style from '../styles/customerPage/header.css';

//images
import mvmIcon from "../images/1x/mvmIcon.png";
import mvmIcon2x from "../images/2x/mvmIcon@2x.png";
import mvmIcon3x from "../images/3x/mvmIcon@3x.png";


function Header(){

    return(
        <div className="header-container">
            <img className="mvm-icon" srcSet={`${mvmIcon} 1x, ${mvmIcon2x} 2x, ${mvmIcon3x} 3x`} src={mvmIcon} alt="mvmIcon"/>
            
            <div className="header-right">
                <Link to="/Manager" className="header-text">I´m a manager!</Link>
            </div>
            
        </div>
    );
}

export {Header};