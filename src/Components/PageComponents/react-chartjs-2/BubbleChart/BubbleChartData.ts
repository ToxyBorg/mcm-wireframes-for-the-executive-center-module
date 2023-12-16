import "server-only"

import { faker } from "@faker-js/faker";
import { ChartData, ChartOptions } from "chart.js";

export interface BubbleChartProps {
    options: ChartOptions<"bubble">;
    data: ChartData<"bubble">;
}
export const BubbleChart_init = (inputs?: Partial<BubbleChartProps>): BubbleChartProps => {
    const top_labels = ['top_label1', 'top_label2', 'top_label3', 'top_label4', 'top_label5', 'top_label6', 'top_label7'];
    const bottom_labels = [
        'bottom_label1', 'bottom_label2', 'bottom_label3', 'bottom_label4', 'bottom_label5', 'bottom_label6', 'bottom_label7'
    ];
    const defaults: BubbleChartProps = {
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,

                },
                x: {
                    offset: true,
                    type: "category",
                    labels: bottom_labels,
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Bubble Chart',
                },
            },
        },
        data: {
            datasets: top_labels.map((label) => ({
                label: label,
                data: bottom_labels.map((bottom_label, bottom_labelIndex) => ({
                    x: bottom_labelIndex,
                    y: faker.number.int({ min: 10, max: 30 }),
                    r: faker.number.int({ min: 5, max: 20 }),
                })),
                backgroundColor: faker.internet.color(),
            })),
        },
    };
    return {
        ...defaults,
        ...inputs,
    }

};