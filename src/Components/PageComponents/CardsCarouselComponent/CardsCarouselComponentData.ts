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

    const defaults = {
        title: "Equipment Status",
        data: defaultData,
        carouselProps: {},
        cardProps: {},
    };

    return {
        ...defaults,
        ...inputs,
    };
};