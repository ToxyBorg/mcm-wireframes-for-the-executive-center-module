"use client";

import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BigCalendarComponentProps } from "./BigCalendarComponentData";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import { fr } from "date-fns/locale";
import { Center, Container, Title } from "@mantine/core";

const localizer = dateFnsLocalizer({
	format: (value: Date, formatString: string) =>
		format(value, formatString, { locale: fr }),
	parse: (value: string, formatString: string) =>
		parse(value, formatString, new Date(), { locale: fr }),
	startOfWeek: () => startOfWeek(new Date(), { locale: fr }),
	getDay: (date: Date) => getDay(date),
	locales: {
		"fr-FR": fr,
	},
});

export const BigCalendarComponent = (props: BigCalendarComponentProps) => {
	return (
		<Container
			fluid
			w={"100%"}
		>
			<Center>
				<Title order={1}>{props.calendarTitle}</Title>
			</Center>
			<Calendar
				events={props.events}
				localizer={localizer}
				style={{ maxHeight: 1200, minHeight: 750 }}
				defaultView='month'
				popup
			/>
		</Container>
	);
};
