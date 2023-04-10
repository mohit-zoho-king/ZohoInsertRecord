const axios = require('axios');
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.apilayer.com/exchangerates_data/convert?to=INR&from=USD&amount=100&date =10-04-2023',
  'headers': {
    'apikey': 'Your Currency Exchange API Key'
  }
};

  request(options, function (error, response) {
    if (error) throw new Error(error);
    const body = JSON.parse(response.body);
console.log(body.query);
let data = JSON.stringify({
"data": [
  
{
"Last_Name": body.query.from,
"Company": body.query.to
}]
})
       postRec(data); 
  });

function postRec(data){
    var accesstokendata = "Your Access token";
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://www.zohoapis.in/crm/v2.1/Leads',
    headers: { 
      'Authorization': 'Zoho-oauthtoken '+accesstokendata, 
      'Content-Type': 'application/json'
  },
    data : data
  };

  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}
