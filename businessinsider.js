
var request = require('request');
var cheerio = require('cheerio');


var url = 'http://www.businessinsider.com/moneygame';

request(url, function(err,resp,body) 
    {
       var values = [];
			 var newvalues = [];
			 
			if (err) 
					throw err;
				
			$ = cheerio.load(body); //create the dom object string
			
			
			$('span.hot').each(function(i, elem) {
					values[i] = $(this).text();
					
			}); values = values.filter(function(e){return e}); //remove empty elements
			
			/*
			$('span.hot').each(function() {
					values.push($(this).text());
			}); 
			
		 
			var arrayLength = values.length;
			for (var i = 0; i < arrayLength; i++) {
				var string = values[i];
				
				if (string.indexOf('hot') != -1){
					newvalues.push(values[i]);
				}
				
			}
			*/
			
			console.log(values);
			//console.log(newvalues);
			
			// convert from array to json
			var pluginArrayArg = new Array();
			for (var i = 0; i < values.length; i++) {
				var jsonArg = new Object();
				jsonArg.name = i;
				jsonArg.value = values[i];
			
				pluginArrayArg.push(jsonArg);
			}
			
			var myData = JSON.parse(JSON.stringify(pluginArrayArg));
			
			// write json to a file (destination)
			var fs = require('fs');

			// get current datetime
			var now = new Date();
			var datetime = now.getFullYear() + '-' + ('0' + (now.getMonth() + 1)).slice(-2) + '-' + ('0' + now.getDate()).slice(-2); // YYYY-MM-DD
			
			var outputFilename = '/var/www/html/_mylab/akash_sharma/mytest/collections/businessinsider/' + datetime + '.json';

			fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
					if(err) {
						console.log(err);
					} 
					else {
						console.log("JSON saved to " + outputFilename);
					}
			}); 
			
    });
		
	
		