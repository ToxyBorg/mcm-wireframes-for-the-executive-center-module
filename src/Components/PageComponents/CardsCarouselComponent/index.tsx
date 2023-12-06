import "server-only";

import "@mantine/carousel/styles.css";
import React from "react";
import {
	Badge,
	Card,
	CardSection,
	Center,
	Container,
	Group,
	Image,
	Space,
	Text,
} from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import {
	CardsCarouselComponentProps,
	CardsCarouselComponent_init,
} from "./CardsCarouselComponentData";

export const CardsComponent = (props: CardsCarouselComponentProps) => {
	// const { title, data, carouselProps, cardProps } =
	// 	CardsCarouselComponent_init(props);

	return (
		<>
			<Center>
				<Text fw={"bold"}>{props.title}</Text>
			</Center>
			<Space h='md' />
			<Carousel {...props.carouselProps}>
				{props.data.map((item) => (
					<CarouselSlide
						mah={700}
						mih={350}
						key={item.id}
					>
						<Card {...props.cardProps}>
							<CardSection>
								<Image
									src={item.imageURL}
									alt={item.name}
								/>
							</CardSection>
							<Group
								justify='space-between'
								mt='md'
								mb='xs'
							>
								<Text fw={"bold"}>{item.name}</Text>
								<Badge
									color='pink'
									variant='light'
								>
									{item.descriptive}
								</Badge>
							</Group>

							<Text
								size='sm'
								c='dimmed'
							>
								{item.description}
							</Text>
						</Card>
					</CarouselSlide>
				))}
			</Carousel>
		</>
	);
};

export default CardsComponent;
