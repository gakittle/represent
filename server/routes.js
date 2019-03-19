const axios = require('axios');
const { GCI_API_KEY } = require('../config.js');

const getReps = (address, cb) => {
  const queryURL = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${GCI_API_KEY}`;
  axios(queryURL)
    .then(response => {
      cb(null, response.data);
    })
    .catch(error => cb(error, null));
};

module.exports.getReps = getReps;
