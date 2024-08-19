import { auth } from '@/auth';
import ParticipationChart from '@/components/charts/ParticipationChart';
import HeaderContainer from '@/components/HeaderContainer';
import { TrendingUp } from 'lucide-react';

const CourbeStats = async () => {
  const loggedIn = { firstName: '' };
  const session = await auth()
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {/* <HeaderContainer
            title="Statistiques" 
            user={loggedIn.firstName || ''}
            subtext="Vous pouvez suivre et consulter les informations clés sur le jeux concourt actuel."
          /> */}
          <div className="header-box">
          <h1 className="flex items-center space-x-2 text-3xl font-bold">
              Statistiques  <TrendingUp className="h-10 w-10 text-gray-500 ml-3" />
          </h1>
      <p className="header-box-subtext">Vous pouvez suivre et consulter les informations clés sur le jeux concourt actuel </p>
    </div>
          
        </header>
        <ParticipationChart />
      </div>
    
    </section>
  );
};

export default CourbeStats;
