var request = require('request');
var cheerio = require('cheerio');

var url = 'http://www.rbcroyalbank.com/products/deposits/youth-student-banking.html';
var url2 = 'http://www.rbcroyalbank.com/products/deposits/student-banking-no-limit.html';


request(url, function(err,resp,body)
{
    var accountNames = [];
    var newAccountDebits = [];
    var accountDebits = [];
    
        if (err)
        { throw err;}
    
    $ = cheerio.load(body); //creates the dom object string
    
    $('.rds-table-cell-common.rds-table-subheader.rds-bold.center.rds-black-text').each(function()
    {
        accountNames.push($(this).text());
    });
    
    $('td[class="rds-table-cell-common"]').each(function()
    {
        accountDebits.push($(this).text());
    });        
            
        

        
    for ( i = 0; i < 3; i++){
    newAccountDebits[i] = accountDebits[i];
}
        
        console.log(accountNames);
        console.log(newAccountDebits);
    }
        
        );

request(url2, function(err,resp,body)
{
    var monthlyFee0;
        if(err)
            {throw err;}
    $ = cheerio.load(body);
    monthlyFee0 = "$10.95";
    console.log(monthlyFee0);
});
//
// To DO: need to write this js object to database
// var rbc = {accountNames[0]: newAccountDebits[0],monthlyFee0};

        
     