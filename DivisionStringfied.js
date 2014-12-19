function DivisionStringified(num1,num2) { 

  var result = Math.round(num1/num2);
  result = result.toString().split('').reverse();

  
  if(result.length > 3)
  {
    for(var i=3; i < result.length; i+=4) //why 4? everytime you add comma, 4.
      result.splice(i,0,',');
  }
  
  return result.reverse().join('');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());                            















                            
                            
                            
  