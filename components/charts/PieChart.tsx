"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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
//   { status: "remis", total: 275, fill: "var(--color-remis)" },
//   { status: "annule", total: 200, fill: "var(--color-annule)" },
//   { status: "enAttente", total: 187, fill: "var(--color-enAttente)" },
//   // { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   // { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ]

// const chartData = [
//   { day: "January", remis: 186, annule: 80, enAttente: 50 },
//   { day: "February", remis: 305, annule: 200, enAttente: 100 },
//   { day: "March", remis: 237, annule: 120, enAttente: 90 },
//   { day: "April", remis: 73, annule: 190, enAttente: 60 },
//   { day: "May", remis: 209, annule: 130, enAttente: 70 },
//   { day: "June", remis: 214, annule: 140, enAttente: 110 },
// ]


const chartConfig = {
  total: {
    label: "Total",
  },
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
  }
} satisfies ChartConfig

interface PieChartProps {
  data: TicketStats[]
}

export const PieChartCard = ({data}: PieChartProps) => {
  const chartData = data.reduce((acc, current) => {
    acc[0].totlat += current.remis
    acc[1].totlat += current.annule
    acc[2].totlat += current.enAttente
    return acc
  }, [
    {status: "remis", totlat: 0, fill: "var(--color-remis)"},
    {status: "annule", totlat: 0, fill: "var(--color-annule)"},
    {status: "enAttente", totlat: 0, fill: "var(--color-enAttente)"},
  ])
  
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel className="bg-white" />} />
            <Pie data={chartData} dataKey="total" label nameKey="status" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
