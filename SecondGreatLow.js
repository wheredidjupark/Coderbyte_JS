function SecondGreatLow(arr) { 

  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null,arr);
  
  for(var i=0; i < arr.length; i++)
  {
    for(var j=0; j <arr.length;)
    {
      if(arr[j] == max || arr[j] == min)
      {
        arr.splice(j,1);
      }
      else
      {
        j++;
      }
    }
  }
  
  var secondGreatest = Math.max.apply(null,arr);
  var secondLowest = Math.min.apply(null,arr);
  if(arr.length == 0)
  {
    return max + " " + min;
  }
  else
    return secondGreatest + " " + secondLowest;
  
  return arr;
    
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());                            















                            
                            
                            
  