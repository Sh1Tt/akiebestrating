import dbConnect from "../../../../../utils/dbConnect";

import Basicevent from "../../../../../models/Basicevent";

const Events = async ( req, res ) =>
{
	dbConnect();

	const { method } = req;

	switch (method) {
		case 'GET':
			try
			{
				const events = await Basicevent.find( {} )

				res.status( 200 ).json( { data: events } )
			
			}
			catch ( err )
			{
				res.status( 400 ).json( { error: 'Events could not be retrieved.' } )
			
			}
			
			break;
		
		case 'POST':
			try
			{
				const newEvent = await Basicevent.create( req.body )

				res.status( 201 ).json( { data: newEvent } )

			}
			catch ( err )
			{
				res.status( 400 ).json( { error: 'There was a promblem adding the new event.' } )

			}
			
			break;
		
		default:
			res.status( 404 ).json( { error: 'method not found!' } )
			
			break;
	
	}

}

export default Events;