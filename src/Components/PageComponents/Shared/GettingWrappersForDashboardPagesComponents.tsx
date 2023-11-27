import "server-only";

import {
	Center,
	CenterProps,
	Container,
	ContainerProps,
	Flex,
	FlexProps,
	Tabs,
	TabsList,
	TabsPanel,
	TabsProps,
	TabsTab,
} from "@mantine/core";
import {
	PageComponentsWrapperInterface,
	PageWrappedComponentsInterface,
} from "../Data/PagesComponentsData";
import { GettingWrappedComponentForPage } from "./GettingWrappedComponentForPage";

interface GettingWrappersForDashboardPagesComponentsInterface {
	Wrapper: PageComponentsWrapperInterface;
	Wrapped: PageWrappedComponentsInterface[];
	// children: React.ReactNode;
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
			return (
				<Flex {...props.Wrapper.WrapperProps}>
					<GettingWrappedComponentForPage PagesComponentData={props.Wrapped} />
				</Flex>
			);
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
				<Container {...props.Wrapper.WrapperProps}>
					<GettingWrappedComponentForPage PagesComponentData={props.Wrapped} />
				</Container>
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
			return (
				<div {...props.Wrapper.WrapperProps}>
					<GettingWrappedComponentForPage PagesComponentData={props.Wrapped} />
				</div>
			);
		} else {
			return <div>The div Wrapper is Wrong!</div>;
		}
	} else if (props.Wrapper.WrapperName === "Tabs") {
		function isTabsProps(
			obj: typeof props.Wrapper.WrapperProps
		): obj is TabsProps {
			return (obj as TabsProps) !== undefined;
		}

		if (isTabsProps(props.Wrapper.WrapperProps)) {
			return (
				<Tabs
					{...props.Wrapper.WrapperProps}
					defaultValue={props.Wrapped.at(0)?.ComponentTitle}
				>
					<TabsList>
						{props.Wrapped.map((wrappedItem, wrappedItemIndex) => {
							return (
								<TabsTab
									value={wrappedItem.ComponentTitle}
									key={wrappedItemIndex}
								>
									{wrappedItem.ComponentTitle}
								</TabsTab>
							);
						})}
					</TabsList>
					{props.Wrapped.map((wrappedItem, wrappedItemIndex) => {
						return (
							<TabsPanel
								value={wrappedItem.ComponentTitle}
								key={wrappedItemIndex}
							>
								<GettingWrappedComponentForPage
									PagesComponentData={[wrappedItem]}
								/>
							</TabsPanel>
						);
					})}
				</Tabs>
			);
		} else {
			return <div>The Tabs Wrapper is Wrong!</div>;
		}
	} else if (props.Wrapper.WrapperName === "Center") {
		function isCenterProps(
			obj: typeof props.Wrapper.WrapperProps
		): obj is CenterProps {
			return (obj as CenterProps) !== undefined;
		}

		if (isCenterProps(props.Wrapper.WrapperProps)) {
			return (
				<Center {...props.Wrapper.WrapperProps}>
					<GettingWrappedComponentForPage PagesComponentData={props.Wrapped} />
				</Center>
			);
		} else {
			return <div>The Center Wrapper is Wrong!</div>;
		}
	}
};
