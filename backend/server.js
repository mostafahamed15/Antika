var express =require ('express');
var app = express();

var message = [{text: "mmmm", owner: "mmm"},{kks: "sdasd" , dasdas : "mmsamdnmd"}  ]

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res)=>{
    res.json(message);
})

app.listen(1234)
