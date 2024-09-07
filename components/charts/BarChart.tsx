

"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { TicketStats } from "@/lib/types/types"

// const chartData = [
//   { month: "January", remis: 186, annule: 80, enAttente: 50 },
//   { month: "February", remis: 305, annule: 200, enAttente: 100 },
//   { month: "March", remis: 237, annule: 120, enAttente: 90 },
//   { month: "April", remis: 73, annule: 190, enAttente: 60 },
//   { month: "May", remis: 209, annule: 130, enAttente: 70 },
//   { month: "June", remis: 214, annule: 140, enAttente: 110 },
// ];

const chartConfig = {
  remis: {
    label: "Remis",
    color: "hsl(var(--chart-1))",
  },
  annule: {
    label: "Annulé",
    color: "hsl(var(--chart-2))",
  },
  enAttente: {
    label: "En Attente",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

interface ChartCardProps {
  chartData: TicketStats[],
}

export const BarChartCard = ({chartData}: ChartCardProps) => {
  return (
    <Card>
      {/* <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent>
        <ChartContainer className="h-[500px] w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false}  />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" className="bg-white" />}
            />
            <Bar dataKey="remis" fill="var(--color-remis)" radius={4} />
            <Bar dataKey="annule" fill="var(--color-annule)" radius={4} />
            <Bar dataKey="enAttente" fill="var(--color-enAttente)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>

  )
}
