import Week from "./calender/Week";

import calenderStyles from "../styles/Calender.module.css";

const Calender = ( { month, events }) =>
{
	const weeks = [ ...new Set( month.map( record => record.date_week ) ) ];
	
	const viewHandler = e =>
	{
		alert( `You selected view: ${e.target.name}` );
	}

	return (
		<div className={calenderStyles.outercontainer}>
			<div className={calenderStyles.header}>
				<div>
					<div className={calenderStyles.title}>
						<h2>
							Agenda
						</h2>
						<div className={calenderStyles.viewcontrol}>
							<input 	type="button" 
									name="week" 
									value="Week"
									className={calenderStyles.viewbutton}
									onClick={e => viewHandler( e )}
							/>
							<input 	type="button" 
									name="month" 
									value="Month"
									className={calenderStyles.viewbutton}
									onClick={e => viewHandler( e )}
							/>
						</div>
					</div>
					<p>
						{month[7].date_name_month} {month[7].date_year}
					</p>
				</div>
			</div>
			<div className={calenderStyles.innercontainer}>
				{weeks.map( wkNo => 
				{
					const records = [ ...month.filter( record => record.date_week === wkNo ) ]

					return (
						<Week 	
							key={wkNo} 
							records={records}
							events={events}
						/>
					)

				} )}
			</div>
		</div>
	);

}

export default Calender;