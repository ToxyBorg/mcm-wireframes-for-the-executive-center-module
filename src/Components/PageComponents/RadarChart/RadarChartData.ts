import "server-only"

import { ChartData, ChartOptions } from 'chart.js';
import { faker } from "@faker-js/faker";

export interface RadarChartProps {
    options: ChartOptions<"radar">;
    data: ChartData<"radar">;
}

export const RadarChart_init = (inputs?: Partial<RadarChartProps>): RadarChartProps => {
    const labels = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'];
    const data_for_each = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const defaults: RadarChartProps = {
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            plugins: {
                filler: {
                    propagate: true
                },


                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Radar chart',
                },
            },

            scales: {
                r: {
                    beginAtZero: true,
                },
            },
        },
        data: {
            labels: data_for_each,
            datasets: labels.map((thing) => (

                {
                    label: thing,
                    data: data_for_each.map((month, monthIndex) =>
                        faker.number.int({ min: 50, max: 100 })
                    ),
                    backgroundColor: faker.color.hsl({ format: 'css', includeAlpha: true }),
                    borderColor: faker.color.hsl({ format: 'css', }),
                    borderWidth: 1,
                })),
        },
    };
    return {
        ...defaults,
        ...inputs,
    }
};