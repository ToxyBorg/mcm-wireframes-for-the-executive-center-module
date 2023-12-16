"use client";
// index.tsx
import Chart from "react-apexcharts";
import { TreeMapProps, TreeMap_init } from "./TreeMapData";

export const TreeMap = (props: TreeMapProps) => {
	return (
		<Chart
			options={props.options}
			series={props.series}
			type='treemap'
		/>
	);
};
