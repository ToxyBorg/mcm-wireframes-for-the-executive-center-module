import "server-only";

import {
	Table,
	TableCaption,
	TableScrollContainer,
	TableTbody,
	TableTd,
	TableTh,
	TableThead,
	TableTr,
} from "@mantine/core";
import { TableComponentProps, TableComponent_init } from "./TableComponentData";

export const TableComponent = (props: TableComponentProps) => {
	const { columns, rows, caption, captionSide } = TableComponent_init(props);

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
		<TableScrollContainer
			minWidth={500}
			styles={{
				scrollContainerInner: {
					maxHeight: 750,
				},
			}}
		>
			<Table
				stickyHeader
				striped
				highlightOnHover
				withTableBorder
				withColumnBorders
				captionSide={captionSide}
			>
				<TableCaption>{caption}</TableCaption>
				<TableThead>
					<TableTr>{headers}</TableTr>
				</TableThead>
				<TableTbody>{bodyRows}</TableTbody>
			</Table>
		</TableScrollContainer>
	);
};
