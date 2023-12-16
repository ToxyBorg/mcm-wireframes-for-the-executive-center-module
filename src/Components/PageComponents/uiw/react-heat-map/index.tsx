// HeatMapCalendar index.tsx

"use client";

import HeatMap, { HeatMapValue } from "@uiw/react-heat-map";
import { Center, Title, Tooltip, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import {
	ModalComponentProps,
	StaffCallsHeatMapCalendar,
	StaffCallsHeatMapCalendar_init,
} from "@/Components/Shared/ModalComponent/ModalComponentData";
import { ModalComponent } from "@/Components/Shared/ModalComponent";
import { UiwHeatMapCalendarProps } from "./UiwHeatMapCalendarData";

export const UiwHeatMapCalendar = (props: UiwHeatMapCalendarProps) => {
	const { colorScheme } = useMantineColorScheme();

	const [opened, toggle] = useDisclosure(false);

	const [modalProps, setModalProps] =
		React.useState<ModalComponentProps | null>(null);

	const handleCellClick = (params: HeatMapValue) => {
		const data: StaffCallsHeatMapCalendar = params as StaffCallsHeatMapCalendar;

		let newModalProps = StaffCallsHeatMapCalendar_init({
			count: data.count,
			date: data.date,
			modalTitle: "Heat Map Calls Info",
			staffCalls: data.staffCalls,

			config: {
				size: "auto",
				opened: opened,
				onClose: () => {
					toggle.close();
					setModalProps(null);
				},
			},
		});

		setModalProps(newModalProps);
		toggle.toggle();
	};

	return (
		<>
			<Center>
				<Title order={1}>{props.title}</Title>
			</Center>

			<HeatMap
				{...props.options}
				value={props.data}
				style={{
					minHeight: 300,
					width: "100%",
					color: colorScheme === "dark" ? "#e8d9db" : undefined,
				}}
				panelColors={
					colorScheme === "dark"
						? {
								0: "#2D3748",
								10: "#4A5568",
								20: "#718096",
								30: "#A0AEC0",
								40: "#CBD5E0",
								50: "#dfe3ef",
						  }
						: {
								0: "#EBEDF0",
								10: "#9BE9A8",
								20: "#40C463",
								30: "#30A14E",
								40: "#216E39",
								50: "#0e371b",
						  }
				}
				rectRender={(props, data) => {
					if (!data.count || data.count === 0) return <rect {...props} />;
					return (
						<Tooltip
							key={props.key}
							position='top'
							label={`${data.count || 0} Calls on ${new Date(
								data.date
							).toDateString()}`}
						>
							<rect
								{...props}
								onClick={() => handleCellClick(data)}
							/>
						</Tooltip>
					);
				}}
			/>
			{modalProps && <ModalComponent {...modalProps} />}
		</>
	);
};
