import { auth } from '@/auth';
import HeaderContainer from '@/components/HeaderContainer';
import UserTable from '@/components/UserTable';
import { getAllUsers } from '@/lib/actions/admin.action';
import { SearchParamProps } from '@/lib/types/types';



const Emailing = async ({ searchParams: { page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const user = (await auth())?.user;
  const users = await getAllUsers();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header relative">
          <HeaderContainer title="Bienvenue" user={user?.name || ''} subtext="Bienvenue dans l'éspace grand jeux concour!" />
        </header>
        <section className="recent-participations">
          {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            templates
          </div> */}
          <UserTable page={currentPage} users={users ?? []} />
          
        </section>
      </div>
    </section>
  )
}

export default Emailing
