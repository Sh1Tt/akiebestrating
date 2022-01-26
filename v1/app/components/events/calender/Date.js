import eventStyles from "../../../styles/Event.module.css";

const Dateevent = ( { data } ) => (
	<div 
		className={eventStyles.calenderdate}
		style={ { backgroundColor : data.color } }
	/>
)

export default Dateevent;