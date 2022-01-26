import dbConnect from "../../../../../utils/dbConnect";

import Basicevent from "../../../../../models/Basicevent";

const Event = async ( req, res ) =>
{
	dbConnect();

	const {
		query: { id },
		method
	} = req;

	switch ( method ) {
		case 'GET':
			try
			{
				const event = await Basicevent.findById( id )

				if ( !event ) return res.status( 400 ).json( { error: `Event [${id}] not found!` } )

				res.status( 200 ).json( { data: event } )

			}
			catch ( err )
			{
				res.status( 400 ).json( { error: `Something went wrong getting the event. event.id[${id}];` } )
			}

			break;

		case 'PUT':
			try
			{
				const event = await Basicevent.findByIdAndUpdate( id, req.body, {
					new: true,
					runValidators: true
				} )

				if ( !event ) return res.status( 400 ).json( { error: `Something went wrong! Event [${id}] not found/updated!` } )
				
				res.status( 200 ).json( { data: event } )

			}
			catch ( err )
			{
				res.status( 400 ).json( { error: `Something went wrong while trying to update event. event [${id}];` } )
			}

			break;

		case 'DELETE':
			try
			{
				const deleteEvent = await Basicevent.deleteOne( { _id: id } )

				if ( !deleteEvent ) return res.status( 400 ).json( { error: `` } )

				res.status( 200 ).json( { data: {} } )

			}
			catch ( err )
			{
				res.status( 400 ).json( { error: `` } )
			}

			break;

		default:
			res.status( 400 ).json( { error : `Oops! Something went wrong there! Have a beautiful time!` } )

			break;
	}	
}

export default Event;