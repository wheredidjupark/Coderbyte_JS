function FirstFactorial(num) { 

if(num ==1)
	return 1;
  // code goes here  
  return num*FirstFactorial(num-1); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());                            



/*
function FirstFactorial(num) { 

  var count = num-1;
  var result = num;
  while(count >= 1)
  {
    result = result * count;
    count--;
  }
  return result;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());                            















                            
                            
                            
  

*/