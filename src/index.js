module.exports = function reverse (n) {
  return parseInt(n.toString().split('').filter((el) => el !== '-').reverse().join(''));
}
