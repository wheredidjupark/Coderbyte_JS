function LetterlettersOfWordsI(str) { 

  var words = str.split(' '); //store each word as element of words array
  
  //separates words
  var lettersOfWords = [];
  for(var i=0; i <words.length; i++)
  {
    lettersOfWords.push(words[i].split(''));

  }
  

  //first convert every letter to lowercase
  for(var i=0; i < lettersOfWords.length;i++) 
  {
    for(var j=0; j < lettersOfWords[i].length; j++)
    {
      lettersOfWords[i][j] = lettersOfWords[i][j].toLowerCase();
    }
  }

//find the highest repeated number of letters for each word
  var highestInStr = [];
  for(var i=0; i <lettersOfWords.length; i++)
  {
    var highestInWord = 0; //highest repeat goes here
    for(var j=0; j <lettersOfWords[i].length; j++) //for each word's letter (lettersOfWords[i].length is the length of the word)
    {
      var repeat =0;
       for(var x=j; x < lettersOfWords[i].length; x++)
       {
        if(lettersOfWords[i][j] == lettersOfWords[i][x])
          repeat++;
       }
       if(repeat > highestInWord)
        highestInWord = repeat;
    }
    highestInStr.push(highestInWord);
  }
  
  //find the word with the highest number of repeats
  //it also checks for the 
  var pos =0;
  var norepeat = true;
  for(var i=0; i < highestInStr.length; i++)
  {
    if(highestInStr[pos] < highestInStr[i])
      pos = i;
    if(highestInStr[i] != 1)
      norepeat = false;
  }
  
  if (norepeat == true)
    return -1;
  else
  return words[pos];
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterlettersOfWordsI(readline());                            















                            
                            
                            
