var makeItModular = require('./makeItModular.js')
var pathFolder = process.argv[2]
var extension = process.argv[3]

makeItModular(pathFolder, extension, function(err, list) {
  if(err) {
    return callback(err);
  }

  list.forEach(function (file) {
    console.log(file);
  });
});
