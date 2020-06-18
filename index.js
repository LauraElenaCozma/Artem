const express = require('express')
const app = express()
const port = 3000

var auctionText = require('./items_artworks.json')

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
  });

app.get('/', (req, res) => res.send('Hello World!'))
//am facut un endpoint nou de tip post:
app.post('/', (req, res) => {

    res.send({Status:"OK"});
})


app.get('/auction', (req, res) => {
    
  res.send(auctionText);
})


var fs = require('fs'); //cu fs scriu in fisiere
app.post('/auction' , function(req , res){
    var date = fs.readFileSync('./items_artworks.json');
    var ob = JSON.parse(date);
    ob.push(req.body);
    fs.writeFileSync('./items_artworks.json' , JSON.stringify(ob));
    auctionText = ob;
    res.send({Status:"OK"});
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))