// getPercents.js
function getPercents(percent, number) {
  if (typeof percent !== 'number' || typeof number !== 'number') {
    throw new Error('Both arguments must be numbers');
  }

  return (number * percent) / 100;
}

module.exports = getPercents;
