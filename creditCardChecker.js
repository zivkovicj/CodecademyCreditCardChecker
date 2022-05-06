// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers

const invalid1 = [, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];  // Can change first digit to 7 to test company list
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];  // Can change first digit to 7 to test company list
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

const string1 = "4539677908016808";

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = arr => {
  const arrFromInput = Array.from(arr, x => parseInt(x));
  // Double the digits in the even positions
  // Subtract 9 from those spots if needed
  const reverseArr = arrFromInput.reverse();  

  for(let i = 1; i < reverseArr.length; i+=2){
    reverseArr[i] *= 2;
    if (reverseArr[i] > 9) {
      reverseArr[i] -=9;
    }
  }
  
  // Sum all digits
  const reducedArr = reverseArr.reduce((prev, curr) => prev + curr);
  
  return reducedArr % 10 == 0 ? true : false;
}

const findInvalidCards = arr => arr.filter(x => validateCred(x) === false)

const compByDig = [
  [3,"Amex"],
  [4,"Visa"],
  [5,"Mastercard"],
  [6,"Discover"],
];

const notFoundArray = [0,1,2,7,8,9];

const checkForOtherNums = arr1 => arr1.some(item => notFoundArray.includes(item))

const idInvalidCompanies = arr => {
  const firstDigits = arr.map(elem => elem[0]);
  const resultList = compByDig.filter(x => firstDigits.includes(x[0]));
  const mappedList = resultList.map(x => x[1]);
  if (checkForOtherNums(firstDigits)) {
    mappedList.push("One Company not Found");
  }
  return mappedList;
}

const invalidList = findInvalidCards(batch);

//console.log(validateCred(valid1));
console.log(invalidList);
console.log(" ");
console.log(idInvalidCompanies(invalidList));

