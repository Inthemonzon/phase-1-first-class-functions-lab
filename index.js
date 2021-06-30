// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = (array) => array.slice(0,2)

const returnLastTwoDrivers = (array) => array.slice(array.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => (fare) => int * fare;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (array, selectingDrivers) {
    let randomNumber = Math.random();
    Math.round(randomNumber);
    return selectingDrivers(array);
}