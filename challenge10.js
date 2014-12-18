function AlphabetSoup(str) { 

  var array =[];
  for(var i=0; i < str.length; i++)
  {
    array.push(str.charAt(i));
  }
  
  for(var i=0; i <str.length; i++)
  {
   var smallest_pos = i;
    for(var j=i+1; j <str.length; j++)
    {
      if(array[smallest_pos] > array[j])
      {
        smallest_pos = j; 
      }
    }
    var temp = array[i];
    array[i] = array[smallest_pos];
    array[smallest_pos] = temp;
    
  }
  return array;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());                            















                            
                            
                            
  