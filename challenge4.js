function isAlpha(letter)
{
  return (letter >= "a" && letter <= "z")||(letter >= "A" && letter <= "Z");
}

function isVowel(letter)
{
  var vowels = "aeiouAEIOU";
  if(vowels.search(letter) == -1)
      return false;
  else
    return true;
  
}

function LetterChanges(str) { 

  var temp ="";
  for(var i=0; i<str.length; i++)
  {
    var character = str[i];
    if(isAlpha(str[i]))
    {
      var charCode = str.charCodeAt(i)+1;
      character = String.fromCharCode(charCode);
      if(str[i] == "z" || str[i] == "Z")
        character = "a";
    }
    temp += character;
  }

var string ="";
for(var i=0; i < temp.length; i++)
{
	  	var character = temp[i];
  if(isVowel(temp[i]))
  {
  	character = character.toUpperCase();
  }	
  string += character;

}
  
  //
  
  return string; 
         
}                           
           
LetterChanges(readline());                            















                            
                            
                            
  