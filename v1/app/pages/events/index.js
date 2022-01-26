import Head from "next/head";

import { useContext } from "react";

import UserContext from "../../components/context/User";

import Sidemenu from "../../components/Sidemenu";

import Events from "../../components/events";

import eventsStyles from "../../styles/Event.module.css";

const Eventspage = ( { events } ) => (
	<>
		<Head>
			<title>My Events | Akiebestrating</title>
			<meta name="description" content="Online planning and registration user dashboard" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div id="__centerfold">
			<main>
				<Events events={events} />	
			</main>
			<aside>
				<Sidemenu />
			</aside>
		</div>
	</>
)

export const getServerSideProps = async () =>
{
	const endpoint = {
		events:
		{
			basic: `http://localhost:3000/api/calender/events/basic`
		}
	}

	const events = await fetch( endpoint.events.basic )
	.then( res => res.json() )
	.then( data => data.data )

	return {
		props:
		{
			events
		}
	}
}

export default Eventspage;