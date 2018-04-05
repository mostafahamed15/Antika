var express =require ('express');
var app = express();
var bodyParser =require('body-parser');

var message = [{text: "mmmm", owner: "mmm"},{kks: "sdasd" , dasdas : "mmsamdnmd"}  ]

app.use(bodyParser.json());
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
    next();
})

app.get('/message', (req, res)=>{
    res.json(message);
})
app.post('/message', (req, res)=>{
    res.json(message)
    console.log(req.body)
}) 
app.listen(1234)    
