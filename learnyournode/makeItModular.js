var fs = require('fs')
var path = require('path')

module.exports = function (pathFolder, extension, callback) {
  fs.readdir(pathFolder, function(err, list) {
    if(err) {
      return callback(err)
    }
    newList = list.filter(function(file) {
      return path.extname(file) === '.' + extension
    });
    return callback(null, newList)
  });
};
