/**
 * Created by akashsharma on 2016-09-02.
 */

var request = require('request');
var cheerio = require('cheerio');

var url = 'https://www.cibc.com/en/personal-banking/bank-accounts/student-banking-offers.html';

request(url, function(err,resp,body)
{
    var accountNames = [];
    var theOther = [];
    var cibc = {};

    if (err)
    { throw err;}

    $ = cheerio.load(body);

   $('.banner-product-name').each(function() {
       accountNames.push($(this).text());
   });

    console.log(accountNames);

    $(".parbase.base.longformtext > li").each(function() {
    theOther.push($(this).text());

});
    //push this to database
    cibc = {accountNames:"unlimited free trans.",fee:"no fee"};

});

