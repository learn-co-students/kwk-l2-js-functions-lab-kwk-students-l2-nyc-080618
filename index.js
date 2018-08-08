// Code your solution in this file!
function distanceFromHqInBlocks(street){
  var results = street -42;
  if (results < 0){
    return results * -1;
  }else{
    return results;
  }
}

distanceFromHqInBlocks(street);

function distanceFromHqInFeet(block){
  return (distanceFromHqInBlocks(block)* 264);
}

distanceFromHqInFeet(block);

function distanceTravelledInFeet(start, end) {
  var results = ((end-start)*264);
  if (results < 0){
    return results * -1;
  }else{
    return results;
  }
}

distanceTravelledInFeet(start, end);

function calculatesFarePrice(start, destination) {
  var feetTravelled = distanceTravelledInFeet(start, destination);
  if (feetTravelled > 400 && feetTravelled <= 2000) {
    return 0.02 * (feetTravelled-400);
  } else if (feetTravelled > 2000 && feetTravelled <=2500) {
    return 25;
  } else if (feetTravelled > 2500) {
    return "cannot travel that far";
  } else {
    return 0;
  }
  
}