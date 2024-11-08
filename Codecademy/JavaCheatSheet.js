// take a number and identify if even or odd
const evenOrOdd = num => {
    if(num % 2 === 0) {
      console.log("The number you chose is even :)");
    } else {
      console.log("The number you chose is odd :)");
    }
  };
  //evenOrOdd(10);
  //evenOrOdd(61);
  
  // Takes a value and returns a grade
  const gradeCalculator = num => {
    if (num < 60) {
      return `You scored ${num} which results in the grade: F`;
    } else if (num < 70) {
      return `You scored ${num} which results in the grade: D`;
    } else if (num < 80) {
      return `You scored ${num} which results in the grade: C`;
    } else if (num < 90) {
      return `You scored ${num} which results in the grade: B`;
    } else {
      return `You scored ${num} which results in the grade: A`;
    }
  };
  /*console.log(gradeCalculator(55));
  console.log(gradeCalculator(65));
  console.log(gradeCalculator(75));
  console.log(gradeCalculator(85));
  console.log(gradeCalculator(95));*/

  // function for a traffic light system
  const trafficLight = lightColour => {
    switch(lightColour) {
      case 'Red':
        return `The light is ${lightColour}: STOP`;
      case 'Amber':
        return `The light is ${lightColour}: Slow to a stop`;
      case 'Green':
        return `The light is ${lightColour}: Go`;
      default:
        return `Invalid light colour, please enter: Red, Amber or Green.`;
    }
  };

  const lightColours = ['Red', 'Amber', 'Green', 'Orange'];

  for (let i = 0; i < lightColours.length; i++) {
    //console.log(trafficLight(lightColours[i]));
  }


// password validator
const validatePassword = password => {
  const regex = /^(?=.*[0-9])(?=.*[@#$%^&*!]).{8,}$/;

  if (password.length > 8){
    if (regex.test(password)) {
      return `Password is valid :)`;
    } else {
    return `Password is invalid. It must contain at least one number and one special character`;
    }
  } else{
    return `Password is invalid. It must be 8 characters in length, and include a number and special character`
  }
};
/*console.log(validatePassword('zungguzung101!%!'));
console.log(validatePassword('helloworld'));
console.log(validatePassword('short'));*/

// Leap Yar calculator
const isLeapYear = year => {
   // Check if input is a valid number and a positive integer
   if (typeof year === 'number' && Number.isInteger(year)) {
     // Check if year is divisible by 4
     if(year % 4 === 0) {
       // If year is divisible by 100, it should also be divisible by 400 to be a leap year
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return `${year} IS a leap year :)`;
        } else {
          return  `${year} IS NOT a leap year :)`;
        }
      } else {
        return `${year} IS a leap year :)`;
      }
    } else {
      return `${year} IS NOT a leap year :)`;
    }
  } else {
    return 'Invalid input. Please provide a valid year.';
  }
}
/*const years = [4, 2024, 1997, 20000, 40400, 30, 75, 1760, 1533, 1540, 1320];
for (let i = 0; i < years.length; i++){
  console.log(isLeapYear(years[i]));
}*/

// find largest number in an Array
const randomNumbers = [11, 23, 3, 7,177,666];
const moreNumbers = [5, 7, 20, 1000, 9999];

const largestNumber = numbers => {
  let highestNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestNum) {
      highestNum = numbers[i];
    }
  }
  return highestNum;
};
//console.log(largestNumber(randomNumbers));
//console.log(largestNumber(moreNumbers));

// Count the occurances of a value in an array
const countOccurences = (inputArr, countValue) => {
  let occurence = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if(inputArr[i] === countValue) {
      occurence++;
    }
  }
  if(occurence > 1) {
    return `${countValue} has appeared ${occurence} times within the array.`;
  } else if (occurence === 1) {
    return `${countValue} has appeared ${occurence} time within the array.`;
  } else {
    return `${countValue} is not in the array.`;
  }
};
/*const myArr = [3, 15, 6, 3, 77, 88, 3, 41, 20, 3, 12, 1, 3, 5, 6, 6, 5, 77, 90, 900, 101, 88, 77, 3, 12, 10, 65];
console.log(countOccurences(myArr, 3));
console.log(countOccurences(myArr, 1));
console.log(countOccurences(myArr, 200));*/

//FizzBuzz function
const fizzBuzz = () => {
  let myArr = [];
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        myArr.push("FizzBuzz");
      }
      myArr.push("Fizz");
    } else if (i % 5 === 0) {
      myArr.push("Buzz");
    }
    myArr.push(i);
  }
  return myArr;
};
//console.log(fizzBuzz());

//Find the longest word in a sentence
const findLongestWord = sentence => {
  const words = sentence.split(' ');
  let longestWord = "";
  for (let i = 0; i < words.length; i++){
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};
/*let mySentence = 'The longest word in this sentence will be identified when i run the function.'
let anotherSentence = 'Phi fi fo fum, i smell and englishman'
let someLyrics = 'Twelve years i have wait for this, twelve years and my heart still beats.'
let randomWord = 'List haranging obsolete unidentifiable superbulous hyperbolie amazement fantastically'
console.log(findLongestWord(mySentence));
console.log(findLongestWord(anotherSentence));
console.log(findLongestWord(someLyrics));
console.log(findLongestWord(randomWord));*/

// Take two arrays and return values that are in both
const findUniqueValues = (arr1, arr2) => {
  let uniqueValues = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        uniqueValues.push(arr1[i]);
      }
    }
  }
  return uniqueValues;
}
let firstArray = ['Hello', 'there', 'young', 'one', 'how', 'are','you','today'];
let secondArray = ['Hello','my','gorgeous','what','are','you','up','to','today'];
console.log(findUniqueValues(firstArray, secondArray));