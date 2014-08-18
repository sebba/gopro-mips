var Camera = require('gopro').Camera
var cam = new Camera('10.5.5.9','linkem123')

var http = require('http');
var fs = require('fs');

//cam.startCapture().then(function(){cam.stopCapture()})

//cam.switch2Photo().then(function(){cam.startCapture()})

var path = "/DCIM/999GOPRO/"

//var pippo = cam.ls(path)

var pippo  = cam.powerOff();

//var pluto = fs.readdir("http://10.5.5.9:8080/DCIM/999GOPRO/", function(err, files){console.log(files[0])})

/*var file = fs.createWriteStream("imgscaricata2.jpg");
var request = http.get("http://10.5.5.9:8080/DCIM/999GOPRO/GOPR0051.JPG", function(response) {
  response.pipe(file);
});

var file2 = fs.createWriteStream("vidscaricato1.mp4");
var request2 = http.get("http://10.5.5.9:8080/DCIM/999GOPRO/GOPR0064.MP4", function(response) {
  response.pipe(file2);
});*/
console.log("fine")

