// index.tsx
"use client";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DataGridComponentProps } from "./DataGridData";
import { Center, Title, useMantineColorScheme } from "@mantine/core";
import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";

export const DataGridComponent = (props: DataGridComponentProps) => {
	const { colorScheme } = useMantineColorScheme();

	const theme = createTheme({
		palette: {
			mode: colorScheme === "dark" ? "dark" : "light",
		},
	});

	return (
		<Box sx={{ height: 750, width: 1 }}>
			<ThemeProvider theme={theme}>
				<DataGrid
					rows={props.rows}
					columns={props.columns}
					slots={{
						toolbar: () => {
							return (
								<>
									<Center m={"xs"}>
										<Title order={4}>{props.title}</Title>
									</Center>
									<GridToolbar />
								</>
							);
						},
					}}
					slotProps={{
						toolbar: {
							showQuickFilter: true,
						},
					}}
				/>
			</ThemeProvider>
		</Box>
	);
};
