"use client";

import { Virtuoso } from "react-virtuoso";
import {
	VirtualizedListProps,
	VirtualizedList_init,
} from "./VirtualizedListData";
import {
	Center,
	Container,
	Flex,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";

export const VirtualizedList = (props: VirtualizedListProps) => {
	const { rows, title } = VirtualizedList_init(props);

	return (
		<Container fluid>
			<Title order={1}>{title}</Title>
			<Virtuoso
				style={{ height: "600px" }}
				totalCount={rows.length}
				data={rows}
				itemContent={(index) => (
					<Flex
						mih={50}
						bg='rgba(0, 0, 0, .3)'
						gap='sm'
						justify='flex-start'
						align='flex-start'
						direction='column'
						wrap='wrap'
						p={"xs"}
						style={{
							border: "2px solid gray",
						}}
					>
						{Object.entries(rows[index]).map(([key, value], valueIndex) => (
							<Text
								px={"xs"}
								w={"100%"}
								key={key}
								// bg={valueIndex % 2 === 0 ? "grape.5" : "grape.3"}
							>
								{`${key}: ${value}`}
							</Text>
						))}
					</Flex>
				)}
			/>
		</Container>
	);
};
