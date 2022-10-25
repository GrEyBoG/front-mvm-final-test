import React from 'react';

//Style

import style from '../styles/customerPage/allYourNeeds.css';

//images

import allYourNeeds from '../images/1x/allYourNeeds.png';
import allYourNeeds2x from '../images/2x/allYourNeeds@2x.png';
import allYourNeeds3x from '../images/3x/allYourNeeds@3x.png';

function AllYourNeeds(){
    return(
        <div className='allYourNeeds-container'>

            <div className='top-line'></div>

            <div className='allYourNeeds-texts'>

                <img className="allYourNeeds-image-1" srcSet={`${allYourNeeds} 1x, ${allYourNeeds2x} 2x, ${allYourNeeds3x} 3x`} src={allYourNeeds} alt="newsIcon"/>
                
                <h3 className='allYourNeeds-text'>all your needs in one</h3>

                <img className="allYourNeeds-image-2" srcSet={`${allYourNeeds} 1x, ${allYourNeeds2x} 2x, ${allYourNeeds3x} 3x`} src={allYourNeeds} alt="newsIcon"/>
                
            </div>

            <div className='midle-line'></div>

            <div className='explainText' aling='center'>

                <p>mvm Customer Support is a tool </p>
                <p>that allows you to manage all</p> 
                <p>your customer service needs</p> 
                <p>in one place to facilitate the</p> 
                <p>management of your business</p> 
                <p>and increase your sales.</p>

            </div>

            <div className='bottom-line'></div>

        </div>
    );
}

export {AllYourNeeds};