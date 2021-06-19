const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
	// author: ObjectId,
	name: { type: String, require: true, max: [60, '最大60文字までです'] },
	price: Number,
	description: String,
	coverImage: String,
	heading1: {
		title: String,
		description: String
	},
	heading2: {
		title: String,
		description: String
	},
	heading3: {
		title: String,
		description: String
	}
});

module.exports = mongoose.model('Product', ProductSchema);
