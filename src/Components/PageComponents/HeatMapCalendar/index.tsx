// HeatMap index.tsx

"use client";

import HeatMap from "@uiw/react-heat-map";
import { HeatMapCalendarProps } from "./HeatMapCalendarData";
import { Tooltip, useMantineColorScheme } from "@mantine/core";

export const HeatMapCalendar = (props: HeatMapCalendarProps) => {
	const { colorScheme } = useMantineColorScheme();

	return (
		<HeatMap
			{...props.options}
			value={props.data}
			style={{
				// border: "2px solid red",
				minHeight: 300,
				width: "100%",
				color: colorScheme === "dark" ? "#e8d9db" : undefined,
			}}
			panelColors={
				colorScheme === "dark"
					? {
							0: "#2D3748",
							1: "#4A5568",
							2: "#718096",
							3: "#A0AEC0",
							4: "#CBD5E0",
							5: "#dfe3ef",
					  }
					: {
							0: "#EBEDF0",
							1: "#9BE9A8",
							2: "#40C463",
							3: "#30A14E",
							4: "#216E39",
							5: "#0e371b",
					  }
			}
			rectRender={(props, data) => {
				if (!data.count) return <rect {...props} />;
				return (
					<Tooltip
						key={props.key}
						position='top'
						label={`count: ${data.count || 0}`}
					>
						<rect {...props} />
					</Tooltip>
				);
			}}
		/>
	);
};
