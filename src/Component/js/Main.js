import React from 'react';
import '../css/main.css';
import Left from './MainLeft';
import Right from './MainRight';
import Center from './MainCenter';

function Main(){
    return(
        <div class="main">
         <Left/>
         <Center/>
         <Right/>
        </div>
    )
}

export default Main ;