// Code your solution in this file!
const driversArray = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function (driversArray) {
return [driversArray[0], driversArray[1]];
}

const returnLastTwoDrivers = function (driversArray) {
return [driversArray[driversArray.length -2], driversArray[driversArray.length -1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (int) {
return function (fare) {
  return fare * int;
 }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (driversArray, returnFirstTwoDrivers) {
return returnFirstTwoDrivers(driversArray);
}
