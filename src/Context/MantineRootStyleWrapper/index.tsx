import "server-only";

import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

interface Props {
	children: React.ReactNode;
}

const MantineRootStyleWrapper = (props: Props) => {
	return (
		<>
			<ColorSchemeScript defaultColorScheme='auto' />
			<MantineProvider defaultColorScheme='auto'>
				{props.children}
			</MantineProvider>
		</>
	);
};

export default MantineRootStyleWrapper;
