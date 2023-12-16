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
import { Bar } from "react-chartjs-2";
import { VerticalBarChartProps } from "./VerticalBarChartData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const VerticalBarChart = (props: VerticalBarChartProps) => {
	return (
		<Bar
			options={props.options}
			data={props.data}
			redraw
		/>
	);
};
