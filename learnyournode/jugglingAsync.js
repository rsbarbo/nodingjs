var bl = require('bl')
var http = require('http');

var pArgvCount = process.argv.length
var processArgv = process.argv

var counter = 0
var results = new Array();


function httpGet (index) {

   http.get(processArgv[2 + index], function(response){
      response.pipe(bl(function (err, data) {
         if (err) throw err;

         results[index] = data.toString();
         counter++


         if ( counter === 3 ) {
            for (i = 0; i < 3; i++) {
               console.log(results[i])
            };
         };
      }));
   });
}


for (var index = 0; index < 3; index++) {
   httpGet(index)
};
