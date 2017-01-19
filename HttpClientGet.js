var client = 
var url = process.argv[2]

http.get(url, function(response){
  console.log(response)
})
