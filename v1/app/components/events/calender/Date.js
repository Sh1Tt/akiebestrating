import eventStyles from '../../../styles/Event.module.css'

const dateEvent = ( { data } ) => (
	<div 
		className={eventStyles.calenderdate}
		style={ { backgroundColor : data.color } }
	/>
)

export default dateEvent