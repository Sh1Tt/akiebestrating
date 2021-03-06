import eventsStyles from "../../styles/Events.module.css";

const Details = ( { event } ) => (
	<div className={eventsStyles.details}>
		<div className={eventsStyles.title}>
			<h1>
				{event.title}<
			/h1>
			<div 
				className="color"
				style={{ backgroundColor: event.color }}
			/>
		</div>
		<div className="content">
			<p>
				{event.description}
			</p>
		</div>
	</div>
)

export default Details;