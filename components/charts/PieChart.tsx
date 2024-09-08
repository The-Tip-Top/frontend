"use client"

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
import { useEffect } from "react"

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
  const chartDataa = data.reduce((acc, current) => {
    acc[0].total += current.remis
    acc[1].total += current.annule
    acc[2].total += current.enAttente
    return acc
  }, [
    {status: "remis", total: 0, fill: "var(--color-remis)"},
    {status: "annule", total: 0, fill: "var(--color-annule)"},
    {status: "enAttente", total: 0, fill: "var(--color-enAttente)"},
  ])

  useEffect(() => {
    console.log("------ ", chartDataa)
  }, [chartDataa])
  return (
    <Card className="flex flex-col">
      {/* <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart className="">
            <ChartTooltip content={<ChartTooltipContent hideLabel className="bg-white" />} />
            <Pie data={chartDataa} dataKey="total" label nameKey="status" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}
