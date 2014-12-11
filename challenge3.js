  function isalpha(c) {
    return (((c >= 'a') && (c <= 'z')) || ((c >= 'A') && (c <= 'Z')));
  }

function LongestWord(sen) { 

var position = 0;
//first find word...
function FindWord(sen, pos)
{
	var word="";
	for(i=position; i < sen.length; i++)
	{
		if (isalpha(sen.charAt(i)))
		{
			word += sen.charAt(i);
			i++;
			while(isalpha(sen.charAt(i)))
			{
				word += sen.charAt(i);
				i++;
			}
			break;
		}
	}
	position = i;
	return word;
}



var largest = FindWord(sen,position);
var second_largest ="";
while(position < sen.length)
{
	second_largest=FindWord(sen,position);
	if(second_largest.length > largest.length)
	{	
		largest = second_largest;
	}
}
	return largest;

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());                            















                            
                            
                            
  














                            
                            
                            
  