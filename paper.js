var mongoose = require('mongoose');

var paperSchema = mongoose.Schema({
	paperid:{
		type:String,
		required:true
	},
	papername:{
		type:String,
		required:true
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Paper = module.exports = mongoose.model('Paper',paperSchema);

//Get Papers
module.exports.getPapers = function(callback, limit){
	Paper.find(callback).limit(limit);
}

//Get paper
module.exports.getPaperByID = function(id,callback){
	Paper.findById(id, callback);
}
//Add Paper
module.exports.addPaper = function(paper,callback){
	Paper.create(paper,callback);
}
//Update Paper
module.exports.updatePaper = function(id,paper,options,callback){
	var query ={_id: id};
	var update = {
		paperid:paper.paperid,
		papername:paper.papername

	}
	Paper.findOneAndUpdate(query, update, options, callback);

}