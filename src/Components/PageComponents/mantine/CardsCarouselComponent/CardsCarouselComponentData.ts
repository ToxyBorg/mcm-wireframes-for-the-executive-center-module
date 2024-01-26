import "server-only"

import { faker } from "@faker-js/faker";
import { CarouselProps } from "@mantine/carousel";
import { CardProps } from "@mantine/core";

interface CardCarouselData {
    id: string;
    name: string;
    descriptive: string;
    description: string;
    imageURL: string;
}

export interface CardsCarouselComponentProps {
    title: string;
    data: CardCarouselData[];
    carouselProps: CarouselProps;
    cardProps: CardProps;
}

export const CardsCarouselComponent_init = (inputs?: Partial<CardsCarouselComponentProps>): CardsCarouselComponentProps => {
    const equipmentStatus = ['Operational', 'Under Maintenance', 'Out of Service'];

    const defaultData: CardCarouselData[] = Array.from({ length: 10 }, () => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: `Description: ${faker.lorem.paragraph()}`,
        descriptive: faker.string.fromCharacters(equipmentStatus),
        imageURL: faker.image.url()
    }));

    const defaults: CardsCarouselComponentProps = {
        title: "Equipment Status",
        data: defaultData,
        carouselProps: {
            withIndicators: true,
            slideSize: '33.333333%',
            slideGap: 'md',
            loop: true,
            align: 'start',
            slidesToScroll: 3
        },
        cardProps: {
            padding: 'md',
            withBorder: true,
        },
    };

    return {
        ...defaults,
        ...inputs,
    };
};