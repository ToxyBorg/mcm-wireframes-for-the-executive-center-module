"use client";

import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);
import { RadarChartProps } from "./RadarChartData";

export const RadarChart = (props: RadarChartProps) => {
	return (
		<Radar
			data={props.data}
			options={props.options}
			redraw
			style={{
				maxWidth: 800,
				maxHeight: 800,
			}}
		/>
	);
};
