// const fs = require('fs');

// fs.readFile('./userapi.json',  'utf-8', (err, jsonString) =>{
//     if (err) {
//         console.log(err);
//     }else{
//         try{

        
//         const data = JSON.parse(jsonString);
//         console.log(data.result);
//         }catch (err) {
//             console.log('Error parsing JSON', err);
//         }
//     }    
// }).listen(8080);

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('userapi.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  });
}).listen(8080);
