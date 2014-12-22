function isAlpha(char)
{
  return (char >= 'a' && char <='z')||(char >= 'A' && char <='Z')
}
function PalindromeTwo(str) { 
  
  var arr = [];
  for(var i=str.length-1; i >=0; i--)
  {
    if(isAlpha(str.charAt(i)))
    {
      arr.push(str.charAt(i).toLowerCase());
    }
  }
  return arr.join('') == arr.reverse().join('');
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());           
