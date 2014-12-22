function isPrime(num)
{
  for(var i=2; i < num; i++)
  {
    for(var j=2; j < num; j++)
    {
      if(i*j == num)
        return false;
    }
  }
  
  return true;
}


function PrimeMover(num) { 

var count =0;
  
  for(var i=2; i < 10000; i++)
  {
   if(isPrime(i))
      count++;
    if(count == num)
      return i;
  }      
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeMover(readline());           
