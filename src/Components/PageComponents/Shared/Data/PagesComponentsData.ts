// import "server-only";
// "use server";

import { faker } from "@faker-js/faker";

import { LineChartProps, LineChart_init } from "../../react-chartjs-2/LineChart/LineChartData";
import { PieChartProps, PieChart_init } from "../../react-chartjs-2/PieChart/PieChartData";
import {
	TableComponentProps,
	TableComponent_init,
} from "../../mantine/TableComponent/TableComponentData";
import {
	VerticalBarChartProps,
	VerticalBarChart_init,
} from "../../react-chartjs-2/VerticalBarChart/VerticalBarChartData";
import {
	VirtualizedListProps,
} from "../../react-virtuoso/VirtualizedList/VirtualizedListData";
import {
	CenterProps,
	ContainerProps,
	FlexProps,
	TabsProps,
} from "@mantine/core";
import { ChartData, ChartOptions } from "chart.js";
import {
	DoughnutChartProps,
	DoughnutChart_init,
} from "../../react-chartjs-2/DoughnutChart/DoughnutChartData";
import {
	BigCalendarComponentProps,
	BigCalendarComponent_init,
} from "../../react-big-calendar/BigCalendarComponent/BigCalendarComponentData";
import {
	CardsCarouselComponentProps,
	CardsCarouselComponent_init,
} from "../../mantine/CardsCarouselComponent/CardsCarouselComponentData";
import {
	BubbleChartProps,
	BubbleChart_init,
} from "../../react-chartjs-2/BubbleChart/BubbleChartData";
import { RadarChartProps, RadarChart_init } from "../../react-chartjs-2/RadarChart/RadarChartData";
import {
	ScatterChartProps,
} from "../../react-chartjs-2/ScatterChart/ScatterChartData";
import { TreeMapProps } from "../../react-apexcharts/TreeMap/TreeMapData";

import {
	DataGridComponentProps,
	DataGridComponent_init,
} from "../../mui/x-data-grid/DataGridData";
import {
	generateStaff,
	generateNurseCalls,
	generatePatients,
	callTypes,
	generateNurseCallsPropsReturn,
	staffingDepartments,
} from "./SharedConsts";
import { StaffCallsHeatMapCalendar, staffCallsType } from "@/Components/Shared/ModalComponent/ModalComponentData";
import { UiwHeatMapCalendarProps, UiwHeatMapCalendar_init } from "../../uiw/react-heat-map/UiwHeatMapCalendarData";

type PageComponentNamesTypes =
	| "Line Chart"
	| "Pie Chart"
	| "Table"
	| "Vertical Bar Chart"
	| "Virtualized List"
	| "Doughnut Chart"
	| "Big Calendar"
	| "Cards Carousel"
	| "Bubble Chart"
	| "Radar Chart"
	| "Scatter Chart"
	| "Tree Map"
	| "Data Grid"
	| "Uiw Heat Map Calendar"
type PageComponentConfigTypes =
	| LineChartProps
	| PieChartProps
	| TableComponentProps
	| VerticalBarChartProps
	| VirtualizedListProps
	| DoughnutChartProps
	| BigCalendarComponentProps
	| CardsCarouselComponentProps
	| BubbleChartProps
	| RadarChartProps
	| ScatterChartProps
	| TreeMapProps
	| DataGridComponentProps
	| UiwHeatMapCalendarProps

type WrapperNamesTypes = "Flex" | "Container" | "Div" | "Tabs" | "Center";
type WrapperPropsTypes =
	| FlexProps
	| ContainerProps
	| React.HTMLAttributes<HTMLDivElement>
	| TabsProps
	| CenterProps;
export interface PageComponentsWrapperInterface {
	WrapperName: WrapperNamesTypes;
	WrapperProps: WrapperPropsTypes;
}
export interface PageWrappedComponentsInterface {
	ComponentTitle: string;
	ComponentName: PageComponentNamesTypes;
	Config: PageComponentConfigTypes;
}
export interface PageComponentsType {
	WrapperForComponents: PageComponentsWrapperInterface;
	WrappedComponents: PageWrappedComponentsInterface[];
}

interface PageComponentDataInterface {
	PageLinkName: string;
	PageComponents: PageComponentsType[];
}

