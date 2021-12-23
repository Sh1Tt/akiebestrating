import Link from 'next/link'

import calenderStyles from '../../styles/Calender.module.css'

const Day = ( { record } ) =>
{
	const getId = d => `${d.getFullYear()+0}${d.getMonth()+1}${d.getDate()+0}`

	return (
		<Link href={`/calender/date/${record.date_id}`}>
			<div className={( record.date_id == getId( new Date() ) ? calenderStyles.currentday : calenderStyles.day )} id={record.date_id}>
				<div className={calenderStyles.daycontent}>
					<h4 className={calenderStyles.number}>{record.date_day}</h4>
				</div>
			</div>
		</Link>
	)
}

export default Day