function ThirdGreatest(strArr) { 
  
var greatest_pos = 0;
  
  for(var count = 0; count < 3; count++)
  {
      greatest_pos = 0;
      for(var i=0; i < strArr.length; i++)
      {
        if(strArr[i].length > strArr[greatest_pos].length)
          greatest_pos = i;
      }
    if(count <2)
    strArr.splice(greatest_pos, 1); //remove the greatest.
    else
      return strArr[greatest_pos];
  }       
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());           
