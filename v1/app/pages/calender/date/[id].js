export default function calenderDate( { date } )
{
	return (
		<>
			<p>{date.date_day} {date.date_name_month} {date.date_year}</p>
		</>
	)

}

export async function getServerSideProps( { params } )
{
	const endpoint = `http://api.cloudshipenterprise.net:3000/date/${params.id}`
	
	const date = await fetch( endpoint )
	.then( res => res.json() )
	.then( arr => arr[0] )

	return {
		props: {
			date,
			fallback: false,
		}
	}

}