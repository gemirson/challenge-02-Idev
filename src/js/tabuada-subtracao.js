let sumSub = 0;

function Debug(paramsA, paramsB, total) {
  console.log(`${paramsA} - ${paramsB} = ${total}`);
}

module.exports = function subtract(base, currentIndex) {
  this.sum = 0;
  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, base - currentIndex);
  currentIndex++;

  return sumSub;
}


