import dashboardStyle from '../../../styles/Dashboard.module.css'

const Stats = props =>
{
	return (
		<div id="planningstats" className={dashboardStyle.statscontainer}>
			<div className="zline" className={dashboardStyle.zline}></div>
			<h4>This month:</h4>

		</div>
	)
}

export default Stats