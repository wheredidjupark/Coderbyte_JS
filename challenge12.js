

function VowelCount(str) { 

function isVowel(char)
{
	var vowels = ["a", "e", "i","o","u","A","E","I","O","U"];
  for(var i=0; i <vowels.length; i++)
  {
    if(char == vowels[i])
      return true;
  }
	return false;
}

/*
	for(vowel in vowels)
	{
		if(char == vowel)
			return true;
	}
*/

var count =0;

for(var i=0; i <str.length; i++)
{
	if(isVowel(str.charAt(i)))
		count++;
}
  // code goes here  
  return count; 
         
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());                            















                            
                            
                            
  