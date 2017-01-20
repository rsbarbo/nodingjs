var fs = require('fs')

var file = process.argv[2]

fs.readFile(file, function (err, data) {
  if (err) throw err;

  var stringfied = data.toString();
  console.log(stringfied.split("\n").length - 1);
});
