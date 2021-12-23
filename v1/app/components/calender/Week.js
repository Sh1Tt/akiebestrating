import Day from './Day'

import calenderStyles from '../../styles/Calender.module.css'

const Week = ( { records } ) =>
{
	return (
		<div className={calenderStyles.week}>
			<div className={calenderStyles.weeknumber}>{records[0].date_week}</div>
			{records.map( record => <Day record={record} /> )}
		</div>
	)

}

export default Week