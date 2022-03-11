const ftoc = function(far) {
  const cel = (far - 32) * (5/9);
  return Math.ceil(cel * 10) / 10;
};

const ctof = function(cel) {
  const far = (cel * (9/5)) + 32;
  return Math.ceil(far * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
