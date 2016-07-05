var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Paper = require('./models/paper');

mongoose.connect('mongodb://localhost/kexam')
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('hello world');
});

app.get('/api/papers',function(req,res){
	Paper.getPapers(function(err,papers){
		if(err){
			throw err;
		}
		res.json(papers);
	})
});
app.post('/api/papers',function(req,res){
	var paper = req.body;
	Paper.addPaper(paper,function(err,paper){
		if(err){
			throw err;
		}
		res.json(paper);
	});
});

app.get('/api/papers/:_id', function(req,res){
	Paper.getPaperByID(req.params._id, function(err,paper){
		if(err){
			throw err;
		}
		res.json(paper);
	});
});
app.put('/api/papers/:_id',function(req,res){
	var id=req.params._id;
	var paper = req.body;
	Paper.updatePaper(id , paper,{},function(err,paper){
		if(err){
			throw err;
		}
		res.json(paper);
	});
});

app.listen(8000);
console.log("running");


