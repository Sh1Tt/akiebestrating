import Head from "next/head";

import Footer from "./Footer";

import styles from "../styles/Layout.module.css";

import Nav from "./Nav";

const Layout = ( { children, user } ) => (
	<>
		<Head>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
		</Head>	
		<Nav user={user} />
		{children}
		<Footer />
	</>
)

export default Layout;