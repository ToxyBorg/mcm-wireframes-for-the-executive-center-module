import "server-only";

import { LineChartProps, LineChart_init } from "../LineChart/LineChartData";

type PageComponentNamesTypes = "Line Chart" | "option2" | "option3";
type PageComponentConfigTypes = LineChartProps | "Wrong Type";

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
									text: "Patients discharge Line chart 1",
								},
							},
						},
					});
					chart.data.datasets[0].label = "My New Label 1";
					return chart;
				})(),
			},
			{
				ComponentName: "Line Chart",
				Config: LineChart_init(),
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
