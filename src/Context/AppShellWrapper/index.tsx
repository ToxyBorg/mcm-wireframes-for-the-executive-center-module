import "server-only";

import {
	AppShell,
	AppShellHeader,
	AppShellMain,
	AppShellNavbar,
} from "@mantine/core";
import ColorSchemeToggles from "@/Components/Testing/ColorSchemeToggles";
import { NavBarRootComponent } from "@/Components/NavBarRootComponent";

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
			<AppShellHeader>
				<ColorSchemeToggles />
			</AppShellHeader>

			<NavBarRootComponent />

			<AppShellMain>{props.children}</AppShellMain>
		</AppShell>
	);
};

export default AppShellWrapper;
