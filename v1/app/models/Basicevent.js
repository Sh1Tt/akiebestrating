const mongoose = require( 'mongoose' )

const BasiceventSchema = new mongoose.Schema( {
	dateid:
	{
		type: Number,
		required: [ true, 'Please select a day in the future!' ],
		maxlength: [ 8, 'a date_id has 8 numbers!' ],
	},
	title:
	{
		type: String,
		required: [ true, 'Please enter a title for your event!' ],
		unique: true,
		trim: true,
		maxlength: [ 40, 'The title can contain no more than 40 characters!' ],
	},
	description:
	{
		type: String,
		required: [ true, 'Please enter a description to the event!' ],
		maxlength: [ 200, 'The description can not exceed 200 characters!' ],
	},
	color:
	{
		type: String,
		required: [ true, 'Pick a color for the new event please!' ]
	}
} )

module.exports = mongoose.models.Basicevent || mongoose.model( 'Basicevent', BasiceventSchema );