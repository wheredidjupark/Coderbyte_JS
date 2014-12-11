function FirstReverse(str) { 

  // code goes here  
var reverted_str ='';
for(i=str.length-1; i >= 0; i--)
{
	var letter = str.charAt(i);
	reverted_str += letter;
}         

return reverted_str;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());                            















                            
                            
                            
  