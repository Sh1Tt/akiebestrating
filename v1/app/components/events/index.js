import { useState } from 'react'

import Details from './Details'

import dashboardStyles from '../../styles/Dashboard.module.css'

import eventsStyles from '../../styles/Events.module.css'

export default ( { events } ) =>
{
	const [ event, selectEvent ] = useState( events[0] )

	return (
		<>
			<div className={eventsStyles.message}>

			</div>
			<div className={eventsStyles.outercontainer}>
				<div className={eventsStyles.innercontainer}>
					<div className={eventsStyles.header}>
						<Details event={event} />
					</div>
					<div className={eventsStyles.main}>
						<div className={eventsStyles.controller}>
							<div className={eventsStyles.filter}>
								<h5>
									Filter:
								</h5>
								<p>
									date
								</p>

							</div>
							<div className={eventsStyles.search}>
								<input
									type="text"
									name="events-search"
									placeholder="Search.."
								/>
								<i className="material-icons">
									search
								</i>
							</div>
						</div>
						<div className={eventsStyles.content}>
							<div className={eventsStyles.list}>
							{events.map( ( event, i ) => (
								<div 
									key={event._id}
									id={event._id}
									className={eventsStyles.item}
									onDoubleClick={e => selectEvent( event )}
								>
									<h4>{event.title}</h4>
									<p>{event.dateid}</p>
								</div>
							) )}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)

}