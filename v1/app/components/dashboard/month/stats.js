import dashboardStyle from "../../../styles/Dashboard.module.css";

import dateId from "../../../utils/dateId";

const Dashboardstats = ( { events } ) =>
{
	const currentId = dateId( new Date() )

	const today = events.filter( event => event.dateid == currentId )

	return (
		<>
			<div className={dashboardStyle.zline}></div>
			<div id="planningstats" className={dashboardStyle.statsWidget}>
				<h2>
					{new Date().toLocaleDateString( process.env.LANG || 'en-US', { day: '2-digit', month: 'long', year: 'numeric' } )}
				</h2>
				<p>
					Today you have <code>{today.length}</code> events planned
				</p>
			</div>
		</>
	)
}

export default Dashboardstats;