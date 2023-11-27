"use client";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChartProps } from "./DoughnutChartData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const DoughnutChart = (props: DoughnutChartProps) => {
	return (
		<Doughnut
			options={props.options}
			data={props.data}
			redraw
			style={{
				maxWidth: 700,
				maxHeight: 700,
			}}
		/>
	);
};
