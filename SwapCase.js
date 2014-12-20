function SwapCase(str) { 

  function isLowercase(char)
  {
    return char >= 'a' && char <= 'z';
  }
  
  function isUppercase(char)
  {
    return char >= 'A' && char <= 'Z';
  }
  
var letters = str.split('');
  
  var i=0;
  while(i < letters.length)
  {
    if(isLowercase(letters[i]))
    {
      letters[i] = letters[i].toUpperCase();
      i++;
      continue;
    }
    if(isUppercase(letters[i]))
    {
      letters[i] = letters[i].toLowerCase();
      i++;
      continue;
    }
    i++;
  }
  return letters.join('');
  

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());                            















                            
                            
                            
  