"use client";

import "chartjs-adapter-date-fns";

import {
	Chart as ChartJS,
	CategoryScale,
	Legend,
	LinearScale,
	PointElement,
	TimeScale,
	Title,
	Tooltip,
} from "chart.js";

import { Chart, Scatter } from "react-chartjs-2";
import { ScatterChartProps } from "./ScatterChartData";

ChartJS.register(
	TimeScale,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	PointElement
);

export const ScatterChart = (props: ScatterChartProps) => {
	return (
		<Scatter
			options={props.options}
			data={props.data}
			redraw
		/>
	);
};
