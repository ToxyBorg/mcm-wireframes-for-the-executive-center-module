import { Container, Paper, Skeleton } from "@mantine/core";

const Loading = () => {
	return (
		<div style={{ padding: "1rem" }}>
			<Paper
				p='md'
				shadow='xs'
				style={{ marginBottom: "1rem" }}
			>
				<Skeleton
					height={250}
					circle
					mb='xl'
				/>
				<Skeleton
					height={8}
					radius='xl'
				/>
				<Skeleton
					height={8}
					mt={6}
					radius='xl'
				/>
				<Skeleton
					height={8}
					mt={6}
					width='70%'
					radius='xl'
				/>
			</Paper>
			<Paper
				p='md'
				shadow='xs'
				style={{ marginBottom: "1rem" }}
			>
				<Skeleton height={200} /> {/* For a chart */}
			</Paper>
			<Paper
				p='md'
				shadow='xs'
				style={{ marginBottom: "1rem" }}
			>
				<Skeleton height={100} /> {/* For a card */}
			</Paper>
			<Paper
				p='md'
				shadow='xs'
			>
				<Skeleton height={300} /> {/* For a table */}
			</Paper>
		</div>
	);
};

export default Loading;
