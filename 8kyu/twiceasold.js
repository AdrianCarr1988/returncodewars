//Your function takes two arguments:

//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    return  Math.abs(dadYearsOld - (sonYearsOld*2))
  }


  // Math.abs function to ensure there is a positive number. doubling sons age and then removing it from the fathers. 


  //https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript 