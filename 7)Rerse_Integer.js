var reverse = function (x) {
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  const reversed_x = parseInt(x.toString().split("").reverse().join(""));
  const result = reversed_x * sign;
  if (result < INT_MIN || result > INT_MAX) {
    return 0;
  }

  return result;
};
