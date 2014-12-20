function PowersofTwo(num) { 
  
  if(num ==2)
    return true;
  else
  {
    if(num >2)
      return PowersofTwo(num/2);
    else
      return false;
  }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());                            















                            
                            
                            
  