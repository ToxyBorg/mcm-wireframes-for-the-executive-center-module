import "server-only";

import {
	AppShell,
	AppShellHeader,
	AppShellMain,
	Button,
	Group,
	Text,
} from "@mantine/core";
import ColorSchemeToggles from "@/Components/Testing/ColorSchemeToggles";
import { NavBarRootComponent } from "@/Components/NavBarRootComponent";
import Link from "next/link";

interface Props {
	children: React.ReactNode;
}

const AppShellWrapper = (props: Props) => {
	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: "sm" }}
			padding='md'
		>
			<AppShellHeader p={"xs"}>
				<Group justify='space-between'>
					<Button
						p={"xs"}
						component={Link}
						href='/'
						td={"none"}
					>
						<Text
							size='xl'
							fw={750}
						>
							MCM Executive Center Dashboard Outline
						</Text>
					</Button>
					<ColorSchemeToggles />
				</Group>
			</AppShellHeader>

			<NavBarRootComponent />

			<AppShellMain>{props.children}</AppShellMain>
		</AppShell>
	);
};

export default AppShellWrapper;
