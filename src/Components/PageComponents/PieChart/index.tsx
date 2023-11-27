"use client";

import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import { PieChartProps } from "./PieChartData";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = (props: PieChartProps) => {
	return (
		<Pie
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
