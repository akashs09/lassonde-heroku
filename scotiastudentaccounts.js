/**
 * Created by akashsharma on 2016-09-02.
 */

/**
 * Created by akashsharma on 2016-09-02.
 */

var request = require('request');
var cheerio = require('cheerio');

var url = 'http://www.scotiabank.com/ca/en/0,,14,00.html';

request(url, function(err,resp,body)
{
    var accountNames = [];
    var theOther = [];
    var scotia = {};

    if (err)
    { throw err;}

    $ = cheerio.load(body);

    $('.account-title-block').each(function() {
        accountNames.push($(this).text());
    });

    accountNames = accountNames[0];

    console.log(accountNames);

    $(".price-block").each(function() {
        theOther.push($(this).text());

    });
    theOther = theOther[0];
    console.log(theOther);


    //push this to database

    scotia = {accountNames:"unlimited debits", fee:theOther};
});

