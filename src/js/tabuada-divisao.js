
function Debug(paramsA, paramsB, total) {
  console.log(`${paramsA} - ${paramsB} : ${total}`);
}

module.exports = function dividir(base, currentIndex) {

  this.sum = 0
  this.sum += base + currentIndex;
  Debug(base, currentIndex, (base / currentIndex).toFixed(1));
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, (base / currentIndex).toFixed(1));
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, (base / currentIndex).toFixed(1));
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, (base / currentIndex).toFixed(1));
  currentIndex++;

  this.sum += base + currentIndex;
  Debug(base, currentIndex, (base / currentIndex).toFixed(1));
  currentIndex++;

  return sum;
}