export const PagesComponentData: PageComponentDataInterface[] = [
	{
		PageLinkName: "Home",
		PageComponents: [
			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: { fluid: true, w: "100%" },
				},
				WrappedComponents: [
					{
						ComponentTitle: "Patient Volume line chart",
						ComponentName: "Line Chart",
						Config: (() => {
							const months = [
								"January",
								"February",
								"March",
								"April",
								"May",
								"June",
								"July",
								"August",
								"September",
								"October",
								"November",
								"December",
							];

							let chart = LineChart_init();

							chart.options.plugins!.title!.text = "Patient Volume";

							chart.data.labels = months;
							chart.data.datasets = [
								{
									label: "# of Patient Visits",
									data: Array.from({ length: 12 }, () =>
										faker.number.int({ min: 50, max: 500 })
									),
									fill: false,
									backgroundColor: "rgb(75, 192, 192)",
									borderColor: "rgba(75, 192, 192, 0.2)",
								},
							];

							return chart;
						})(),
					},
				],
			},
			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: { fluid: true, w: "100%" },
				},
				WrappedComponents: [
					{
						ComponentTitle: "Staffing Levels bubble chart",
						ComponentName: "Bubble Chart",
						Config: (() => {
							const departments = [
								"Cardiology",
								"Neurology",
								"Orthopedics",
								"Pediatrics",
								"Radiology",
								"Surgery",
								"Urology",
							];
							const staffTypes = [
								"Doctors",
								"Nurses",
								"Admin Staff",
								"Med Techs",
								"Pharmacy Staff",
								"Therapists",
								"Support Staff",
								"Social Workers",
								"IT Staff",
							];

							let chart = BubbleChart_init();

							chart.options.plugins!.title!.text =
								"Staffing Levels by Department";
							chart.options.scales!.x = {
								...chart.options.scales!.x,
								type: "category",
								labels: staffTypes,
							};
							chart.options.scales!.y = {
								...chart.options.scales!.y,
								max: 12,
							};

							chart.data.datasets = departments.map((department) => ({
								label: department,
								data: staffTypes.map((staffType, staffTypeIndex) => ({
									x: staffTypeIndex,
									y: faker.number.int({ min: 2, max: 10 }),
									r: faker.number.int({ min: 10, max: 50 }),
								})),
								backgroundColor: faker.internet.color(),
							}));

							return chart;
						})(),
					},
				],
			},
			{
				WrapperForComponents: {
					WrapperName: "Center",
					WrapperProps: { fluid: true, w: "100%" },
				},
				WrappedComponents: [
					{
						ComponentTitle: "Equipment Utilization Radar Chart",
						ComponentName: "Radar Chart",
						Config: (() => {
							const equipmentTypes = [
								"MRI Machine",
								"CT Scanner",
								"X-Ray Machine",
								"Ultrasound Machine",
								"ECG Machine",
								"Endoscope",
								"Defibrillator",
							];

							const months = [
								"January",
								"February",
								"March",
								"April",
								"May",
								"June",
								"July",
								"August",
								"September",
								"October",
								"November",
								"December",
							];
							let chart = RadarChart_init();

							chart.data.labels = months;
							chart.options.plugins!.title!.text =
								"Equipment Utilization per month";
							chart.data.datasets = equipmentTypes.map((equipment) => ({
								label: equipment,
								data: months.map((month, monthIndex) =>
									faker.number.int({ min: 50, max: 100 })
								),
								backgroundColor: faker.color.hsl({
									format: "css",
									includeAlpha: true,
								}),
								borderColor: faker.color.human(),
								borderWidth: 1,
							}));

							return chart;
						})(),
					},
				],
			},
		],
	},
	{
		PageLinkName: "Patients",
		PageComponents: [
			{
				WrapperForComponents: {
					WrapperName: "Tabs",
					WrapperProps: { w: "100%" },
				},
				WrappedComponents: [
					{
						ComponentTitle: "Age Groups",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							const ageGroups = ["0-18", "19-30", "31-50", "51-65", "65+"];
							const data = {
								labels: ageGroups,
								datasets: [
									{
										label: "Age Distribution",
										backgroundColor: "#2196F3",
										borderColor: "#2196F3",
										borderWidth: 1,
										data: ageGroups.map(() =>
											faker.number.int({ min: 1, max: 100 })
										),
									},
								],
							};

							const options: ChartOptions<"bar"> = {
								responsive: true,
								plugins: {
									legend: {
										display: true,
										position: "top",
									},
								},
							};

							let chart = VerticalBarChart_init({
								options: options,
								data: data,
							});
							return chart;
						})(),
					},
					{
						ComponentTitle: "Average Length of Stay",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							const data: ChartData<"bar"> = {
								labels: [
									"General Medicine",
									"Surgery",
									"Pediatrics",
									"Obstetrics & Gynecology",
									"Cardiology",
								],
								datasets: [
									{
										label: "Average Length of Stay (Days)",
										backgroundColor: "#03A9F4",
										borderColor: "#03A9F4",
										borderWidth: 2,
										data: [
											faker.number.int({ min: 3, max: 7 }),
											faker.number.int({ min: 4, max: 8 }),
											faker.number.int({ min: 2, max: 6 }),
											faker.number.int({ min: 2, max: 5 }),
											faker.number.int({ min: 3, max: 7 }),
										],
									},
								],
							};

							const options: ChartOptions<"bar"> = {
								responsive: true,
								plugins: {
									legend: {
										display: true,
										position: "top",
									},
									title: {
										display: true,
										text: "Average Length of Stay (ALOS)",
									},
								},
							};

							let chart = VerticalBarChart_init({
								options: options,
								data: data,
							});
							return chart;
						})(),
					},
					{
						ComponentTitle: "Gender Distribution",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							const data = {
								labels: ["Male", "Female"],
								datasets: [
									{
										label: "Gender Distribution",
										backgroundColor: "#F44336",
										borderColor: "#F44336",
										borderWidth: 1,
										data: [
											faker.number.int({ min: 1, max: 100 }),
											faker.number.int({ min: 1, max: 100 }),
										],
									},
								],
							};

							const options: ChartOptions<"bar"> = {
								responsive: true,
								plugins: {
									legend: {
										display: true,
										position: "top",
									},
								},
							};

							let chart = VerticalBarChart_init({
								options: options,
								data: data,
							});
							return chart;
						})(),
					},
					{
						ComponentTitle: "Insurance Providers",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							const insuranceProviders = [
								"Aetna",
								"Blue Cross Blue Shield",
								"Cigna",
								"Humana",
								"UnitedHealthcare",
							];
							const data = {
								labels: insuranceProviders,
								datasets: [
									{
										label: "Insurance Provider Distribution",
										backgroundColor: "#4CAF50",
										borderColor: "#4CAF50",
										borderWidth: 1,
										data: insuranceProviders.map(() =>
											faker.number.int({ min: 1, max: 100 })
										),
									},
								],
							};
							const options: ChartOptions<"bar"> = {
								responsive: true,
								plugins: {
									legend: {
										display: true,
										position: "top",
									},
								},
							};

							let chart = VerticalBarChart_init({
								options: options,
								data: data,
							});
							return chart;
						})(),
					},
					{
						ComponentTitle: "Diagnostic Category Distribution",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							const diagnosticCategories = [
								"Laboratory Tests",
								"Imaging Studies",
								"Pathology",
								"Cardiology",
								"Neurology",
							];
							const data = {
								labels: diagnosticCategories,
								datasets: [
									{
										label: "Diagnostic Category Distribution",
										backgroundColor: "#673AB7",
										borderColor: "#673AB7",
										borderWidth: 1,
										data: diagnosticCategories.map(() =>
											faker.number.int({ min: 1, max: 100 })
										),
									},
								],
							};
							const options: ChartOptions<"bar"> = {
								responsive: true,
								plugins: {
									legend: {
										display: true,
										position: "top",
									},
								},
							};

							let chart = VerticalBarChart_init({
								options: options,
								data: data,
							});
							return chart;
						})(),
					},
					{
						ComponentTitle: "Most Common Diagnoses",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							const diagnoses = [
								"Hypertension",
								"Diabetes Mellitus",
								"Osteoarthritis",
								"Depression",
								"Anxiety",
							];
							const data = {
								labels: diagnoses,
								datasets: [
									{
										label: "Most Common Diagnoses",
										backgroundColor: "#3F51B5",
										borderColor: "#3F51B5",
										borderWidth: 1,
										data: diagnoses.map(() =>
											faker.number.int({ min: 1, max: 100 })
										),
									},
								],
							};
							const options: ChartOptions<"bar"> = {
								responsive: true,
								plugins: {
									legend: {
										display: true,
										position: "top",
									},
								},
							};

							let chart = VerticalBarChart_init({
								options: options,
								data: data,
							});
							return chart;
						})(),
					},
					{
						ComponentTitle: "Primary Care Physician (PCP) Distribution",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							const pcps = [
								"Dr. Smith",
								"Dr. Jones",
								"Dr. Brown",
								"Dr. Williams",
								"Dr. Miller",
							];
							const data = {
								labels: pcps,
								datasets: [
									{
										label: "PCP Distribution",
										backgroundColor: "#9C27B0",
										borderColor: "#9C27B0",
										borderWidth: 1,
										data: pcps.map(() =>
											faker.number.int({ min: 1, max: 100 })
										),
									},
								],
							};
							const options: ChartOptions<"bar"> = {
								responsive: true,
								plugins: {
									legend: {
										display: true,
										position: "top",
									},
								},
							};

							let chart = VerticalBarChart_init({
								options: options,
								data: data,
							});
							return chart;
						})(),
					},
					{
						ComponentTitle: "Referral Source Distribution",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							const referralSources = [
								"Urgent Care",
								"Emergency Room",
								"Specialist Referral",
								"Employer",
								"Self-Referral",
							];
							const data = {
								labels: referralSources,
								datasets: [
									{
										label: "Referral Source Distribution",
										backgroundColor: "#03A9F4",
										borderColor: "#03A9F4",
										borderWidth: 1,
										data: referralSources.map(() =>
											faker.number.int({ min: 1, max: 100 })
										),
									},
								],
							};
							const options: ChartOptions<"bar"> = {
								responsive: true,
								plugins: {
									legend: {
										display: true,
										position: "top",
									},
								},
							};

							let chart = VerticalBarChart_init({
								options: options,
								data: data,
							});
							return chart;
						})(),
					},
				],
			},

			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: { fluid: true, w: "100%" },
				},
				WrappedComponents: [
					{
						ComponentTitle: "Admission and Discharge Rates line chart",
						ComponentName: "Line Chart",
						Config: (() => {
							const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

							const admissionData = {
								label: "Admissions",
								fill: false,
								lineTension: 0.5,
								backgroundColor: "#2196F3",
								borderColor: "#2196F3",
								borderWidth: 2,
								data: [
									faker.number.int({ min: 10, max: 50 }),
									faker.number.int({ min: 10, max: 50 }),
									faker.number.int({ min: 10, max: 50 }),
									faker.number.int({ min: 10, max: 50 }),
									faker.number.int({ min: 10, max: 50 }),
								],
							};

							const dischargeData = {
								label: "Discharges",
								fill: false,
								lineTension: 0.5,
								backgroundColor: "#F44336",
								borderColor: "#F44336",
								borderWidth: 2,
								data: [
									faker.number.int({ min: 5, max: 25 }),
									faker.number.int({ min: 5, max: 25 }),
									faker.number.int({ min: 5, max: 25 }),
									faker.number.int({ min: 5, max: 25 }),
									faker.number.int({ min: 5, max: 25 }),
								],
							};

							const data = {
								labels,
								datasets: [admissionData, dischargeData],
							};

							const options: ChartOptions<"line"> = {
								responsive: true,
								plugins: {
									legend: {
										display: true,
										position: "top",
									},
									title: {
										display: true,
										text: "Admission and Discharge Rates",
									},
								},
							};

							let chart = LineChart_init({
								options: options,
								data: data,
							});
							return chart;
						})(),
					},
				],
			},
			{
				WrapperForComponents: {
					WrapperName: "Center",
					WrapperProps: { fluid: true, w: "100%" },
				},
				WrappedComponents: [
					{
						ComponentTitle: "Patient Satisfaction chart",
						ComponentName: "Doughnut Chart",
						Config: (() => {
							const satisfactionLevels = [
								"Very Satisfied",
								"Satisfied",
								"Neutral",
								"Dissatisfied",
								"Very Dissatisfied",
							];
							const satisfactionScores = [
								faker.number.int({ min: 35, max: 60 }),
								faker.number.int({ min: 20, max: 45 }),
								faker.number.int({ min: 15, max: 30 }),
								faker.number.int({ min: 5, max: 20 }),
								faker.number.int({ min: 0, max: 5 }),
							];

							const data: ChartData<"doughnut"> = {
								labels: satisfactionLevels,
								datasets: [
									{
										label: "Patient Satisfaction",
										data: satisfactionScores,
										backgroundColor: [
											"#2196F3",
											"#673AB7",
											"#F44336",
											"#E91E63",
											"#9C27B0",
										],
										borderColor: "transparent",
										borderWidth: 2,
									},
								],
							};

							const options: ChartOptions<"doughnut"> = {
								responsive: true,
								plugins: {
									legend: {
										display: true,
										position: "top",
									},
									title: {
										display: true,
										text: "Patient Satisfaction Scores",
									},
								},
							};

							let chart = DoughnutChart_init({
								options: options,
								data: data,
							});
							return chart;
						})(),
					},
				],
			},
		],
	},
	{
		PageLinkName: "Staff",
		PageComponents: [
			{
				WrapperForComponents: {
					WrapperName: "Center",
					WrapperProps: { fluid: true, w: "100%" },
				},
				WrappedComponents: [
					{
						ComponentTitle: "Breakdown of staff",
						ComponentName: "Pie Chart",
						Config: (() => {
							const jobTitles = [
								"Doctors",
								"Nurses",
								"Technicians",
								"Administrative",
								"Pharmacists",
								"Other",
							];
							const jobTitlesColors = [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
								"rgba(75, 192, 192, 1)",
								"rgba(153, 102, 255, 1)",
								"rgba(255, 159, 64, 1)",
							];
							const departments = [
								"Cardiology",
								"Neurology",
								"Orthopedics",
								"Radiology",
								"Gastroenterology",
							];

							const datasets = departments.map((department) => {
								const data = jobTitles.map(() =>
									faker.number.int({ min: 1, max: 20 })
								);
								return {
									label: department,
									data: data,
									backgroundColor: jobTitlesColors,
								};
							});
							let chart = PieChart_init();
							chart.data = {
								labels: jobTitles,
								datasets,
							};

							chart.options.plugins!.title!.text =
								"Staff Composition by department";

							return chart;
						})(),
					},
				],
			},

			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: {
						fluid: true,
						w: "100%",
					},
				},
				WrappedComponents: [
					{
						ComponentTitle: "Staff Schedules",
						ComponentName: "Big Calendar",
						Config: (() => {
							let calendar = BigCalendarComponent_init();
							calendar.calendarTitle = "Staff schedules";
							return calendar;
						})(),
					},
				],
			},
			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: {
						fluid: true,
						w: "100%",
					},
				},
				WrappedComponents: [
					{
						ComponentTitle: "Staff Availability",
						ComponentName: "Table",
						Config: (() => {
							let calendar = TableComponent_init();

							calendar.caption = "Staff Availability";

							calendar.columns = [
								{ header: "Staff Name", accessor: "name" },
								{ header: "Department", accessor: "department" },
								{ header: "Availability", accessor: "availability" },
							];

							const departments = [
								"Cardiology",
								"Pediatrics",
								"Neurology",
								"Radiology",
								"Emergency",
							];
							const availabilityStatus = ["Available", "On Break", "Off Duty"];

							calendar.rows = Array.from({ length: 16 }, () => ({
								id: faker.string.uuid(),
								name: faker.person.fullName(),
								department: faker.string.fromCharacters(departments),
								availability: faker.string.fromCharacters(availabilityStatus),
							}));

							return calendar;
						})(),
					},
				],
			},
			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: {
						fluid: true,
						w: "100%",
					},
				},
				WrappedComponents: [
					{
						ComponentTitle: "Staff Performance Metrics",
						ComponentName: "Table",
						Config: (() => {
							let calendar = TableComponent_init();

							calendar.caption = "Staff Performance Metrics";

							calendar.columns = [
								{ header: "Staff Name", accessor: "name" },
								{ header: "Department", accessor: "department" },
								{ header: "Patients Seen", accessor: "patientsSeen" },
								{
									header: "Avg. Satisfaction Score (1-5)",
									accessor: "satisfactionScore",
								},
							];

							const departments = [
								"Cardiology",
								"Pediatrics",
								"Neurology",
								"Radiology",
								"Emergency",
							];

							calendar.rows = Array.from({ length: 50 }, () => ({
								id: faker.string.uuid(),
								name: faker.person.fullName(),
								department: faker.string.fromCharacters(departments),
								patientsSeen: faker.number.int({ min: 5, max: 30 }),
								satisfactionScore: faker.number
									.float({ min: 1, max: 5 })
									.toFixed(2),
							}));

							return calendar;
						})(),
					},
				],
			},
		],
	},
	{
		PageLinkName: "Equipment",
		PageComponents: [
			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: {
						fluid: true,
						w: "100%",
					},
				},
				WrappedComponents: [
					{
						ComponentTitle: "Equipment Status Cards",
						ComponentName: "Cards Carousel",
						Config: (() => {
							const equipmentStatus = [
								"Operational",
								"Out of Service",
								"Scheduled For Maintenance",
								"Under Maintenance",
							];

							let equipmentsCardsCarousel = CardsCarouselComponent_init();

							equipmentsCardsCarousel.data = Array.from({ length: 10 }, () => ({
								id: faker.string.uuid(),
								name: faker.commerce.productName(),
								descriptive: faker.string.fromCharacters(equipmentStatus),
								description: `Description: ${faker.lorem.paragraph()}`,
								imageURL: faker.image.url(),
							}));

							equipmentsCardsCarousel.title = "Equipment Status Cards";

							return equipmentsCardsCarousel;
						})(),
					},
				],
			},
			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: {
						fluid: true,
						w: "100%",
					},
				},
				WrappedComponents: [
					{
						ComponentTitle: "Equipment Maintenance Schedule",
						ComponentName: "Big Calendar",
						Config: (() => {
							const equipmentNames = [
								"MRI Machine",
								"X-Ray Machine",
								"Ultrasound Machine",
								"Defibrillator",
								"Ventilator",
							];

							let calendar = BigCalendarComponent_init();
							calendar.calendarTitle = "Equipment Maintenance Schedule";
							calendar.events = Array.from({ length: 19 }, () => ({
								start: faker.date.soon({
									days: faker.number.int({ min: 0.5, max: 7 }),
								}),
								end: faker.date.soon({
									days: faker.number.int({ min: 7, max: 10 }),
								}),
								title: `${faker.string.fromCharacters(
									equipmentNames
								)} maintenance`,
							}));
							return calendar;
						})(),
					},
				],
			},
			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: { fluid: true, w: "100%" },
				},
				WrappedComponents: [
					{
						ComponentTitle: "Equipment Usage Statistics line chart",
						ComponentName: "Line Chart",
						Config: (() => {
							const equipmentNames = [
								"MRI Machine",
								"X-Ray Machine",
								"Ultrasound Machine",
								"Defibrillator",
								"Ventilator",
							];
							const months = [
								"January",
								"February",
								"March",
								"April",
								"May",
								"June",
								"July",
								"August",
								"September",
								"October",
								"November",
								"December",
							];

							let chart = LineChart_init();

							chart.options.plugins!.title!.text = "Equipment Usage Statistics";
							chart.data.labels = months;
							chart.data.datasets = equipmentNames.map((name) => ({
								label: name,
								borderColor: faker.internet.color(),
								backgroundColor: faker.internet.color(),
								data: months.map(() => faker.number.int({ min: 50, max: 200 })),
							}));

							return chart;
						})(),
					},
				],
			},
		],
	},
	{
		PageLinkName: "Nurse_Call_Data",
		PageComponents: [
			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: {
						fluid: true,
						w: "100%",
					},
				},
				WrappedComponents: [
					{
						ComponentTitle: "Nurse Call Volume line chart",
						ComponentName: "Line Chart",
						Config: (() => {
							// Generate labels for each hour of the day
							const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

							// Define the months
							const months = [
								"January",
								"February",
								"March",
								"April",
								"May",
								"June",
								"July",
								"August",
								"September",
								"October",
								"November",
								"December",
							];

							const chart = LineChart_init();

							chart.options.plugins!.title!.text =
								"Average Hourly Nurse Call Volume by Month";

							chart.data = {
								labels,
								datasets: months.map((month, monthIndex) => ({
									label: month,
									borderColor: faker.color.hsl({ format: "css" }),
									backgroundColor: faker.color.hsl({ format: "css" }),
									data: labels.map(() =>
										faker.number.int({ min: 0, max: 100 })
									),
									hidden: monthIndex > 2,
								})),
							};

							return chart;
						})(),
					},
				],
			},
			{
				WrapperForComponents: {
					WrapperName: "Tabs",
					WrapperProps: {},
				},
				WrappedComponents: [
					{
						ComponentTitle: "Average Emergency Response Times",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							// Define the types of calls, shifts, and staff members
							// const callTypes = ["Emergency", "Routine", "Check-up"];
							const callTypes = ["Emergency"];
							const shifts = ["Morning", "Afternoon", "Night"];
							// Generate random names and colors for the staff members
							const staffMembers = Array.from({ length: 5 }, () => ({
								name: faker.person.fullName(),
								backgroundColor: faker.color.hsl({ format: "css" }),
								borderColor: faker.color.hsl({ format: "css" }),
							}));

							const chart = VerticalBarChart_init();

							chart.options.plugins!.title!.text =
								"Average Response Times by Call Type, Shift, and Staff Member";

							chart.data = {
								labels: callTypes,
								datasets: shifts.flatMap((shift) =>
									staffMembers.map(
										({ name, backgroundColor, borderColor }) => ({
											label: `${shift} - ${name}`,
											backgroundColor: backgroundColor,
											borderColor,
											data: callTypes.map(() =>
												faker.number.int({ min: 1, max: 15 })
											),
											categoryPercentage: 1,
											barPercentage: 0.8,
										})
									)
								),
							};

							return chart;
						})(),
					},
					{
						ComponentTitle: "Average Routine Response Times",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							// Define the types of calls, shifts, and staff members
							// const callTypes = ["Emergency", "Routine", "Check-up"];
							const callTypes = ["Routine"];
							const shifts = ["Morning", "Afternoon", "Night"];
							// Generate random names and colors for the staff members
							const staffMembers = Array.from({ length: 5 }, () => ({
								name: faker.person.fullName(),
								backgroundColor: faker.color.hsl({ format: "css" }),
								borderColor: faker.color.hsl({ format: "css" }),
							}));

							const chart = VerticalBarChart_init();

							chart.options.plugins!.title!.text =
								"Average Response Times by Call Type, Shift, and Staff Member";

							chart.data = {
								labels: callTypes,
								datasets: shifts.flatMap((shift) =>
									staffMembers.map(
										({ name, backgroundColor, borderColor }) => ({
											label: `${shift} - ${name}`,
											backgroundColor: backgroundColor,
											borderColor,
											data: callTypes.map(() =>
												faker.number.int({ min: 1, max: 15 })
											),
											categoryPercentage: 1,
											barPercentage: 0.8,
										})
									)
								),
							};

							return chart;
						})(),
					},
					{
						ComponentTitle: "Average Check-up Response Times",
						ComponentName: "Vertical Bar Chart",
						Config: (() => {
							// Define the types of calls, shifts, and staff members
							// const callTypes = ["Emergency", "Routine", "Check-up"];
							const callTypes = ["Check-up"];
							const shifts = ["Morning", "Afternoon", "Night"];
							// Generate random names and colors for the staff members
							const staffMembers = Array.from({ length: 5 }, () => ({
								name: faker.person.fullName(),
								backgroundColor: faker.color.hsl({ format: "css" }),
								borderColor: faker.color.hsl({ format: "css" }),
							}));

							const chart = VerticalBarChart_init();

							chart.options.plugins!.title!.text =
								"Average Response Times by Call Type, Shift, and Staff Member";

							chart.data = {
								labels: callTypes,
								datasets: shifts.flatMap((shift) =>
									staffMembers.map(
										({ name, backgroundColor, borderColor }) => ({
											label: `${shift} - ${name}`,
											backgroundColor: backgroundColor,
											borderColor,
											data: callTypes.map(() =>
												faker.number.int({ min: 1, max: 15 })
											),
											categoryPercentage: 1,
											barPercentage: 0.8,
										})
									)
								),
							};

							return chart;
						})(),
					},
				],
			},

			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: {
						fluid: true,
						w: "100%",
					},
				},
				WrappedComponents: [
					{
						ComponentTitle:
							"Nurse Calls Annual Heat Map Calendar With Info Modals",
						ComponentName: "Uiw Heat Map Calendar",
						Config: (() => {


							const nurses = generateStaff({
								jobTitle: "Nurse",
								numberOfStaff: 10
							})

							const currentYear = new Date().getFullYear();
							const currentDayOfYear = Math.floor((Date.now() - new Date(currentYear, 0, 1).getTime()) / (1000 * 60 * 60 * 24));


							const staffMockData = Array.from({ length: currentDayOfYear }, (_, idx) => {
								const count = faker.number.int({ min: 1, max: 60 });
								let remainingCalls = count;

								const date = new Date(currentYear, 0, idx + 1)
								const dateString = date.toISOString().split("T")[0]
								const staffCalls: staffCallsType[] = nurses.map((nurse, i) => {
									let nurseCalls;

									// For the last nurse, assign all remaining calls
									if (i === nurses.length - 1) {
										nurseCalls = remainingCalls;
									} else {
										// Randomly assign calls to the nurse, but leave at least one call for each remaining nurse
										const maxCalls = Math.max(0, remainingCalls - (nurses.length - i - 1));
										nurseCalls = faker.number.int({ min: 0, max: maxCalls });
									}

									remainingCalls -= nurseCalls;

									return {
										staff: nurse,
										numberOfCalls: nurseCalls,
										calls: Array.from({ length: nurseCalls }, () => {
											const generatingNurseCall = generateNurseCalls({
												date: date
											});

											return {
												date: dateString,
												callType: generatingNurseCall.callType,
												room: generatingNurseCall.room,
												callTime: generatingNurseCall.callTime,
												callResolutionTime: generatingNurseCall.callResolutionTime,
											};
										}),
									};
								}).filter(staffCall => staffCall.numberOfCalls > 0);


								return {
									modalTitle: "Heat Map Calls Info",
									date: dateString,
									count: count,
									staffCalls: staffCalls,

								} as StaffCallsHeatMapCalendar
							});


							const HeatMapCalendar = UiwHeatMapCalendar_init();

							HeatMapCalendar.data = staffMockData

							HeatMapCalendar.options = {
								...HeatMapCalendar.options,
								startDate: new Date(currentYear, 0, 1), // Start from January of the current year
								endDate: new Date(), // End at the current day
							}

							HeatMapCalendar.title = "Nurse Calls Annual Heat Map Calendar"

							return HeatMapCalendar;
						})(),
					},
				],
			},

		],
	},
	{
		PageLinkName: "Nurse_Call_History",
		PageComponents: [
			{
				WrapperForComponents: {
					WrapperName: "Container",
					WrapperProps: {
						fluid: true,
						w: "100%",
					},
				},
				WrappedComponents: [
					{
						ComponentTitle: "All Nurse Call History",
						ComponentName: "Data Grid",
						Config: (() => {
							const columns = [
								{ field: "id", headerName: "Nurse-ID_Patient-ID_Call-ID", width: 150 },
								{ field: "nurse", headerName: "Nurse", width: 200 },
								{ field: "patient", headerName: "Patient", width: 200 },
								{ field: "room", headerName: "Room Number", width: 130 },
								{ field: "callType", headerName: "Call Type", width: 130 },
								{
									field: "callPriority",
									headerName: "Call Priority",
									width: 130,
								},
								{
									field: "callDescription",
									headerName: "Call Description",
									width: 200,
								},
								{ field: "shift", headerName: "Shift", width: 130 },
								{ field: "time", headerName: "Time", width: 150 },
								{ field: "date", headerName: "Date", width: 150 },
							];


							const nurses = generateStaff({
								jobTitle: "Nurse",
								numberOfStaff: 10
							})


							// Generate multiple calls for each nurse
							const rows = nurses.flatMap((nurse) => {

								const patients = generatePatients({ numberOfPatients: faker.number.int({ min: 5, max: 12 }) })

								return patients.map((patient, patient_index) => {

									const callData = generateNurseCalls({ period: "Last Year" })

									return {
										id: `${nurse.id}_${patient.id}_${patient_index}`,
										nurse: nurse.staffName,
										patient: patient.patientName,
										room: callData.room,
										callType: callData.callType,
										callPriority: callData.callPriority,
										callDescription: callData.callDescription,
										shift: callData.shift,
										time: callData.callTime,
										date: callData.date,

										// Additional fields for the info modals
										patientName: patient.patientName,
										patientDob: patient.patientDob,
										patientAge: patient.patientAge,
										patientAddress: patient.patientAddress,
										patientProfilePictureURL: patient.patientProfilePictureURL,
										patientModalType: "Patient Info",
										patientBloodType: patient.patientBloodType,
										insuranceName: patient.insuranceName,
										medicalHistory: patient.medicalHistory,

										staffName: nurse.staffName,
										staffDob: nurse.staffDob,
										staffAge: nurse.staffAge,
										staffAddress: nurse.staffAddress,
										staffProfilePictureURL: nurse.staffProfilePictureURL,
										staffModalType: "Staff Info",
										staffBloodType: nurse.staffBloodType,
										joinedDate: nurse.joinedDate,
										department: nurse.department,
										jobTitle: nurse.jobTitle,

									}
								})

							})
							const DataGridInfo = DataGridComponent_init();

							DataGridInfo.columns = columns;
							DataGridInfo.rows = rows;

							return DataGridInfo;
						})(),
					},
				],
			},
			{
				WrapperForComponents: {
					WrapperName: "Tabs",
					WrapperProps: {

					},
				},
				WrappedComponents: [
					{
						ComponentTitle: "Nurse Call Type Trends",
						ComponentName: "Line Chart",
						Config: (() => {

							// Generate an array of the last 30 days
							const generateDateArray = () => {
								const dates = [];
								for (let i = 29; i >= 0; i--) {
									const date = new Date();
									date.setDate(date.getDate() - i);
									dates.push(date);
								}
								return dates;
							};

							const dates = generateDateArray();

							// Generate mock data
							const generateMockData = () => {
								const data: { [key: string]: number[] } = {};
								callTypes.map((callType) => {
									const tempNumberOfCalls: number[] = []
									dates.map((date) => {
										tempNumberOfCalls.push(faker.number.int({ min: 1, max: 60 }))
									})

									data[callType] = tempNumberOfCalls
								})
								return data;
							};

							const mockData = generateMockData();

							// Generate labels for the chart
							const labels = dates.map(date => date.toLocaleDateString("fr-Fr", { month: 'short', day: 'numeric', year: 'numeric' }));

							// Prepare data for the chart
							const chartData: ChartData<"line"> = {
								labels: labels,
								datasets: callTypes.map((type, index) => ({
									label: type,
									data: mockData[type],
									borderColor: faker.color.human(),
									backgroundColor: faker.color.human(),
									pointRadius: 5

								})),

							};

							const LineChartInfo = LineChart_init();

							LineChartInfo.options.plugins!.title!.text = "Nurse Call Type Trends (Number Of Calls By Type Within The Last 30 Days)"
							LineChartInfo.options.scales!.y = {
								...LineChartInfo.options.scales!.y,

								min: 0,
								max: 70 // Add 10% padding

							}
							LineChartInfo.data = chartData


							return LineChartInfo;
						})(),
					},
					{
						ComponentTitle: "Nurse Call Department Trends",
						ComponentName: "Line Chart",
						Config: (() => {

							// Generate an array of the last 30 days
							const generateDateArray = () => {
								const dates = [];
								for (let i = 29; i >= 0; i--) {
									const date = new Date();
									date.setDate(date.getDate() - i);
									dates.push(date);
								}
								return dates;
							};

							const dates = generateDateArray();

							// Generate mock data
							const generateMockData = () => {
								const data: { [key: string]: number[] } = {};
								staffingDepartments.map((department) => {
									const tempNumberOfCalls: number[] = []
									dates.map((date) => {
										tempNumberOfCalls.push(faker.number.int({ min: 1, max: 60 }))
									})

									data[department] = tempNumberOfCalls
								})
								return data;
							};

							const mockData = generateMockData();

							// Generate labels for the chart
							const labels = dates.map(date => date.toLocaleDateString("fr-Fr", { month: 'short', day: 'numeric', year: 'numeric' }));

							// Prepare data for the chart
							const chartData: ChartData<"line"> = {
								labels: labels,
								datasets: callTypes.map((type, index) => ({
									label: type,
									data: mockData[type],
									borderColor: faker.color.human(),
									backgroundColor: faker.color.human(),
									pointRadius: 5

								})),

							};

							const LineChartInfo = LineChart_init();

							LineChartInfo.options.plugins!.title!.text = "Nurse Call Department Trends (Number Of Calls By Department Within The Last 30 Days)"
							LineChartInfo.options.scales!.y = {
								...LineChartInfo.options.scales!.y,

								min: 0,
								max: 70 // Add 10% padding

							}
							LineChartInfo.data = chartData


							return LineChartInfo;
						})(),
					},
				],
			},
		],
	},
];


