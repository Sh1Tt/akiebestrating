import Day from './Day'

import calenderStyles from '../../styles/Calender.module.css'

const Week = ( { records } ) =>
{
	return (
		<div className={calenderStyles.week}>
			{records.map( record => <Day record={record} /> )}
		</div>
	)

}

export default Week