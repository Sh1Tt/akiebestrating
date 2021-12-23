import Head from 'next/head'

import { useContext } from 'react'

import UserContext from '../../components/context/User'

import Calender from '../../components/Calender'

import Stats from '../../components/dashboard/month/stats'

import styles from '../../styles/Dashboard.module.css'

const Dashboard = ( { month } ) =>
{
	const { user } = useContext( UserContext )

	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Online planning and registration user dashboard" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main >
				<div className={styles.message}>
					<h4 className={styles.hello}>
						Welcome {user}!
					</h4>
					<div className={styles.settings}>
						<p>Personalize your dashboard</p>
					</div>
				</div>
				<div className={styles.outercontainer}>
					<div className={styles.innercontainer}>
						<div className={styles.calenderWidget}>
							<div className={styles.widget}>
								<Calender month={month} />
								<Stats month={month} />
							</div>
						</div>

						<div className={styles.accountWidget}>
							<div className={styles.widget}></div>
						</div>

						<div className={styles.planningWidget}>
							<div className={styles.widget}></div>
						</div>
					</div>
				</div>
			</main>
			<aside>
				<div className={styles.aside}>
					<div className={styles.sidemenu}>
						<div className={styles.sidemenuoption}>
							<h4>Agenda</h4>
							<ul className={styles.submenu}>
								<li key={0}>Create event</li>
							</ul>
						</div>
					</div>
				</div>
			</aside>
		</>
	)

}

export const getServerSideProps = async () =>
{
	const __d = new Date()

	const endpoint = `http://api.cloudshipenterprise.net:3000/month/${__d.getFullYear()}/${__d.getMonth() + 1}`

	const month = await fetch( endpoint )
	.then( res => res.json() )

	return {
		props:
		{
			month
		}
	}
}

export default Dashboard