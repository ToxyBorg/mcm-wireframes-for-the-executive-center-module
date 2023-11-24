import "server-only";

import { LineChartProps, LineChart_init } from "../LineChart/LineChartData";
import { PieChartProps, PieChart_init } from "../PieChart/PieChartData";
import {
	TableComponentProps,
	TableComponent_init,
} from "../TableComponent/TableComponentData";

type PageComponentNamesTypes = "Line Chart" | "Pie Chart" | "Table";
type PageComponentConfigTypes =
	| LineChartProps
	| PieChartProps
	| TableComponentProps;

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
					let chart = LineChart_init({
						options: {
							plugins: {
								title: {
									display: true,
									text: "Patients discharge Line chart",
								},
							},
						},
					});
					chart.data.datasets[0].label = "My New Label 1";
					return chart;
				})(),
			},
			{
				ComponentName: "Pie Chart",
				Config: (() => {
					let chart = PieChart_init({
						options: {
							plugins: {
								title: {
									display: true,
									text: "Patient demographics (Age / Percentage)",
								},
							},
						},
					});
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
				ComponentName: "Line Chart",
				Config: LineChart_init(),
			},
		],
	},
];
