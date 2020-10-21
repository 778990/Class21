function isTouching(O1,O2){
    if(O1.x-O2.x < O2.width/2+O1.width/2 &&
      O2.x-O1.x < O1.width/2+O2.width/2 &&
      O1.y-O2.y < O2.height/2+O1.height/2 &&
      O2.y-O1.y < O2.height/2+O1.height/2){
      return true;
    }
    else{
      return false;
  
    }
  
  }
  
  function bounceOff(O3,O4){
    if(O3.x-O4.x < O4.width/2+O3.width/2 &&
      O4.x-O3.x < O3.width/2+O4.width/2 &&
      O3.y-O4.y < O4.height/2+O3.height/2 &&
      O4.y-O3.y < O3.height/2+O4.height/2)
    {
     O3.velocityX = O3.velocityX*(-1);
     O4.velocityX = O4.velocityX*(-1);
    }
  
  }