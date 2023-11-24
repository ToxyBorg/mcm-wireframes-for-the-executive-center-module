// import "server-only";
"use client";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { LineChartProps } from "./LineChartData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const LineChart = (props: LineChartProps) => {
	return (
		<Line
			options={props.options}
			data={props.data}
		/>
	);
};
