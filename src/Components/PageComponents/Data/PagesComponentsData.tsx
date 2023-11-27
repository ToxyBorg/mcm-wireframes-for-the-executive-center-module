import "server-only";

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
import { ChartData, ChartOptions } from "chart.js";
import {
	DoughnutChartProps,
	DoughnutChart_init,
} from "../DoughnutChart/DoughnutChartData";

type PageComponentNamesTypes =
	| "Line Chart"
	| "Pie Chart"
	| "Table"
	| "Vertical Bar Chart"
	| "Virtualized List"
	| "Doughnut Chart";
type PageComponentConfigTypes =
	| LineChartProps
	| PieChartProps
	| TableComponentProps
	| VerticalBarChartProps
	| VirtualizedListProps
	| DoughnutChartProps;

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
];
