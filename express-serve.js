exports.__esModule = true;
var express = require("express");
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
var upload = multer({ storage: storage });
var app = express();
app.use(express.static('dist'));
var cpUpload = upload.fields([{ name: 'imgfile', maxCount: 12 }]);

app.get('/',function(req, res) {

    res.send('Hello World');

});
app.post('/uploadimg', function(req, res, next) {
    
 res.send('post img')

   
})

var server = app.listen(9999, 'localhost', function() {
    var host = server.address().address
  var port = server.address().port;
   console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
    console.log('server is running at port 9999...');
});