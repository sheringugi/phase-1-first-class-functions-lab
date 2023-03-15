const drivers= ["Joe", "Naina", "Kyle", "Shira", "Kate", "Mira"]
const returnFirstTwoDrivers= function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers= function(drivers){
    return drivers.slice(-2)
}
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier= function(fare){
return function (value) {
    return fare* value
 }
}
const fareDoubler= createFareMultiplier(2)
const fareTripler= createFareMultiplier(3)
const fn = [returnFirstTwoDrivers, returnLastTwoDrivers]
function selectDifferentDrivers(drivers, fn){
    if (fn===returnFirstTwoDrivers){
return drivers.slice(0,2)
}
else if (fn===returnLastTwoDrivers){
    return drivers.slice(-2)
    }
}