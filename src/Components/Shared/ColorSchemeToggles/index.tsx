"use client";
import { useMantineColorScheme, Button, Group, Text } from "@mantine/core";

export const ColorSchemeToggles = () => {
	const { setColorScheme, clearColorScheme } = useMantineColorScheme();

	return (
		<Group>
			<Button onClick={() => setColorScheme("light")}>
				<Text
					size='xl'
					fw={750}
				>
					Light
				</Text>
			</Button>
			<Button onClick={() => setColorScheme("dark")}>
				<Text
					size='xl'
					fw={750}
				>
					Dark
				</Text>
			</Button>
			<Button onClick={() => setColorScheme("auto")}>
				<Text
					size='xl'
					fw={750}
				>
					Auto
				</Text>
			</Button>
			<Button onClick={clearColorScheme}>
				<Text
					size='xl'
					fw={750}
				>
					Clear
				</Text>
			</Button>
		</Group>
	);
};
