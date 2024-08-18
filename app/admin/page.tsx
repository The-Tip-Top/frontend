import HeaderContainer from '@/components/HeaderContainer';
import RecentParticipations from '@/components/RecentParticipations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { participationStatusStyles } from '@/constants';
import { CountingTicketResponse, getAllParticipations, getCountTicketByStatus } from '@/lib/actions/admin.action';
import { SearchParamProps } from '@/lib/types/types';
import { cn } from '@/lib/utils';
import { EGiftStatus } from '@prisma/client';

interface CustopnCardProps {
  status: EGiftStatus;
  title: string;
}

const Home = async ({ searchParams: { page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = { firstName: 'Massi' };

  const participation = await getAllParticipations();
  const countingTickets: CountingTicketResponse | undefined = await getCountTicketByStatus();

  const CustomCards = ({ status, title }: CustopnCardProps) => {
    const { borderColor, textColor, chipBackgroundColor } =
      participationStatusStyles[status as keyof typeof participationStatusStyles] || participationStatusStyles.default;
    return (
      <Card x-chunk="dashboard-05-chunk-3" className={cn(borderColor, chipBackgroundColor)}>
        <CardHeader className="pb-2">
          <CardDescription className="text-xl text-center">{title}</CardDescription>
          <CardTitle className={cn('text-4xl text-center', textColor)}>{countingTickets![status] ?? 0} </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">+10% from last month</div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="home">
      {/* {session && ( */}
      <div className="home-content">
        <header className="home-header">
          <HeaderContainer title="Welcome" user={loggedIn.firstName || 'Gest'} subtext="Some text fo the tip top" />
        </header>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
          <CustomCards status={EGiftStatus.WAITING} title={'Ticket en attente'} />
          <CustomCards status={EGiftStatus.GIFT_GIVEN} title={'Ticket remis'} />
          <CustomCards status={EGiftStatus.CANCELLED} title={'Ticket annulé'} />
        </div>
        <RecentParticipations page={currentPage} participations={participation ?? []} />
      </div>
      {/* )} */}
    </section>
  );
};

export default Home;
