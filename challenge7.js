function isNumber(char)
{
  return Number(char) >= 0 && Number(char) <=9;
}

function isAlpha(char)
{
  return (char>= 'a' && char <= 'z')||(char>= 'A' && char <= 'Z')
}

function SimpleSymbols(str) { 
  
  var string = []; //array for the string
  for(var i=0; i <str.length; i++)
  {
    string.push(str.charAt(i));
  }
  
  if(isAlpha(string[0]))
    return false;
  
  for(var i=1; i <str.length-1; i++)
  {
    if(isAlpha(string[i]))
    {
      if(string[i-1] != "+" && string[i+1] != "+")
        return false;
    }
  }
  
  if(isAlpha(string[str.length-1]))
    return false;
  
  return true;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());                            















                            
                            
                            
  