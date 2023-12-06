import "server-only";
// "use server";

import { faker } from "@faker-js/faker";

import { LineChartProps, LineChart_init } from "../LineChart/LineChartData";
import { PieChartProps, PieChart_init } from "../PieChart/PieChartData";
import {
	TableComponentProps,
	TableComponent_init,
} from "../TableComponent/TableComponentData";
import {
	VerticalBarChartProps,
	VerticalBarChart_init,
} from "../VerticalBarChart/VerticalBarChartData";
import {
	VirtualizedListProps,
	VirtualizedList_init,
} from "../VirtualizedList/VirtualizedListData";
import {
	CenterProps,
	ContainerProps,
	Flex,
	FlexProps,
	TabsProps,
} from "@mantine/core";
import { Chart, ChartData, ChartOptions, Color } from "chart.js";
import {
	DoughnutChartProps,
	DoughnutChart_init,
} from "../DoughnutChart/DoughnutChartData";
import {
	BigCalendarComponentProps,
	BigCalendarComponent_init,
} from "../BigCalendarComponent/BigCalendarComponentData";
import {
	CardsCarouselComponentProps,
	CardsCarouselComponent_init,
} from "../CardsCarouselComponent/CardsCarouselComponentData";
import {
	BubbleChartProps,
	BubbleChart_init,
} from "../BubbleChart/BubbleChartData";
import { RadarChartProps, RadarChart_init } from "../RadarChart/RadarChartData";
import {
	ScatterChartProps,
	ScatterChart_init,
} from "../ScatterChart/ScatterChartData";

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
	| "Scatter Chart";
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
	| ScatterChartProps;

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
					WrapperName: "Tabs",
					WrapperProps: {},
				},
				WrappedComponents: [
					{
						ComponentTitle: "Emergency Resolution Times",
						ComponentName: "Scatter Chart",
						Config: (() => {
							// Define the types of calls, shifts, and staff members
							// const callTypes = ["Emergency", "Routine", "Check-up"];
							const callTypes = ["Emergency"];
							const shifts = [
								{ name: "Morning", startHour: 8, endHour: 16 },
								{ name: "Afternoon", startHour: 16, endHour: 24 },
								{ name: "Night", startHour: 0, endHour: 8 },
							];
							// Generate random names and colors for the staff members
							const staffMembers = Array.from({ length: 5 }, () => ({
								name: faker.person.fullName(),
								backgroundColor: faker.color.hsl({ format: "css" }),
								borderColor: faker.color.hsl({ format: "css" }),
							}));

							// Get the current hour
							const currentHour = new Date().getHours();

							const chart = ScatterChart_init();

							chart.options.plugins!.title!.text =
								"Resolution Times by Call Type, Shift, and Staff Member for the last 7 days";

							chart.data = {
								datasets: shifts.flatMap((shift) =>
									staffMembers.flatMap((staffMember) =>
										callTypes.map((callType) => ({
											label: `${shift.name} - ${staffMember.name} - ${callType}`,
											backgroundColor: staffMember.backgroundColor,
											borderColor: staffMember.borderColor,
											data: Array.from({ length: 7 }, (_, i) => {
												const date = new Date();
												date.setDate(date.getDate() - i);
												date.setHours(
													faker.number.int({
														min: shift.startHour,
														max: shift.endHour,
													})
												);
												return {
													x: date.getTime(),
													y: faker.number.int({ min: 1, max: 60 }),
												};
											}),
											pointRadius: 10,
											hidden: !(
												currentHour >= shift.startHour &&
												currentHour < shift.endHour
											),
										}))
									)
								),
							};

							chart.options.scales!.x = {
								offset: true,
								type: "time",
								time: {
									unit: "day",
								},
								title: {
									display: true,
									text: "Time of Call",
								},
							};
							chart.options.scales!.y = {
								...chart.options.scales!.y,
								title: {
									display: true,
									text: "Resolution Time (minutes)",
								},
								max: 70,
							};

							return chart;
						})(),
					},
					{
						ComponentTitle: "Routine Resolution Times",
						ComponentName: "Scatter Chart",
						Config: (() => {
							// Define the types of calls, shifts, and staff members
							// const callTypes = ["Emergency", "Routine", "Check-up"];
							const callTypes = ["Routine"];
							const shifts = [
								{ name: "Morning", startHour: 8, endHour: 16 },
								{ name: "Afternoon", startHour: 16, endHour: 24 },
								{ name: "Night", startHour: 0, endHour: 8 },
							];
							// Generate random names and colors for the staff members
							const staffMembers = Array.from({ length: 5 }, () => ({
								name: faker.person.fullName(),
								backgroundColor: faker.color.hsl({ format: "css" }),
								borderColor: faker.color.hsl({ format: "css" }),
							}));

							// Get the current hour
							const currentHour = new Date().getHours();

							const chart = ScatterChart_init();

							chart.options.plugins!.title!.text =
								"Resolution Times by Call Type, Shift, and Staff Member for the last 7 days";

							chart.data = {
								datasets: shifts.flatMap((shift) =>
									staffMembers.flatMap((staffMember) =>
										callTypes.map((callType) => ({
											label: `${shift.name} - ${staffMember.name} - ${callType}`,
											backgroundColor: staffMember.backgroundColor,
											borderColor: staffMember.borderColor,
											data: Array.from({ length: 7 }, (_, i) => {
												const date = new Date();
												date.setDate(date.getDate() - i);
												date.setHours(
													faker.number.int({
														min: shift.startHour,
														max: shift.endHour,
													})
												);
												return {
													x: date.getTime(),
													y: faker.number.int({ min: 1, max: 60 }),
												};
											}),
											pointRadius: 10,
											hidden: !(
												currentHour >= shift.startHour &&
												currentHour < shift.endHour
											),
										}))
									)
								),
							};

							chart.options.scales!.x = {
								offset: true,
								type: "time",
								time: {
									unit: "day",
								},
								title: {
									display: true,
									text: "Time of Call",
								},
							};
							chart.options.scales!.y = {
								...chart.options.scales!.y,
								title: {
									display: true,
									text: "Resolution Time (minutes)",
								},
								max: 70,
							};
							return chart;
						})(),
					},
					{
						ComponentTitle: "Check-up Resolution Times",
						ComponentName: "Scatter Chart",
						Config: (() => {
							// Define the types of calls, shifts, and staff members
							// const callTypes = ["Emergency", "Routine", "Check-up"];
							const callTypes = ["Check-up"];
							const shifts = [
								{ name: "Morning", startHour: 8, endHour: 16 },
								{ name: "Afternoon", startHour: 16, endHour: 24 },
								{ name: "Night", startHour: 0, endHour: 8 },
							];
							// Generate random names and colors for the staff members
							const staffMembers = Array.from({ length: 5 }, () => ({
								name: faker.person.fullName(),
								backgroundColor: faker.color.hsl({ format: "css" }),
								borderColor: faker.color.hsl({ format: "css" }),
							}));

							// Get the current hour
							const currentHour = new Date().getHours();

							const chart = ScatterChart_init();

							chart.options.plugins!.title!.text =
								"Resolution Times by Call Type, Shift, and Staff Member for the last 7 days";

							chart.data = {
								datasets: shifts.flatMap((shift) =>
									staffMembers.flatMap((staffMember) =>
										callTypes.map((callType) => ({
											label: `${shift.name} - ${staffMember.name} - ${callType}`,
											backgroundColor: staffMember.backgroundColor,
											borderColor: staffMember.borderColor,
											data: Array.from({ length: 7 }, (_, i) => {
												const date = new Date();
												date.setDate(date.getDate() - i);
												date.setHours(
													faker.number.int({
														min: shift.startHour,
														max: shift.endHour,
													})
												);
												return {
													x: date.getTime(),
													y: faker.number.int({ min: 1, max: 60 }),
												};
											}),
											pointRadius: 10,
											hidden: !(
												currentHour >= shift.startHour &&
												currentHour < shift.endHour
											),
										}))
									)
								),
							};

							chart.options.scales!.x = {
								offset: true,
								type: "time",
								time: {
									unit: "day",
								},
								title: {
									display: true,
									text: "Time of Call",
								},
							};
							chart.options.scales!.y = {
								...chart.options.scales!.y,
								title: {
									display: true,
									text: "Resolution Time (minutes)",
								},
								max: 70,
							};

							return chart;
						})(),
					},
				],
			},
		],
	},
];
