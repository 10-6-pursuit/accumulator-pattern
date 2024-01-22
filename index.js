/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {


  let accumulatorCount = rolls.reduce(function (accumulator, curValue) {

    if (!isNaN(curValue)) {

      accumulator++;

    }
    return accumulator;
  }, 0);

  if (accumulatorCount == rolls.length)
    return true;
  else return false;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {


  //let accumulator = 0;
  let final = rolls.reduce((accumulator, currentValue) => {
    if (value == currentValue) {
      accumulator = currentValue;
    }
    return accumulator;
  }, null);

  if (final == null)
    return null;
  else return final;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {

  let newArray = [];
  rolls.reduce((accumulator, currentValue) => {
    if (currentValue >= lowest)
      newArray.push(currentValue)
  }, 0);
  return newArray;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  const rollCount = {};
  let roll, i;

  const removeDuplicatedArr = rolls.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);


  for (i = 0; i < removeDuplicatedArr.length; i++) {
    roll = removeDuplicatedArr[i];
    let finalCount = rolls.reduce((accumulator, currentValue) => {
      if (currentValue == roll)
        accumulator++;

      return accumulator
    }, 0);
    rollCount[roll] = finalCount;
  }
  return rollCount;
}

console.log(getRollCounts([1, 2, 3, 1]));

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
