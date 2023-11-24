import {
	Table,
	TableScrollContainer,
	TableTbody,
	TableTd,
	TableTh,
	TableThead,
	TableTr,
} from "@mantine/core";
import { TableComponentProps, TableComponent_init } from "./TableComponentData";

export const TableComponent = (props: TableComponentProps) => {
	const { columns, rows } = TableComponent_init(props);

	const headers = columns.map((column) => (
		<TableTh key={column.accessor}>{column.header}</TableTh>
	));
	const bodyRows = rows.map((row) => (
		<TableTr key={row.id}>
			{columns.map((column) => (
				<TableTd key={column.accessor}>{row[column.accessor]}</TableTd>
			))}
		</TableTr>
	));

	return (
		<TableScrollContainer minWidth={500}>
			<Table
				striped
				highlightOnHover
				withTableBorder
				withColumnBorders
			>
				<TableThead>
					<TableTr>{headers}</TableTr>
				</TableThead>
				<TableTbody>{bodyRows}</TableTbody>
			</Table>
		</TableScrollContainer>
	);
};
