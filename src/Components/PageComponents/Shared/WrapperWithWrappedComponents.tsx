import "server-only";

import { PageComponentsType } from "./Data/PagesComponentsData";
import { Flex, Space, Stack } from "@mantine/core";
import { GettingWrappersForDashboardPagesComponents } from "./GettingWrappersForDashboardPagesComponents";
import { GettingWrappedComponentForPage } from "./GettingWrappedComponentForPage";

interface WrapperWithWrappedComponentsInterface {
	WrapperWithWrappedData: PageComponentsType[];
}

export const WrapperWithWrappedComponents = (
	props: WrapperWithWrappedComponentsInterface
) => {
	return (
		<Stack
			gap='xl'
			align='stretch'
			justify='space-around'
		>
			{props.WrapperWithWrappedData.map((WrapperAndWrapped, WrapperIndex) => {
				return (
					<GettingWrappersForDashboardPagesComponents
						Wrapped={WrapperAndWrapped.WrappedComponents}
						Wrapper={WrapperAndWrapped.WrapperForComponents}
						key={WrapperIndex}
					/>
				);
			})}
		</Stack>
	);
};
