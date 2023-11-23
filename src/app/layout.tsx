import "server-only";

// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import type { Metadata } from "next";
import ContextWrapper from "@/Context/ContextWrapper";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<ContextWrapper>{children}</ContextWrapper>
			</body>
		</html>
	);
}
