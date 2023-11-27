import styles from "./mainPageStyles.module.css";
export default function Home() {
	return (
		<main>
			<div className='executive-center-dashboard-outline'>
				<h2>
					Outline of the executive center module dashboard for the medical
					clinic, along with additional details on what to include in each page
					and recommended packages/libraries to use
				</h2>

				<div className='main-home-link'>
					<h3>Main Home Link</h3>
					<p>
						This page should provide a high-level overview of the clinic s
						operations, including key metrics such as:
					</p>

					<ul>
						<li>
							Patient Volume: Display a line chart showing the number of patient
							visits over time.
						</li>
						<li>
							Staffing Levels: Show a breakdown of the number of doctors,
							nurses, and other staff by department.
						</li>
						<li>
							Equipment Utilization: Display a pie chart showing the percentage
							of utilization for each type of medical equipment.
						</li>
					</ul>
				</div>

				<div className='overview-of-clinic-operations'>
					<h3>Overview of Clinic Operations</h3>

					<div className='patients'>
						<h4>Patients</h4>

						<ul>
							<li>
								Patient Demographics: Create a table or bar chart showing the
								distribution of patients by age, gender, and insurance provider.
							</li>
							<li>
								Admission and Discharge Rates: Display line charts showing the
								admission and discharge rates over time.
							</li>
							<li>
								Average Length of Stay: Calculate and display the average length
								of stay for patients.
							</li>
							<li>
								Patient Satisfaction Scores: Graph patient satisfaction scores
								using a bar chart or box plot.
							</li>
						</ul>
					</div>

					<div className='staff'>
						<h4>Staff</h4>

						<ul>
							<li>
								Staff Composition: Create a table or pie chart showing the
								breakdown of staff by department and job title.
							</li>
							<li>
								Staff Schedules: Integrate with the scheduling system to display
								staff schedules for upcoming weeks.
							</li>
							<li>
								Staff Availability: Show real-time availability of staff members
								by department.
							</li>
						</ul>
					</div>

					<div className='equipment'>
						<h4>Equipment</h4>

						<ul>
							<li>
								Equipment Status: Display the current status of all medical
								equipment, indicating whether it is operational, under
								maintenance, or out of service.
							</li>
							<li>
								Maintenance Schedules: Provide a calendar view of upcoming
								maintenance schedules for each piece of equipment.
							</li>
							<li>
								Usage Statistics: Create charts or graphs showing the usage
								patterns of different types of medical equipment.
							</li>
						</ul>
					</div>
				</div>

				<div className='zk-nurse-call-system'>
					<h3>ZKR Nurse Call System</h3>

					<div className='nurse-call-data'>
						<h4>Nurse Call Data</h4>

						<ul>
							<li>
								Call Volume: Display a line chart showing the number of nurse
								calls received per hour or day.
							</li>
							<li>
								Response Times: Analyze call logs to calculate average response
								times for different types of calls.
							</li>
							<li>
								Resolution Times: Track the time it takes to resolve nurse calls
								and display average resolution times.
							</li>
						</ul>
					</div>

					<div className='nurse-call-history'>
						<h4>Nurse Call History</h4>

						<ul>
							<li>
								Call Log: Implement a searchable table to display a detailed
								history of nurse calls, including call time, patient
								information, and call details.
							</li>
							<li>
								Call Analysis: Utilize data visualization tools to analyze call
								patterns and identify areas for improvement.
							</li>
						</ul>
					</div>

					<div className='zk-system-status'>
						<h4>ZKR System Status</h4>

						<ul>
							<li>
								System Health: Monitor the overall health of the nurse call
								system, including network connectivity, device status, and any
								ongoing issues.
							</li>
							<li>
								Maintenance Logs: Maintain a record of system maintenance
								activities, including dates, technicians involved, and any
								notes.
							</li>
							<li>
								Alerting System: Set up alerts for critical system events, such
								as device malfunctions or network outages.
							</li>
						</ul>
					</div>
				</div>

				<div className='ge-healthcare-medical-imaging'>
					<h3>GE Healthcare Medical Imaging</h3>

					<div className='medical-imaging-data'>
						<h4>Medical Imaging Data</h4>

						<ul>
							<li>
								Imaging Volume: Display a line chart showing the number of
								medical images taken per type of modality (X-ray, CT scan, MRI,
								etc.).
							</li>
							<li>
								Patient Imaging History: Implement a searchable table to display
								a history of patient imaging procedures, including dates,
								modalities, and referring physicians.
							</li>
							<li>
								Imaging Utilization: Calculate and display the utilization rates
								for different types of imaging equipment.
							</li>
						</ul>
					</div>

					<div className='ge-healthcare-system-status'>
						<h4>GE Healthcare System Status</h4>

						<ul>
							<li>
								System Availability: Monitor the uptime of the medical imaging
								system and display any periods of downtime or interruptions.
							</li>
							<li>
								Maintenance Schedule: Provide a calendar view of upcoming
								maintenance schedules for the imaging equipment.
							</li>
							<li>
								Service Requests: Track and manage service requests for the
								imaging system, including dates, technicians involved, and
								resolution notes.
							</li>
						</ul>
					</div>
				</div>

				<div className='masimo-patient-monitoring'>
					<h3>Masimo Patient Monitoring</h3>

					<div className='patient-monitoring-data'>
						<h4>Patient Monitoring Data</h4>

						<ul>
							<li>
								Number of Monitored Patients: Display a real-time count of the
								number of patients currently being monitored.
							</li>
							<li>
								Vital Signs Trends: Create charts or graphs to visualize trends
								in patient vital signs, such as heart rate, blood pressure, and
								oxygen saturation.
							</li>
							<li>
								Alerts and Interventions: Implement an alert system to notify
								clinicians of any abnormal vital signs or potential patient
								complications.
							</li>
						</ul>
					</div>

					<div className='masimo-system-status'>
						<h4>Masimo System Status</h4>

						<ul>
							<li>
								Device Connectivity: Monitor the connectivity status of patient
								monitoring devices and display any disconnected devices.
							</li>
							<li>
								Battery Levels: Track the battery levels of patient monitoring
								devices and provide alerts for low battery levels.
							</li>
							<li>
								Calibration Status: Monitor the calibration status of patient
								monitoring devices and ensure they are calibrated
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
