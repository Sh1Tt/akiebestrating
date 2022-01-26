import Head from 'next/head'

import { useContext } from 'react'

import UserContext from '../../components/context/User'

import Sidemenu from '../../components/Sidemenu'

import Stats from '../../components/dashboard/month/stats'

import Calender from '../../components/Calender'

import dashboardStyles from '../../styles/Dashboard.module.css'

const Dashboard = ( { month, events } ) =>
{
	const { user } = useContext( UserContext )

	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Online planning and registration user dashboard" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div id="__centerfold">
				<main >
					<div className={dashboardStyles.message}>
						<h4 className={dashboardStyles.hello}>
							Welcome {user}!
						</h4>
						<div className={dashboardStyles.settings}>
							<i className="material-icons">
								edit
							</i>
							<p className={dashboardStyles.settingslink}>
								Personalize your dashboard
							</p>
						</div>
					</div>
					<div className={dashboardStyles.outercontainer}>
						<div className={dashboardStyles.innercontainer}>
							<div className={dashboardStyles.calenderWidget}>
								<div className={dashboardStyles.widget}>
									<Calender month={month} events={events} />
									<Stats month={month} events={events} />
								</div>
							</div>

							<div className={dashboardStyles.accountWidget}>
								<div className={dashboardStyles.widget}></div>
							</div>

							<div className={dashboardStyles.planningWidget}>
								<div className={dashboardStyles.widget}></div>
							</div>
						</div>
					</div>
				</main>
				<aside>
					<Sidemenu />
				</aside>
			</div>
		</>
	)

}

export const getServerSideProps = async () =>
{
	const __d = new Date()

	const yyyy = __d.getFullYear()

	const mm = `0${__d.getMonth() + 1}`.slice( -2 )

	const endpoint = {
		month: `http://api.cloudshipenterprise.net:3000/v1/month/${yyyy}/${mm}`,
		events:
		{
			basic: `http://localhost:3000/api/calender/events/basic`
		}
	}

	const month = await fetch( endpoint.month,
	{
		method: 'GET',
		headers:
		{ 
			'x-api-key' : `${process.env.DEV_API_KEY}`,
			'Accept-Encoding' : 'deflate, gzip'

		}
	} )
	.then( res => res.json() )

	const events = await fetch( endpoint.events.basic )
	.then( res => res.json() )
	.then( data => data.data )

	console.log( month )

	return {
		props:
		{
			month,
			events
		}
	}
}

export default Dashboard