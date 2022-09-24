var express = require('express');

app = express();
app.use(express.static("public"));  //serves all static files on the localhost


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/view.js')
  });

app.listen(8080);