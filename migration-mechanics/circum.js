/**
 * @deprecated Use `circumference` instead
 */
function circum(radius) {
  return circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

module.exports = { circum, circumference };
