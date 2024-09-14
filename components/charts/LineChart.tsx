'use client';

import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ParticipationStats, TicketStats } from '@/lib/types/types';

export const description = 'A multiple line chart';

const chartConfig = {
  remis: {
    label: 'Remis',
    color: 'hsl(var(--chart-1))',
  },
  annule: {
    label: 'Annulé',
    color: 'hsl(var(--chart-2))',
  },
  enAttente: {
    label: 'En Attente',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

interface LineChartCardProps {
  multiLineData: TicketStats[];
}

interface OneLineChartCardProps {
  singleLineData: ParticipationStats[];
}

export const LineChartCard = ({ multiLineData }: LineChartCardProps) => {
  return (
    <Card>
      {/* <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={multiLineData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent className="bg-white" />} />
            <Line dataKey="remis" type="monotone" stroke="var(--color-remis)" strokeWidth={2} dot={false} />
            <Line dataKey="annule" type="monotone" stroke="var(--color-annule)" strokeWidth={2} dot={false} />
            <Line dataKey="enAttente" type="monotone" stroke="var(--color-enAttente)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
};
export const OneLineChartCard = ({ singleLineData }: OneLineChartCardProps) => {
  return (
    <Card>
      {/* <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={singleLineData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent className="bg-white" />} />
            <Line dataKey="total" type="monotone" stroke="var(--color-remis)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
};
