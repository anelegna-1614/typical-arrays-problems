
exports.min = function min (array) {
  if (array === [] || array === undefined || array.length === 0) {
  return 0;
} 
return Math.min.apply(this, array);
}

exports.max = function max (array) {
  if (array === [] || array === undefined || array.length === 0) {
    return 0;
  } return Math.max.apply(this, array);
}

exports.avg = function avg (array) {
  if (array === [] || array === undefined || array.length === 0) {
    return 0;
  } return array.reduce((acumulator, currentValue) => (acumulator + currentValue)) / array.length;
}
