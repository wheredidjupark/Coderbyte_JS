function ArithGeo(arr) { 

  var addition = arr[1]-arr[0];
  var multiple = arr[1]/arr[0];
  
  //arithmetic
  var betweenTerms = arr.length-1;
  while(betweenTerms > 0)
  {
    if(arr[betweenTerms]-arr[betweenTerms-1] == addition)
    {
      if(betweenTerms == 1)
      return "Arithmetic";
    }
    else
    {break;
    }
    betweenTerms--;
  }
  
  //geometric
  betweenTerms = arr.length-1;
  while(betweenTerms > 0)
  {
    if(arr[betweenTerms]/arr[betweenTerms-1] == multiple)
    {
      if(betweenTerms == 1)
        return "Geometric";
    }
    else
    {
      break;
    }
    betweenTerms--;
  }
  
  return -1;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());                            















                            
                            
                            
  