import "server-only"

import { ChartData, ChartOptions } from 'chart.js';
import { faker } from '@faker-js/faker';

export interface ScatterChartProps {
    options: ChartOptions<"scatter">;
    data: ChartData<"scatter">;
}

export const ScatterChart_init = (inputs?: Partial<ScatterChartProps>): ScatterChartProps => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const defaults: ScatterChartProps = {
        options: {
            responsive: true,
            scales: {
                x: {
                    offset: true,

                    title: {
                        display: true,
                        text: "Default X axis Title",
                    },
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Default Y axis Title",
                    },
                },
            },
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    display: true,
                    text: 'Chart.js scatter Chart',
                },
            },
        },
        data: {
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Dataset 2',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ].map(dataset => ({
                ...dataset,
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            }))
        }
    };
    return {
        ...defaults,
        ...inputs,
    }
};