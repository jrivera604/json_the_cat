const request = require('request');
const url  = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedName = process.argv[2];


const fetchBreedDescription = function(breedName, callback) {

  request(url+breedName, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response) {
    
      const data = JSON.parse(body);
      if (data.length === 0) {
        return callback(`The cat breed ${breedName} does not exist`, null);
      } else {
        return callback(null, data[0].description);
      }
  
    }
  });
};

module.exports = fetchBreedDescription;