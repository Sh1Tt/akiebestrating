import Week from './calender/Week'

import calenderStyles from '../styles/Calender.module.css'

const Calender = ( { month }) =>
{
	const weeks = [ ...new Set( month.map( day => day.date_week ) ) ]
	
	return (
		<div className={calenderStyles.outercontainer}>
			<div className={calenderStyles.header}>
				<div>
					<h2>Agenda</h2>
					<p>{month[7].date_name_month} {month[7].date_year}</p>
				</div>
			</div>
			<div className={calenderStyles.innercontainer}>
				{weeks.map( week => <Week records={[...month.filter( record => record.date_week === week )]}/> )}
			</div>
		</div>
	)

}

export default Calender