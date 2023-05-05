import React from 'react';
import '../App.css';
import '../styles/cornerLogo.css'
import airplane from './../images/airplane.png';



function CornerLogo() {
return (
    <div id="CornerLogo">
        <h3 id="CornerLogoTitle" style={{display: "inline-block"}}>Trav</h3>   
        <img src={airplane} width="50" height="50" style={{display: "inline-block"}}/>
    </div>
);
}


export default CornerLogo;