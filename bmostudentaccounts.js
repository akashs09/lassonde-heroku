/**
 * Created by akashsharma on 2016-09-02.
 */
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
    var bmo = {};

    if (err)
    { throw err;}

    $ = cheerio.load(body);








    //push this to database

    bmo = {"BMO Student Account": "free trans.","fee":"free"};
});

