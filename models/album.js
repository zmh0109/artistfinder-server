var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	artistId: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: false
	},
	releaseDate: {
		type: Date,
		required: false
	},
	tracks: {
		type: [String],
		required: false
	}
	
});

module.exports = mongoose.model('Album', AlbumSchema);