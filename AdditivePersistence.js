function AdditivePersistence(num) { 
  
  //the following first converts the string character into number
  function addition(a,b)
  {
    return Number(a)+Number(b);
  }
  
  var number = num.toString().split('');
  var count =0;
  while(number.length > 1)
  {
      number = number.reduce(addition).toString().split('');
    count++;
  }

  return count;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(readline());           
