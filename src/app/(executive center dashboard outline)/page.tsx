import styles from "./mainPageStyles.module.css";
export default function Home() {
	return (
		<main>
			<div className={styles["executive-center-dashboard-outline"]}>
				<h2 className={styles.h2}>
					Outline of the executive center module dashboard for the medical
					clinic, along with additional details on what to include in each page
					and recommended packages/libraries to use
				</h2>

				<div className={styles.section}>
					<h3 className={styles.h3}>Main Home Link</h3>
					<p>
						This page should provide a high-level overview of the clinic s
						operations, including key metrics such as:
					</p>

					<ul className={styles.ul}>
						<li className={styles.li}>
							Patient Volume: Display a line chart showing the number of patient
							visits over time.
						</li>
						<li className={styles.li}>
							Staffing Levels: Show a breakdown of the number of doctors,
							nurses, and other staff by department.
						</li>
						<li className={styles.li}>
							Equipment Utilization: Display a pie chart showing the percentage
							of utilization for each type of medical equipment.
						</li>
					</ul>
				</div>

				<div className={styles.section}>
					<h3 className={styles.h3}>Overview of Clinic Operations</h3>

					<div className={styles.subsection}>
						<h4>Patients</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Patient Demographics: Create a table or bar chart showing the
								distribution of patients by age, Average Length of Stay, gender,
								and insurance provider. etc...
							</li>
							<li className={styles.li}>
								Admission and Discharge Rates: Display line charts showing the
								admission and discharge rates over time.
							</li>
							<li className={styles.li}>
								Patient Satisfaction Scores: Graph patient satisfaction scores
								using a bar chart or box plot.
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>Staff</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Staff Composition: Create a table or pie chart showing the
								breakdown of staff by department and job title.
							</li>
							<li className={styles.li}>
								Staff Schedules: Integrate with the scheduling system to display
								staff schedules for upcoming weeks.
							</li>
							<li className={styles.li}>
								Staff Availability: Show real-time availability of staff members
								by department.
							</li>
							<li className={styles.li}>
								Staff Performance Metric: Show average satisfaction scores of
								staff members by department.
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>Equipment</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Equipment Status: Display the current status of all medical
								equipment, indicating whether it is operational, under
								maintenance, or out of service. etc...
							</li>
							<li className={styles.li}>
								Maintenance Schedules: Provide a calendar view of upcoming
								maintenance schedules for each piece of equipment.
							</li>
							<li className={styles.li}>
								Usage Statistics: Create charts or graphs showing the usage
								patterns of different types of medical equipment.
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.section}>
					<h3 className={styles.h3}>ZKR Nurse Call System</h3>

					<div className={styles.subsection}>
						<h4>Nurse Call Data</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Call Volume: Display a line chart showing the number of nurse
								calls received per hour or day.
							</li>
							<li className={styles.li}>
								Response Times: Analyze call logs to calculate average response
								times for different types of calls.
							</li>
							<li className={styles.li}>
								Resolution Times: Track the time it takes to resolve nurse calls
								and display average resolution times.
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>Nurse Call History</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Call Log: Implement a searchable table to display a detailed
								history of nurse calls, including call time, patient
								information, and call details.
							</li>
							<li className={styles.li}>
								Call Analysis: Utilize data visualization tools to analyze call
								patterns and identify areas for improvement.
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>ZKR System Status</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								System Health: Monitor the overall health of the nurse call
								system, including network connectivity, device status, and any
								ongoing issues.
							</li>
							<li className={styles.li}>
								Maintenance Logs: Maintain a record of system maintenance
								activities, including dates, technicians involved, and any
								notes.
							</li>
							<li className={styles.li}>
								Alerting System: Set up alerts for critical system events, such
								as device malfunctions or network outages.
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.section}>
					<h3 className={styles.h3}>GE Healthcare Medical Imaging</h3>

					<div className={styles.subsection}>
						<h4>Medical Imaging Data</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Imaging Volume: Display a line chart showing the number of
								medical images taken per type of modality (X-ray, CT scan, MRI,
								etc.).
							</li>
							<li className={styles.li}>
								Patient Imaging History: Implement a searchable table to display
								a history of patient imaging procedures, including dates,
								modalities, and referring physicians.
							</li>
							<li className={styles.li}>
								Imaging Utilization: Calculate and display the utilization rates
								for different types of imaging equipment.
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>GE Healthcare System Status</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								System Availability: Monitor the uptime of the medical imaging
								system and display any periods of downtime or interruptions.
							</li>
							<li className={styles.li}>
								Maintenance Schedule: Provide a calendar view of upcoming
								maintenance schedules for the imaging equipment.
							</li>
							<li className={styles.li}>
								Service Requests: Track and manage service requests for the
								imaging system, including dates, technicians involved, and
								resolution notes.
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.section}>
					<h3 className={styles.h3}>Masimo Patient Monitoring</h3>

					<div className={styles.subsection}>
						<h4>Patient Monitoring Data</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Number of Monitored Patients: Display a real-time count of the
								number of patients currently being monitored.
							</li>
							<li className={styles.li}>
								Vital Signs Trends: Create charts or graphs to visualize trends
								in patient vital signs, such as heart rate, blood pressure, and
								oxygen saturation.
							</li>
							<li className={styles.li}>
								Alerts and Interventions: Implement an alert system to notify
								clinicians of any abnormal vital signs or potential patient
								complications.
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>Masimo System Status</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Device Connectivity: Monitor the connectivity status of patient
								monitoring devices and display any disconnected devices.
							</li>
							<li className={styles.li}>
								Battery Levels: Track the battery levels of patient monitoring
								devices and provide alerts for low battery levels.
							</li>
							<li className={styles.li}>
								Calibration Status: Monitor the calibration status of patient
								monitoring devices and ensure they are calibrated
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.section}>
					<h3 className={styles.h3}>CCTV Server</h3>

					<div className={styles.subsection}>
						<h4>Live Feed</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Video component for viewing live feeds from CCTV cameras, with a
								dropdown menu for selecting the camera (use `react-player`).
							</li>
							<li className={styles.li}>
								A map showing the location of each camera in the clinic (use
								`react-simple-maps`).
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>Recorded Footage</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Video component for viewing recorded footage, with a date picker
								(use `react-datepicker`) and dropdown menu for selecting the
								footage.
							</li>
							<li className={styles.li}>
								A timeline for navigating through the recorded footage (use
								`react-calendar-timeline`).
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.section}>
					<h3 className={styles.h3}>Reports</h3>

					<div className={styles.subsection}>
						<h4>Daily Reports</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Series of cards that summarize daily operations, including
								number of patients, staff workloads, equipment usage, etc. (use
								`react-grid-layout`).
							</li>
							<li className={styles.li}>
								A line chart showing key metrics over the course of the day (use
								`react-chartjs-2`).
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>Monthly Reports</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Series of line charts for spotting long-term trends (use
								`react-chartjs-2`).
							</li>
							<li className={styles.li}>
								Data table for more detailed planning (use `react-table`).
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.section}>
					<h3 className={styles.h3}>Finances</h3>

					<div className={styles.subsection}>
						<h4>Revenue</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Line chart showing revenue over time (use `react-chartjs-2`).
							</li>
							<li className={styles.li}>
								Breakdown of revenue by department or service (use `recharts`).
							</li>
							<li className={styles.li}>
								Data table with more detailed information (use `react-table`).
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>Expenses</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Line chart showing expenses over time (use `react-chartjs-2`).
							</li>
							<li className={styles.li}>
								Breakdown of expenses by department or service (use `recharts`).
							</li>
							<li className={styles.li}>
								Data table with more detailed information (use `react-table`).
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>Profit & Loss Statement</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Summary of revenues and expenses, showing net profit or loss
								over a selected period.
							</li>
							<li className={styles.li}>
								A bar chart comparing revenue and expenses (use `victory`).
							</li>
						</ul>
					</div>

					<div className={styles.subsection}>
						<h4>Budgets</h4>

						<ul className={styles.ul}>
							<li className={styles.li}>
								Page where executives can view and manage budgets for different
								departments or projects.
							</li>
							<li className={styles.li}>
								A pie chart showing the distribution of the budget (use
								`recharts`).
							</li>
							<li className={styles.li}>
								A data table for more detailed budget planning (use
								`react-table`).
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
