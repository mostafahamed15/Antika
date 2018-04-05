var express =require ('express');
var app = express();

var message = [{text: "mmmm", owner: "mmm"},{kks: "sdasd" , dasdas : "mmsamdnmd"}  ]

app.get('/', (req, res)=>{
    res.json(message);
})

app.listen(1234)
