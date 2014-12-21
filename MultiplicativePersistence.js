function MultiplicativePersistence(num) { 
  
  var multi_persist = 0;
  
  var str = num.toString().split('');
  
  while(str.length > 1)
  {
        str = str.reduce(function(a,b){
    return Number(a)*Number(b);
  });
    multi_persist++;
    
    str = str.toString().split(''); 
  }
return multi_persist;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());           
