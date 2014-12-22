function PrimeTime(num) { 

  for(var i=2; i < num; i++)
  {
    for(var j=2; j < num;j++ )
    {
      if(i*j == num)
        return false;
    }
  }
  
  return true;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());           
