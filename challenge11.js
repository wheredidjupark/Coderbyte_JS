function ABCheck(str) { 

var Str = str.split('');

  
  for(var i=0; i <Str.length; i++)
  {
    
    if(Str[i] == 'a' || Str[i] == 'A')
    {
      var j = i+4;
      if((Str[j] == 'b' || Str[j] == 'B')&&(i<Str.length))
        return true;
    }
  }
  
 return false;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());