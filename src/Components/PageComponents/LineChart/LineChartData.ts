import "server-only"

import { faker } from "@faker-js/faker";
import { ChartData, ChartOptions } from "chart.js";

export interface LineChartProps {
    options: ChartOptions<"line">;
    data: ChartData<"line">;
}
export const LineChart_init = (inputs?: Partial<LineChartProps>): LineChartProps => {
    const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const defaults = {
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart',
                },
            },
        },
        data: {
            labels,
            datasets: [
                {
                    label: "Dataset 1",
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                    label: "Dataset 2",
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
            ].map(dataset => ({
                ...dataset,
                data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            }))
        }
    };
    return {
        ...defaults,
        ...inputs,
    }

};