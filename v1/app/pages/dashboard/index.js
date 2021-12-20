import Head from 'next/head'

import Calender from '../../components/Calender'

import styles from '../../styles/Dashboard.module.css'

export default function Dashboard ( { month } ) {
	const user = {
		id: 1,
		name: 'Maurice'
	}

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
						Welcome {user.name}!
					</h4>
				</div>
				<div className={styles.outercontainer}>
					<div className={styles.innercontainer}>
						<div className={styles.calenderWidget}>
							<div  className={styles.widget}>
								<Calender month={month} />
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
		</>
	)

}

export const getStaticProps = async 	() =>
{
	const res = await fetch( `http://api.cloudshipenterprise.net:3000/month/2021/12` )

	const month = await res.json()

	return {
		props:
		{
			month
		}
	}	
}