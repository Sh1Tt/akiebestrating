import Link from 'next/link'

import styles from '../styles/Sidemenu.module.css'

export default () =>
{
	function toggleDropdown( identifier )
	{
		const dropdown = document.querySelector( `[data-dropdown="${identifier}"]` )

		dropdown.style.display = ( dropdown.style.display != 'none' ? 'none' : 'flex' )

	}
	const DropdownItem = ( { title, icon } ) => (
		<p className={styles.dropdownItem}>{title}{icon != null && <i className="material-icons">{icon}</i>}</p>
	)

	return (
		<>
			<div className={styles.list}>
				<div className={styles.item}>
					<Link href="/dashboard">
						<h4>
							Dashboard
						</h4>
					</Link>
				</div>
				<div className={styles.item}>
					<Link href="/dashboard">
						<h4>
							Calender
						</h4>
					</Link>
				</div>
				<div className={styles.item}>
					<h4
						onClick={e => toggleDropdown( `events` )}
						className={styles.trigger}
					>
						Events
					</h4>
				</div>
				<div 
					data-dropdown="events"
					className={styles.dropdown}
					style={{ display: 'none' }}
				>
					<Link href="/events">
						<a>
							<DropdownItem title="My events" icon="" />
						</a>
					</Link>
					<Link href="/events/create">
						<a>
							<DropdownItem title="Create event" icon="" />
						</a>
					</Link>
					<DropdownItem title="Upcoming" icon="" />
					<DropdownItem title="Passed" icon="" />
				</div>
				<div className={styles.item}>
					<h4
						onClick={e => toggleDropdown( `invites` )}
						className={styles.trigger}
					>
						Invites
					</h4>
				</div>
				<div 
					data-dropdown="invites"
					className={styles.dropdown}
					style={{ display: 'none' }}
				>
					<DropdownItem title="New" icon=""/>
					<DropdownItem title="My invites" icon="" />
				</div>
			</div>
		</>
	)

}