const data = require('../assets/data');

function getProducts(query) {
  let filteredData = []

  data.forEach((e) => {
    if (containsSubstring(e.name,query.q)) {
      filteredData.push(e)
    }
  })

  return filteredData
}

function containsSubstring(string, subString) {
  const capString = string.toUpperCase()
  const capSubString = subString.toUpperCase()
  return capString.includes(capSubString)
}

module.exports = { getProducts };
