import Link from 'next/link'

import Event from '../events/calender/Date'

import calenderStyles from '../../styles/Calender.module.css'

const Day = ( { record, events } ) =>
{
	const getId = d => `${d.getFullYear()+0}${d.getMonth()+1}${d.getDate()+0}`

	return (
		<div 
			className={( record.date_id == getId( new Date() ) ? calenderStyles.currentday : calenderStyles.day )} 
			id={record.date_id}
			onClick={e => alert( record.date_full )}
		>
			<div className={calenderStyles.daycontent}>
				<h4 className={( record.date_holiday ? calenderStyles.holidayNo : calenderStyles.number )}>{record.date_day}</h4>
				{events.map( event => (
					<Event key={event._id} data={event} /> 
				) )}
			</div>
		</div>
	)
}

export default Day