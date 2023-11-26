import "server-only";

import { PageWrappedComponentsInterface } from "../Data/PagesComponentsData";
import { LineChart } from "../LineChart";
import { LineChartProps } from "../LineChart/LineChartData";
import { PieChart } from "../PieChart";
import { PieChartProps } from "../PieChart/PieChartData";
import { TableComponent } from "../TableComponent";
import { TableComponentProps } from "../TableComponent/TableComponentData";
import { VerticalBarChart } from "../VerticalBarChart";
import { VerticalBarChartProps } from "../VerticalBarChart/VerticalBarChartData";
import { VirtualizedList } from "../VirtualizedList";
import { VirtualizedListProps } from "../VirtualizedList/VirtualizedListData";

interface GettingWrappedComponentForPageInterface {
	PagesComponentData: PageWrappedComponentsInterface[];
}

export const GettingWrappedComponentForPage = (
	props: GettingWrappedComponentForPageInterface
) => {
	return (
		<>
			{props.PagesComponentData.map((component, index) => {
				if (component.ComponentName === "Line Chart") {
					function isLineChartProps(
						obj: typeof component.Config
					): obj is LineChartProps {
						// Checking if properties exist in LineChartProps
						return (
							(obj as LineChartProps).data !== undefined &&
							(obj as LineChartProps).options !== undefined
						);
					}

					if (isLineChartProps(component.Config)) {
						// TypeScript knows that component.Config is of type LineChartProps here
						// Generate a LineChart component.Config
						return (
							<LineChart
								options={component.Config.options}
								data={component.Config.data}
								key={index}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type LineChartProps" here
						// We return a div that tells us the config is wrong for LineChart
						return (
							<div key={index}>
								The Line Chart Config For Element {index} is Wrong!
							</div>
						);
					}
				} else if (component.ComponentName === "Pie Chart") {
					function isPieChartProps(
						obj: typeof component.Config
					): obj is PieChartProps {
						// Checking if properties exist in PieChartProps
						return (
							(obj as PieChartProps).data !== undefined &&
							(obj as PieChartProps).options !== undefined
						);
					}

					if (isPieChartProps(component.Config)) {
						// TypeScript knows that component.Config is of type PieChartProps here
						// Generate a PieChart component.Config
						return (
							<PieChart
								options={component.Config.options}
								data={component.Config.data}
								key={index}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type PieChartProps" here
						// We return a div that tells us the config is wrong for PieChart
						return (
							<div key={index}>
								The Pie Chart Config For Element {index} is Wrong!
							</div>
						);
					}
				} else if (component.ComponentName === "Table") {
					function isTableProps(
						obj: typeof component.Config
					): obj is TableComponentProps {
						// Checking if properties exist in TableComponentProps
						return (
							(obj as TableComponentProps).columns !== undefined &&
							(obj as TableComponentProps).rows !== undefined &&
							(obj as TableComponentProps).caption !== undefined &&
							(obj as TableComponentProps).captionSide !== undefined
						);
					}

					if (isTableProps(component.Config)) {
						// TypeScript knows that component.Config is of type TableComponentProps here
						// Generate a Table component.Config
						return (
							<TableComponent
								key={index}
								columns={component.Config.columns}
								rows={component.Config.rows}
								caption={component.Config.caption}
								captionSide={component.Config.captionSide}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type TableComponentProps here
						// We return a div that tells us the config is wrong for TableComponent
						return (
							<div key={index}>
								The Table component Config For Element {index} is Wrong!
							</div>
						);
					}
				} else if (component.ComponentName === "Vertical Bar Chart") {
					function isVerticalBarChartProps(
						obj: typeof component.Config
					): obj is VerticalBarChartProps {
						// Checking if properties exist in VerticalBarChartProps
						return (
							(obj as VerticalBarChartProps).options !== undefined &&
							(obj as VerticalBarChartProps).data !== undefined
						);
					}

					if (isVerticalBarChartProps(component.Config)) {
						// TypeScript knows that component.Config is of type VerticalBarChartProps here
						// Generate a VerticalBarChart component.Config
						return (
							<VerticalBarChart
								key={index}
								options={component.Config.options}
								data={component.Config.data}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type VerticalBarChartProps here
						// We return a div that tells us the config is wrong for VerticalBarChart
						return (
							<div key={index}>
								The VerticalBarChart component Config For Element {index} is
								Wrong!
							</div>
						);
					}
				} else if (component.ComponentName === "Virtualized List") {
					function isVirtualizedListProps(
						obj: typeof component.Config
					): obj is VirtualizedListProps {
						// Checking if properties exist in VirtualizedListProps
						return (
							(obj as VirtualizedListProps).rows !== undefined &&
							(obj as VirtualizedListProps).title !== undefined
						);
					}

					if (isVirtualizedListProps(component.Config)) {
						// TypeScript knows that component.Config is of type VirtualizedListProps here
						// Generate a VirtualizedList component.Config
						return (
							<VirtualizedList
								key={index}
								rows={component.Config.rows}
								title={component.Config.title}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type VirtualizedListProps here
						// We return a div that tells us the config is wrong for VirtualizedList
						return (
							<div key={index}>
								The VirtualizedList component Config For Element {index} is
								Wrong!
							</div>
						);
					}
				}
			})}
		</>
	);
};
