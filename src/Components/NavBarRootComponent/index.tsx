import "server-only";

import {
	AppShellNavbar,
	AppShellSection,
	Button,
	ScrollArea,
	Text,
} from "@mantine/core";
import Link from "next/link";
import NavbarMiddleSection from "./NavbarMiddleSection";

interface NavBarRootComponentProps {}

export const NavBarRootComponent = (props: NavBarRootComponentProps) => {
	return (
		<AppShellNavbar>
			<AppShellSection p={"md"}>
				<Button
					p={"xs"}
					component={Link}
					href='/Home'
					td={"none"}
				>
					<Text
						size='xl'
						fw={750}
					>
						Home
					</Text>
				</Button>
			</AppShellSection>

			<AppShellSection
				component={ScrollArea}
				grow
			>
				<NavbarMiddleSection />
			</AppShellSection>

			<AppShellSection p={"xs"}>
				<h1>Menu</h1>
			</AppShellSection>
		</AppShellNavbar>
	);
};
