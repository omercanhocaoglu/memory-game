import React from 'react';

import "./style.css";



function Introduction() {
  
  let name= prompt("Whats Your Name?")

    return (
    <div className='IntroDiv'> 
        
     <p> Hey! <strong> {name} </strong> , Welcome <span style={{textTransform:"lowercase"}}>to</span>  Memory Card Game! </p> <br/> 

     <p className='therules'> <strong>  The Rules are so Simple! </strong> </p> <br/>

     <p className='rule1'> <strong>  1- İf you can't know which are the same cards, your score would decrease -10 points </strong> </p> <br/>
     
     <p className='rule2'>  <strong> 2- if you can know which are the same cards, your score would increase 50 points </strong>  </p> <br/>

     <p>  <strong> Enjoy Your Game! </strong>  </p>    
        
    </div>
  )
}

export default Introduction;