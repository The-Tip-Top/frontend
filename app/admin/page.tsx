import { auth } from '@/auth';
import HeaderContainer from '@/components/HeaderContainer';
import RecentParticipations from '@/components/RecentParticipations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { participationStatusStyles } from '@/constants';
import { getAllParticipations, getCountTicketByStatus } from '@/lib/actions/admin.action';
import { CountingTicketResponse, EParticipationStatus, SearchParamProps } from '@/lib/types/types';
import { cn } from '@/lib/utils';

interface CustopnCardProps {
  status: EParticipationStatus;
  title: string;
}

const Home = async ({ searchParams: { page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const user = (await auth())?.user;
  const participation = await getAllParticipations();
  const countingTickets: CountingTicketResponse | undefined = await getCountTicketByStatus();

  const CustomCards = ({ status, title }: CustopnCardProps) => {
    const { borderColor, textColor, chipBackgroundColor } =
      participationStatusStyles[status as unknown as keyof typeof participationStatusStyles] ||
      participationStatusStyles.default;
    return (
      <Card x-chunk="dashboard-05-chunk-3" className={cn(borderColor, chipBackgroundColor)}>
        <CardHeader className="pb-2">
          <CardDescription className="text-xl text-center">{title}</CardDescription>
          <CardTitle className={cn('text-4xl text-center', textColor)}>{countingTickets?.[status] ?? 0} </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground"></div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderContainer
            title="Bienvenue"
            user={user?.name || ''}
            subtext="Bienvenue dans l'éspace administrateur de votre jeux concour!"
          />
        </header>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          <CustomCards status={EParticipationStatus.WAITING} title={'Ticket restant'} />
          <CustomCards status={EParticipationStatus.CONCLUDED} title={'Cadeaux distribués'} />
          <CustomCards status={EParticipationStatus.CURRENT_PARTICIPATION} title={'En cours'} />
          <CustomCards status={EParticipationStatus.PARTICIPATION} title={'Total Participation'} />
        </div>
        <RecentParticipations page={currentPage} participations={participation ?? []} />
      </div>
    </section>
  );
};

export default Home;
