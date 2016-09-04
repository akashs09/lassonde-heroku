var request = require('request');
var cheerio = require('cheerio');

var url = 'https://www.tdcanadatrust.com/products-services/banking/student-advice/student-banking.jsp';

request(url, function(err, resp, body) {
    var tdaccountName = [];
    var tdAccountName = [];
    var tdMonthlyFee = [];
    var td = {};
    if (err) {
        throw err;
    }

    $ = cheerio.load(body);
    $('.td-padding-xs-top-20.td-xs-centered.td-padding-md-top-20.td-padding-md-bottom-20.td-md-left.td-padding-md-top-0.td-margin-xs-top-0').each(function() 
    {
    tdaccountName.push($(this).text());
    });
    tdAccountName = tdaccountName[1];
    $("ul.td-check-list.td-check-list.td-padding-top-10 ").each(function()
    {
        tdMonthlyFee.push($(this).text());
        console.log(tdMonthlyFee);
    }    
            );
    console.log(tdMonthlyFee[0]);
   var s =  $("ul.td-check-list.td-check-list.td-padding-top-10");
   // console.log(s.text());

    console.log(tdAccountName);

    // //this is what i need pushed to mongo db
    // td = {tdAccountName: "25 free trans.","no fee"};
});



