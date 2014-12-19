function MeanMode(arr) { 

//we find mean
  function sum(a,b){
    return a+b;
  }

  var mean = arr.reduce(function(a,b){return sum(a,b)})/arr.length;
  
//we find mode.
  var mode;
  var mode_index=0;
  var count=0;
  var prev_count=0;
  for(var i=0; i <arr.length; i++)
  {
    count=0;
    for(var j=i; j <arr.length; j++)
    {
      if(arr[i] == arr[j])
      {
        count++;
      }
    }

    if(count>prev_count)
    {
      prev_count = count;
      mode = arr[i];
    }
    
  }

  if(mode == mean)
    return 1;
  else
    return 0;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());                   













                            
                            
                            
  