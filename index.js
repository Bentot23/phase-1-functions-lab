// Code your solution in this file!
function distanceFromHqInBlocks(bStart) {
    if(bStart > 42) 
        return bStart - 42
     else(bStart < 42) 
        return 42 - bStart
}
function distanceFromHqInFeet(fStart) {
    if(fStart > 42) {
        return (fStart - 42) * 264;
    } else(fStart < 42) 
        return (42 - fStart) * 264;
}
function distanceTravelledInFeet(start, destination) {
    if(start > destination) {
        return (start - destination) * 264;
    } else(start < destination)
        return (destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
    let blockByFeet = 264;
    let blockDistance = Math.abs(start - destination);
    let distanceTravelled = blockDistance * blockByFeet;
    if(distanceTravelled < 400) {
        console.log('gives customer free sample')
        return 0
    } else if(distanceTravelled > 400 && distanceTravelled <= 2000) {
        return ((distanceTravelled - 400)* 0.02);
    } else if( distanceTravelled > 2000 && distanceTravelled <=2500) {
        return 25;
    } else(distanceTravelled > 2500) 
        return 'cannot travel that far'
}