import Day from "./Day";

import calenderStyles from '../../styles/Calender.module.css'

const Week = ( { records, events } ) =>
{
	return (
		<div className={calenderStyles.week}>
			<div className={calenderStyles.weeknumber}>{records[0].date_week}</div>
			{records.map( record => (
				<Day 	key={record.date_id+'_'+record.date_weekday} 
						record={record}
						events={events.filter( event => event.dateid == record.date_id )}
				/>
			) )}
		</div>
	)

}

export default Week;