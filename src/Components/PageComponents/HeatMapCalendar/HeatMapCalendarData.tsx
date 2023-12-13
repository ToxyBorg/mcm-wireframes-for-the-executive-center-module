// HeatMapCalendarData.ts

"use server";
// "use client";

import { faker } from "@faker-js/faker";
import { HeatMapProps, HeatMapValue } from "@uiw/react-heat-map";

export interface HeatMapCalendarProps {
	title: string;
	options: HeatMapProps;
	data: HeatMapValue[];
}

export const HeatMapCalendar_init = (
	inputs?: Partial<HeatMapCalendarProps>
): HeatMapCalendarProps => {
	const currentYear = new Date().getFullYear();
	const currentDayOfYear = Math.floor(
		(Date.now() - new Date(currentYear, 0, 1).getTime()) / (1000 * 60 * 60 * 24)
	);

	const defaults: HeatMapCalendarProps = {
		title: "Default Heat Map Calendar",
		options: {
			rectSize: 25,
			legendCellSize: 15,

			startDate: new Date(currentYear, 0, 1), // Start from January of the current year
			endDate: new Date(), // End at the current day
		},
		data: Array.from({ length: currentDayOfYear }, (_, idx) => ({
			date: new Date(currentYear, 0, idx + 1).toISOString().split("T")[0],
			count: faker.number.int({ min: 0, max: 60 }),
		})),
	};
	return {
		...defaults,
		...inputs,
	};
};
