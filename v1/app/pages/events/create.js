import Head from 'next/head'

import { useContext } from 'react'

import UserContext from '../../components/context/User'

import Sidemenu from '../../components/Sidemenu'

import Eventform from '../../components/form/event/create'

import styles from '../../styles/Dashboard.module.css'

import pageStyles from '../../styles/Event.module.css'

export default () => (
	<>
		<Head>
			<title>Plan a new Event | Akiebestrating</title>
			<meta name="description" content="Online planning and registration user dashboard" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div id="__centerfold">
			<main>
				<Eventform />	
			</main>
			<aside>
				<Sidemenu />
			</aside>
		</div>
	</>
)