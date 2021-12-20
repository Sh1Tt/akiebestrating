import Link from 'next/link'

import navStyles from '../styles/Nav.module.css'

const Nav = () =>
{
	return (
		<nav>
			<ul className={navStyles.menu}>
				<Link href='/'>Home</Link>
				<Link href='/dashboard/'>Dashboard</Link>
				<Link href='/'>User</Link>
				<Link href='/'>Info</Link>
				<Link href='/'>contact</Link>
			</ul>
		</nav>
	)
}

export default Nav