import calenderStyles from '../../styles/Calender.module.css'

const Day = ( { record } ) =>
{
	return (
		<div className={calenderStyles.day} id={record.date_id}>
			<h4 className={calenderStyles.number}>{record.date_day}</h4>
		</div>
	)
}

export default Day