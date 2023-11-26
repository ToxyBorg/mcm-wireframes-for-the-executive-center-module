import "server-only";

import { Container, ContainerProps, Flex, FlexProps } from "@mantine/core";
import { PageComponentsWrapperInterface } from "../Data/PagesComponentsData";

interface GettingWrappersForDashboardPagesComponentsInterface {
	Wrapper: PageComponentsWrapperInterface;
	children: React.ReactNode;
}

export const GettingWrappersForDashboardPagesComponents = (
	props: GettingWrappersForDashboardPagesComponentsInterface
) => {
	if (props.Wrapper.WrapperName === "Flex") {
		function isFlexProps(
			obj: typeof props.Wrapper.WrapperProps
		): obj is FlexProps {
			return (obj as FlexProps) !== undefined;
		}

		if (isFlexProps(props.Wrapper.WrapperProps)) {
			return <Flex {...props.Wrapper.WrapperProps}>{props.children}</Flex>;
		} else {
			return <div>The Flex Wrapper is Wrong!</div>;
		}
	} else if (props.Wrapper.WrapperName === "Container") {
		function isContainerProps(
			obj: typeof props.Wrapper.WrapperProps
		): obj is ContainerProps {
			return (obj as ContainerProps) !== undefined;
		}

		if (isContainerProps(props.Wrapper.WrapperProps)) {
			return (
				<Container {...props.Wrapper.WrapperProps}>{props.children}</Container>
			);
		} else {
			return <div>The Container Wrapper is Wrong!</div>;
		}
	} else if (props.Wrapper.WrapperName === "Div") {
		function isDivProps(
			obj: typeof props.Wrapper.WrapperProps
		): obj is React.HTMLAttributes<HTMLDivElement> {
			return (obj as React.HTMLAttributes<HTMLDivElement>) !== undefined;
		}

		if (isDivProps(props.Wrapper.WrapperProps)) {
			return <div {...props.Wrapper.WrapperProps}>{props.children}</div>;
		} else {
			return <div>The div Wrapper is Wrong!</div>;
		}
	}
};
