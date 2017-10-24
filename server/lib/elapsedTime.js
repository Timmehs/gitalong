const denominators = {
  m: 60000,
  s: 1000,
  h: 3600000
}

module.exports = function(startTime, unit) {
  if (Object.keys(denominators).indexOf(unit) === -1) {
    throw Error('Unit must be (s)econds, (m)inutes, or (h)ours')
  }
  return ((Date.now() - startTime) / denominators[unit]).toPrecision(3)
}
