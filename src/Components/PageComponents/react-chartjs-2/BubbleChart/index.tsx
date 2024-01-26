"use client";

import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	Tooltip,
	Legend,
} from "chart.js";
import { BubbleChartProps } from "./BubbleChartData";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const BubbleChart = (props: BubbleChartProps) => {
	return (
		<Bubble
			options={props.options}
			data={props.data}
			redraw
		/>
	);
};
