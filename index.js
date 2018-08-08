// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(blockNumber) {
  if (blockNumber > 42) {
    var blocks = blockNumber -42; 
    return blocks * 264; 
  } else if (blockNumber < 42) {
    var block = 42 - blockNumber;
    return block * 264; 
  }
}

function distanceTravelledInFeet(beg, dest) {
  if (beg > dest) {
    var blocks = beg - dest; 
    return blocks * 264;
  }
  else if (beg < dest) {
    var block = dest - beg; 
    return block * 264;
  }
  
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination); 
  const dist = distance - 400; 
  
  if (distance < 400) {
    return 0;
  }
  else if (distance > 400 && distance < 2000) {
    return dist * 0.02; 
  }
  else if (distance > 2000 && distance < 2500) {
    return 25; 
  }
  else {
    return "cannot travel that far"; 
  }
  
  
}
