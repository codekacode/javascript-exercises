const leapYears = function(years) {
  return years % 4 === 0 && (years % 100 !== 0 || years % 400 == 0);
}

module.exports = leapYears
