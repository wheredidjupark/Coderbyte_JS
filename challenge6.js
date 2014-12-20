function isAlpha(c)
{
  return (c>= 'a' && c <= 'z')||(c>='A' && c<='Z');
}


function LetterCapitalize(str) 

  var pos = 0;
  var firstPos = [];
  while(pos < str.length)
  {
    var character = str[pos];
    if(isAlpha(character))
    {
      firstPos.push(pos);
    }
    else
    {
      pos++;
      continue;
    }

//eat up the remaining characters of the word...
    while(isAlpha(str[i]))
    {
      pos++;
    }

  }

//now we can get the first letter's position as well as the position
  
  var array = [];
  for(var i=0; i < str.length; i++)
  {
    array.push(str.charAt(i));
  }

var j=0;
  for(var i=0; i< str.length; i++)
  {
    if(i == firstPos[j])
    {
            array[i] = array[i].toUpperCase();
            j++;
    }
  }

  var string =array.join("");


  return string;
  }    
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());                            

  













                            
                            
                            
  














                            
                            
                            
  