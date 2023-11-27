import "server-only";

import { PageComponentsType } from "../Data/PagesComponentsData";
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
			//   h={300}
			// bg='dark.5'
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
					// 	{/* {WrapperAndWrapped.WrappedComponents} */}
					// 	<GettingWrappedComponentForPage
					// 		PagesComponentData={WrapperAndWrapped.WrappedComponents}
					// 	/>
					// </GettingWrappersForDashboardPagesComponents>
					// // <Space h="md" />
				);
			})}
		</Stack>
	);
};

/*

<Flex
			gap='xl'
			justify='flex-start'
			align='flex-start'
			direction='column'
			wrap='wrap'
		>
			{props.WrapperWithWrappedData.map((WrapperAndWrapped, WrapperIndex) => {
				return (
					<GettingWrappersForDashboardPagesComponents
						Wrapper={WrapperAndWrapped.WrapperForComponents}
						key={WrapperIndex}
					>
						<GettingWrappedComponentForPage
							PagesComponentData={WrapperAndWrapped.WrappedComponents}
						/>
					</GettingWrappersForDashboardPagesComponents>
				);
			})}
		</Flex>

*/
