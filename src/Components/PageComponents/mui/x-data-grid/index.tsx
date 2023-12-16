// index.tsx
"use client";

import {
	DataGrid,
	GridCellParams,
	GridToolbar,
	GridValidRowModel,
} from "@mui/x-data-grid";
import { DataGridComponentProps } from "./DataGridData";
import {
	ActionIcon,
	Center,
	Group,
	Title,
	useMantineColorScheme,
} from "@mantine/core";
import { createTheme, ThemeProvider } from "@mui/material";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Box from "@mui/material/Box";
import React from "react";
import { useDisclosure } from "@mantine/hooks";

import { ModalComponent } from "@/Components/Shared/ModalComponent";
import {
	ModalComponentProps,
	PatientInfo_init,
	StaffInfo_init,
} from "@/Components/Shared/ModalComponent/ModalComponentData";

export const DataGridComponent = (props: DataGridComponentProps) => {
	const { colorScheme } = useMantineColorScheme();

	const [opened, toggle] = useDisclosure(false);

	const [modalProps, setModalProps] =
		React.useState<ModalComponentProps | null>(null);

	const handleCellClick = (params: GridCellParams) => {
		if (params.field === "nurse" || params.field === "patient") {
			const data: GridValidRowModel = params.row as GridValidRowModel;

			let newModalProps: ModalComponentProps;
			switch (params.field) {
				case "nurse":
					newModalProps = StaffInfo_init({
						// For StaffInfo
						modalTitle: "Staff Info",
						staffName: data.staffName,
						staffDob: data.staffDob,
						staffAge: data.staffAge,
						staffAddress: data.staffAddress,
						staffBloodType: data.staffBloodType,
						joinedDate: data.joinedDate,
						department: data.department,
						jobTitle: data.jobTitle,
						staffProfilePictureURL: data.staffProfilePictureURL,
					});
					break;
				case "patient":
					newModalProps = PatientInfo_init({
						// 	// For PatientInfo
						modalTitle: "Patient Info",
						patientName: data.patientName,
						patientDob: data.patientDob,
						patientAge: data.patientAge,
						patientAddress: data.patientAddress,
						patientBloodType: data.patientBloodType,
						insuranceName: data.insuranceName,
						medicalHistory: data.medicalHistory,
						patientProfilePictureURL: data.patientProfilePictureURL,
					});
					break;
			}

			newModalProps = {
				...newModalProps,

				config: {
					size: "auto",
					opened: opened,
					onClose: () => {
						toggle.close();
						setModalProps(null);
					},
				},
			};

			setModalProps(newModalProps);
			toggle.toggle();
		}
	};

	const theme = createTheme({
		palette: {
			mode: colorScheme === "dark" ? "dark" : "light",
		},
	});

	return (
		<Box sx={{ height: 750, width: 1 }}>
			<Center m={"xs"}>
				<Title order={4}>{props.title}</Title>
			</Center>

			<ThemeProvider theme={theme}>
				<DataGrid
					rows={props.rows}
					columns={props.columns.map((column) => ({
						...column,
						renderCell:
							column.field === "nurse" || column.field === "patient"
								? (column_params) => (
										<Group
											justify='space-between'
											preventGrowOverflow={false}
											wrap='nowrap'
										>
											<ActionIcon
												variant='light'
												color='blue'
												onClick={() => handleCellClick(column_params)}
											>
												<IoIosInformationCircleOutline />
											</ActionIcon>
											{column_params.value}
										</Group>
								  )
								: column.renderCell,
					}))}
					slots={{
						toolbar: GridToolbar,
					}}
					slotProps={{
						toolbar: {
							showQuickFilter: true,
						},
					}}
				/>
				{modalProps && <ModalComponent {...modalProps} />}
			</ThemeProvider>
		</Box>
	);
};
