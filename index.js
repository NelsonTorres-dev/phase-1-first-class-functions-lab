// Code your solution in this file!

//here the array's name is drivers. the array of names is assigned to drivers therefore we pass drivers array to the anonymous function and because it takes only one argument we ommit the parenthesis.
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

// function returnLastTwoDrivers(drivers){
//     return drivers.slice(2, 4);
// }
const returnLastTwoDrivers = drivers => drivers.slice(2, 4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// const createFareMultiplier = x => {
//     return () => x*x
// }

const createFareMultiplier = () => (x => x ** 2)

const fareDoubler = createFareMultiplier => createFareMultiplier * 2


const fareTripler = createFareMultiplier => createFareMultiplier * 3

function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    // return returnLastTwoDrivers(drivers)
    return returnLastTwoDrivers(drivers)
}

