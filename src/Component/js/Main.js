import React from 'react';
import '../css/main.css';
import Left from './MainLeft';
import Right from './MainRight';

function Main(){
    return(
        <div className="main">
         <Left/>
         <Right/>
        </div>
    )
}

export default Main ;