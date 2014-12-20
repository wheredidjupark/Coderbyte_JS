function NumberAddition(str) { 
 
  function isNumber(char)
  {
    return char >= '0' && char <= '9';
  }
  var arrayStr = str.split('');  
  
  var numbers =[];

  
  for(var i=0; i < arrayStr.length; i++)
  {
    var number ="";
    if(isNumber(arrayStr[i]))
    {
      number += arrayStr[i];
      i++;
      while(i < arrayStr.length && isNumber(arrayStr[i]))
      {
        number += arrayStr[i];
        i++;
      }
      number = Number(number);
      numbers.push(number);
    }
  }
  return numbers.reduce(function(a,b){
  return a+b;});
  
  
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline()); 