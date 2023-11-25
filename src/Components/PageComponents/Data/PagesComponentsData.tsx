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

type PageComponentNamesTypes =
	| "Line Chart"
	| "Pie Chart"
	| "Table"
	| "Vertical Bar Chart"
	| "Virtualized List";
type PageComponentConfigTypes =
	| LineChartProps
	| PieChartProps
	| TableComponentProps
	| VerticalBarChartProps
	| VirtualizedListProps;

export interface PageComponentsType {
	ComponentName: PageComponentNamesTypes;
	Config: PageComponentConfigTypes;
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
				ComponentName: "Line Chart",
				Config: (() => {
					let chart = LineChart_init();
					chart.options.plugins!.title!.text = "Patients discharge Line chart";
					chart.data.datasets[0].label = "My New Label 1";
					return chart;
				})(),
			},
			{
				ComponentName: "Pie Chart",
				Config: (() => {
					let chart = PieChart_init();
					chart.options.plugins!.title!.text =
						"Patient demographics (Age / Percentage)";
					chart.data.datasets[0].label = "# Percentage of patients";
					chart.data.labels = [
						"Ages 0-5",
						"Ages 6-13",
						"Ages 14-18",
						"Ages 19-30",
						"Ages 31-50",
						"Ages 51-80+",
					];
					return chart;
				})(),
			},
			{
				ComponentName: "Table",
				Config: TableComponent_init(),
			},
		],
	},
	{
		PageLinkName: "Staff",
		PageComponents: [
			{
				ComponentName: "Vertical Bar Chart",
				Config: (() => {
					let chart = VerticalBarChart_init({
						options: {
							plugins: {
								title: {
									display: true,
									text: "Staff availability",
								},
							},
						},
					});

					return chart;
				})(),
			},
			{
				ComponentName: "Pie Chart",
				Config: (() => {
					let chart = PieChart_init();
					chart.options.plugins!.title!.text = "Staff roles";
					chart.data.datasets[0].label = "# Staff";
					chart.data.labels = [
						"data 1",
						"data 2",
						"data 3",
						"data 4",
						"data 5",
					];
					return chart;
				})(),
			},
			{
				ComponentName: "Table",
				Config: (() => {
					let chart = TableComponent_init({
						caption: "individual staff schedules",
						captionSide: "top",
					});
					return chart;
				})(),
			},
		],
	},
	{
		PageLinkName: "Equipment",
		PageComponents: [
			{
				ComponentName: "Line Chart",
				Config: (() => {
					let chart = LineChart_init({
						options: {
							plugins: {
								title: {
									display: true,
									text: "Equipment usage Line chart",
								},
							},
						},
					});
					chart.data.datasets[0].label = "Equipment 1";
					chart.data.datasets[1].label = "Equipment 2";
					return chart;
				})(),
			},
			{
				ComponentName: "Table",
				Config: (() => {
					let chart = TableComponent_init({
						caption: "Equipment maintenance schedules",
						captionSide: "top",
					});
					return chart;
				})(),
			},
		],
	},
	{
		PageLinkName: "Nurse_Call_Data",
		PageComponents: [
			{
				ComponentName: "Virtualized List",
				Config: (() => {
					const generateNurseCalls = (count: number) => {
						return Array.from({ length: count }, () => {
							return {
								id: faker.string.uuid(),
								nurse: faker.person.fullName(),
								room_number: `Room ${faker.number.int({ min: 1, max: 100 })}`,
								callTime: `${faker.number.int({
									min: 0,
									max: 1,
								})}h:${faker.number.int({
									min: 0,
									max: 59,
								})}m:${faker.number.int({ min: 0, max: 59 })}s`,
								patient_name: faker.person.fullName(),
								patient_age: faker.number.int({ min: 4, max: 99 }),
								condition: faker.string.fromCharacters([
									"Stable",
									"Critical",
									"Recovering",
									"Remission",
								]),
								checkInTime: faker.date.recent({ days: 1 }).toString(),
							};
						});
					};

					const nurseCalls = generateNurseCalls(10000);

					let chart = VirtualizedList_init({
						title: "active nurse calls",
						rows: nurseCalls,
					});
					return chart;
				})(),
			},
			{
				ComponentName: "Table",
				Config: (() => {
					let chart = TableComponent_init({
						caption: "Equipment maintenance schedules",
						captionSide: "top",
					});
					return chart;
				})(),
			},
		],
	},
];
