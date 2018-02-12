/*
Author: Gokturk Enez
Mail: hi@gokturkenez.com.tr
Description: PayU Turkey Card Info v1 Node JS Sample Code

*/
Merchant =  "OPU_TEST";
SecretKey = "SECRET_KEY";
Bin = "557829";

var TimeStamp = Math.floor(Date.now() / 1000);

HashString = Merchant + TimeStamp;
var crypto = require('crypto')
    , data = HashString
    , secretkey = SecretKey

    crypto.createHmac('sha256', secretkey).update(data).digest('hex')


EndPointURL = 'https://secure.payu.com.tr/api/card-info/v1/'+Bin+"?merchant="+Merchant+"&timestamp="+TimeStamp+"&signature="+signature

var request = require('request');
// Set the headers
var headers = {
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: EndPointURL,
    method: 'GET',
    headers: headers,
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        var json_body = JSON.parse(body);
        console.log(json_body)
    }
})