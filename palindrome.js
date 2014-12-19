/*
Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function Palindrome(str) { 

var reverse = [];
for(var i=str.length-1; i >=0; i--)
{
	reverse.push(str.charAt(i));
}

var string1 = reverse.join("");
if(string1 == str)
  return true;
  else
    return false;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());                            















                            
                            
                            
  