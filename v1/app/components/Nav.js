import Head from "next/head";

import Link from "next/link";

import Image from "next/image";

import navStyles from "../styles/Nav.module.css";

import Logo from "../public/images/temp-logo.png";

const Nav = () =>
{
	const Btn = ( { route, title } ) =>
	{
		return (
			<>
				<Link href={route}>
					<a className={navStyles.topBtn}>
						{title}
					</a>
				</Link>
			</>
		)

	}
	
	const Icon = ( { route, icon } ) =>
	{
		return (
			<>
				<Link href={route}>
					<a className={navStyles.topIcon}>
						<i className="material-icons">{icon}</i>
					</a>
				</Link>
			</>
		)

	}

	return (
		<nav>
			<Link href="/"> 
				<a className={navStyles.homelink}>
					<Image 
						src={Logo}
						className={navStyles.logo}
						priority
						placeholder="blur"
						layout="fill"
					/>
				</a>
			</Link>
			<div className={navStyles.menuIcon}>
				<i className="material-icons">menu</i>
			</div>
			<div className={navStyles.menu}>
				<Btn route="/dashboard" title="Dashboard" />
				<Btn route="/" title="Calender" />
				<Btn route="/" title="Events" />
				<Btn route="/" title="Workstates" />
				<Btn route="/" title="Home" />
				<Btn route="/" title="about Us" />
				<Icon route="/" icon="notifications"  />
				<Icon route="/signin" icon="person" />
			</div>
		</nav>
	)
}

export default Nav