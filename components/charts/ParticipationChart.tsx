"use client";

import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js';
import { useEffect, useState } from 'react';
import { mockParticipations } from './mockdataTable';
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ParticipationChart: React.FC = () => {
  const [period, setPeriod] = useState('week');
  const [lineData, setLineData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: 'EN ATTENTE',
        data: [] as number[],
        borderColor: 'magenta',
        backgroundColor: 'rgba(255, 0, 255, 0.3)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'REMIS',
        data: [] as number[],
        borderColor: 'cyan',
        backgroundColor: 'rgba(0, 255, 255, 0.3)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'ANNULÉ',
        data: [] as number[],
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.3)',
        fill: false,
        tension: 0.4,
      },
    ],
  });

  const [barData, setBarData] = useState({
    labels: ['En Attente', 'Remis', 'Annulé'],
    datasets: [
      {
        label: 'Nombre',
        data: [0, 0, 0],
        backgroundColor: ['magenta', 'cyan', 'orange'],
        borderColor: ['magenta', 'cyan', 'orange'],
        borderWidth: 1,
      },
    ],
  });

  const [pieData, setPieData] = useState({
    labels: ['En Attente', 'Remis', 'Annulé'],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ['magenta', 'cyan', 'orange'],
      },
    ],
  });

  const [evolutionData, setEvolutionData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: 'Total des Participations',
        data: [] as number[],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        fill: false,
        tension: 0.4,
      },
    ],
  });

  const getCurrentMonthName = () => {
    const months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
      'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    const now = new Date();
    return months[now.getMonth()];
  };

  const transformData = (period: string) => {
    const participationCounts = {
      'En Attente': period === 'day' ? Array(31).fill(0) : period === 'week' ? Array(5).fill(0) : Array(12).fill(0),
      'Remis': period === 'day' ? Array(31).fill(0) : period === 'week' ? Array(5).fill(0) : Array(12).fill(0),
      'Annulé': period === 'day' ? Array(31).fill(0) : period === 'week' ? Array(5).fill(0) : Array(12).fill(0),
    };

    mockParticipations.forEach(p => {
      const date = new Date(p.createdAt);
      let index: number;

      if (period === 'day') {
        index = date.getDate() - 1;
      } else if (period === 'week') {
        const weekNumber = Math.ceil(date.getDate() / 7);
        index = weekNumber - 1;
      } else { // month
        index = date.getMonth();
      }

      if (p.ticket.status === 'WAITING') {
        participationCounts['En Attente'][index]++;
      } else if (p.ticket.status === 'GIFT_GIVEN') {
        participationCounts['Remis'][index]++;
      } else if (p.ticket.status === 'CANCELLED') {
        participationCounts['Annulé'][index]++;
      }
    });

    const labels = period === 'day'
      ? Array.from({ length: 31 }, (_, i) => `${i + 1}/${new Date().getMonth() + 1}`)
      : period === 'week'
      ? Array.from({ length: 5 }, (_, i) => `Semaine ${i + 1}`)
      : Array.from({ length: 12 }, (_, i) => `Mois ${i + 1}`);

    const totalParticipations = labels.map((_, i) => 
      participationCounts['En Attente'][i] + 
      participationCounts['Remis'][i] + 
      participationCounts['Annulé'][i]
    );

    setLineData({
      labels,
      datasets: [
        {
          label: 'EN ATTENTE',
          data: participationCounts['En Attente'],
          borderColor: 'magenta',
          backgroundColor: 'rgba(255, 0, 255, 0.3)',
          fill: false,
          tension: 0.4,
        },
        {
          label: 'REMIS',
          data: participationCounts['Remis'],
          borderColor: 'cyan',
          backgroundColor: 'rgba(0, 255, 255, 0.3)',
          fill: false,
          tension: 0.4,
        },
        {
          label: 'ANNULÉ',
          data: participationCounts['Annulé'],
          borderColor: 'orange',
          backgroundColor: 'rgba(255, 165, 0, 0.3)',
          fill: false,
          tension: 0.4,
        },
      ],
    });

    setBarData(prevData => ({
      ...prevData,
      datasets: [{
        ...prevData.datasets[0],
        data: [
          participationCounts['En Attente'].reduce((a, b) => a + b, 0),
          participationCounts['Remis'].reduce((a, b) => a + b, 0),
          participationCounts['Annulé'].reduce((a, b) => a + b, 0),
        ],
      }],
    }));

    setPieData(prevData => ({
      ...prevData,
      datasets: [{
        ...prevData.datasets[0],
        data: [
          participationCounts['En Attente'].reduce((a, b) => a + b, 0),
          participationCounts['Remis'].reduce((a, b) => a + b, 0),
          participationCounts['Annulé'].reduce((a, b) => a + b, 0),
        ],
      }],
    }));

    setEvolutionData({
      labels,
      datasets: [
        {
          label: 'Total des Participations',
          data: totalParticipations,
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.3)',
          fill: false,
          tension: 0.4,
        },
      ],
    });
  };

  useEffect(() => {
    transformData(period);
  }, [period]);

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          callback: (value: any) => value.toString(),
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const optionsPie = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw}`,
        },
      },
    },
  };

  const optionsEvolution = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          callback: (value: any) => value.toString(),
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const currentMonth = getCurrentMonthName();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statut de Participation</CardTitle>
        <CardDescription>{currentMonth} 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="week" className="space-y-4">
          <TabsList>
            <TabsTrigger
              value="day"
              onClick={() => setPeriod('day')}
              className={`cursor-pointer ${period === 'day' ? 'text-black' : 'text-gray-400'}`}
            >
              Jour
            </TabsTrigger>
            <TabsTrigger
              value="week"
              onClick={() => setPeriod('week')}
              className={`cursor-pointer ${period === 'week' ? 'text-black' : 'text-gray-400'}`}
            >
              Semaine
            </TabsTrigger>
            <TabsTrigger
              value="month"
              onClick={() => setPeriod('month')}
              className={`cursor-pointer ${period === 'month' ? 'text-black' : 'text-gray-400'}`}
            >
              Mois
            </TabsTrigger>
          </TabsList>
          <TabsContent value="day">
            <div className="border p-4">
              <h3 className="text-lg font-semibold mb-2">Tendance de Participation Quotidienne</h3>
              <Line data={lineData} options={optionsLine} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border p-4">
                <h3 className="text-lg font-semibold mb-2">Répartition des Participations</h3>
                <Pie data={pieData} options={optionsPie} />
              </div>
              <div className="border p-4">
                <h3 className="text-lg font-semibold mb-2">Participations par Catégorie</h3>
                <Bar data={barData} options={optionsBar} />
              </div>
            </div>
            <div className="border p-4 mt-4">
              <h3 className="text-lg font-semibold mb-2">Évolution des Total des Participations</h3>
              <Line data={evolutionData} options={optionsEvolution} />
            </div>
          </TabsContent>
          <TabsContent value="week">
            <div className="border p-4">
              <h3 className="text-lg font-semibold mb-2">Tendance de Participation Hebdomadaire</h3>
              <Line data={lineData} options={optionsLine} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border p-4">
                <h3 className="text-lg font-semibold mb-2">Répartition des Participations</h3>
                <Pie data={pieData} options={optionsPie} />
              </div>
              <div className="border p-4">
                <h3 className="text-lg font-semibold mb-2">Participations par Catégorie</h3>
                <Bar data={barData} options={optionsBar} />
              </div>
            </div>
            <div className="border p-4 mt-4">
              <h3 className="text-lg font-semibold mb-2">Évolution des Total des Participations</h3>
              <Line data={evolutionData} options={optionsEvolution} />
            </div>
          </TabsContent>
          <TabsContent value="month">
            <div className="border p-4">
              <h3 className="text-lg font-semibold mb-2">Tendance de Participation Mensuelle</h3>
              <Line data={lineData} options={optionsLine} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border p-4">
                <h3 className="text-lg font-semibold mb-2">Répartition des Participations</h3>
                <Pie data={pieData} options={optionsPie} />
              </div>
              <div className="border p-4">
                <h3 className="text-lg font-semibold mb-2">Participations par Catégorie</h3>
                <Bar data={barData} options={optionsBar} />
              </div>
            </div>
            <div className="border p-4 mt-4">
              <h3 className="text-lg font-semibold mb-2">Évolution des Total des Participations</h3>
              <Line data={evolutionData} options={optionsEvolution} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Affichage de l'état des participations pour {currentMonth} 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ParticipationChart;
