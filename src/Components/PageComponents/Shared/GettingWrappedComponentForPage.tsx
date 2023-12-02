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
import { DoughnutChartProps } from "../DoughnutChart/DoughnutChartData";
import { DoughnutChart } from "../DoughnutChart";
import { BigCalendarComponentProps } from "../BigCalendarComponent/BigCalendarComponentData";
import { BigCalendarComponent } from "../BigCalendarComponent";
import { CardsCarouselComponentProps } from "../CardsCarouselComponent/CardsCarouselComponentData";
import CardsCarouselComponent from "../CardsCarouselComponent";
import { BubbleChartProps } from "../BubbleChart/BubbleChartData";
import { BubbleChart } from "../BubbleChart";
import { RadarChartProps } from "../RadarChart/RadarChartData";
import { RadarChart } from "../RadarChart";

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
				} else if (component.ComponentName === "Doughnut Chart") {
					function isDoughnutChartProps(
						obj: typeof component.Config
					): obj is DoughnutChartProps {
						// Checking if properties exist in DoughnutChartProps
						return (
							(obj as DoughnutChartProps).data !== undefined &&
							(obj as DoughnutChartProps).options !== undefined
						);
					}

					if (isDoughnutChartProps(component.Config)) {
						// TypeScript knows that component.Config is of type DoughnutChartProps here
						// Generate a DoughnutChart component.Config
						return (
							<DoughnutChart
								options={component.Config.options}
								data={component.Config.data}
								key={index}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type DoughnutChartProps" here
						// We return a div that tells us the config is wrong for DoughnutChart
						return (
							<div key={index}>
								The Doughnut Chart Config For Element {index} is Wrong!
							</div>
						);
					}
				} else if (component.ComponentName === "Big Calendar") {
					function isBigCalendarProps(
						obj: typeof component.Config
					): obj is BigCalendarComponentProps {
						// Checking if properties exist in BigCalendarComponentProps
						return (
							(obj as BigCalendarComponentProps).events !== undefined &&
							(obj as BigCalendarComponentProps).calendarTitle !== undefined
						);
					}

					if (isBigCalendarProps(component.Config)) {
						// TypeScript knows that component.Config is of type BigCalendarComponentProps here
						// Generate a BigCalendar component.Config

						return (
							<BigCalendarComponent
								key={index}
								calendarTitle={component.Config.calendarTitle}
								events={component.Config.events}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type BigCalendarComponentProps here
						// We return a div that tells us the config is wrong for BigCalendarComponent
						return (
							<div key={index}>
								The BigCalendar component Config For Element {index} is Wrong!
							</div>
						);
					}
				} else if (component.ComponentName === "Cards Carousel") {
					function isCardsCarouselProps(
						obj: typeof component.Config
					): obj is CardsCarouselComponentProps {
						// Checking if properties exist in CardsCarouselComponentProps
						return (
							(obj as CardsCarouselComponentProps).title !== undefined &&
							(obj as CardsCarouselComponentProps).cardProps !== undefined &&
							(obj as CardsCarouselComponentProps).carouselProps !==
								undefined &&
							(obj as CardsCarouselComponentProps).data !== undefined
						);
					}

					if (isCardsCarouselProps(component.Config)) {
						// TypeScript knows that component.Config is of type CardsCarouselComponentProps here
						// Generate a CardsCarousel component.Config

						return (
							<CardsCarouselComponent
								key={index}
								title={component.Config.title}
								cardProps={component.Config.cardProps}
								carouselProps={component.Config.carouselProps}
								data={component.Config.data}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type CardsCarouselComponentProps here
						// We return a div that tells us the config is wrong for CardsCarouselComponent
						return (
							<div key={index}>
								The CardsCarousel component Config For Element {index} is Wrong!
							</div>
						);
					}
				} else if (component.ComponentName === "Bubble Chart") {
					function isBubbleChartProps(
						obj: typeof component.Config
					): obj is BubbleChartProps {
						// Checking if properties exist in BubbleChartProps
						return (
							(obj as BubbleChartProps).data !== undefined &&
							(obj as BubbleChartProps).options !== undefined
						);
					}

					if (isBubbleChartProps(component.Config)) {
						// TypeScript knows that component.Config is of type BubbleChartProps here
						// Generate a BubbleChart component.Config
						return (
							<BubbleChart
								options={component.Config.options}
								data={component.Config.data}
								key={index}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type BubbleChartProps" here
						// We return a div that tells us the config is wrong for BubbleChart
						return (
							<div key={index}>
								The Bubble Chart Config For Element {index} is Wrong!
							</div>
						);
					}
				} else if (component.ComponentName === "Radar Chart") {
					function isRadarChartProps(
						obj: typeof component.Config
					): obj is RadarChartProps {
						// Checking if properties exist in RadarChartProps
						return (
							(obj as RadarChartProps).data !== undefined &&
							(obj as RadarChartProps).options !== undefined
						);
					}

					if (isRadarChartProps(component.Config)) {
						// TypeScript knows that component.Config is of type RadarChartProps here
						// Generate a RadarChart component.Config
						return (
							<RadarChart
								options={component.Config.options}
								data={component.Config.data}
								key={index}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type RadarChartProps" here
						// We return a div that tells us the config is wrong for RadarChart
						return (
							<div key={index}>
								The Radar Chart Config For Element {index} is Wrong!
							</div>
						);
					}
				}
			})}
		</>
	);
};
