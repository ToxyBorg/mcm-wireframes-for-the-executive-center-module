import "server-only";

import { PageComponentsType } from "../Data/PagesComponentsData";
import { Flex } from "@mantine/core";
import { GettingWrappersForDashboardPagesComponents } from "./GettingWrappersForDashboardPagesComponents";
import { GettingWrappedComponentForPage } from "./GettingWrappedComponentForPage";

interface WrapperWithWrappedComponentsInterface {
	WrapperWithWrappedData: PageComponentsType[];
}

export const WrapperWithWrappedComponents = (
	props: WrapperWithWrappedComponentsInterface
) => {
	return (
		<Flex
			gap='xl'
			justify='flex-start'
			align='center'
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
	);
};
