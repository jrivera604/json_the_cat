const request = require('request');
const url  = 'https://api.thecatapi.com/v1/breeds/search?q=';
const input = process.argv.slice(2);
const search = url + input;



const fetchBreed = () => {
  request(search, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    if (response) {
    
      const data = JSON.parse(body);
      if (data.length === 0) {
        return console.log(`The cat breed ${input} does not exist`);
      } else {
        return console.log(data[0].description);
      }
  
    }
  });
};

fetchBreed();