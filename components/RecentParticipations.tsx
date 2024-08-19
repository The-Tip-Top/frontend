/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pagination } from './Pagination';
import ParticipationTable from './ParticipationTable';
import { Participation } from '@/lib/types/types';

interface RecentParticipationsProps {
  participations: Participation[];
  page: number;
}

const RecentParticipations = ({ page = 1, participations = [] }: RecentParticipationsProps) => {
  const rowsPerPage = 5;
  const totalPages = Math.ceil(participations.length / rowsPerPage);
  const indexOfLastParticipation = page * rowsPerPage;
  const indexOfFirstParticipation = indexOfLastParticipation - rowsPerPage;

  const currentParticipations = participations.slice(indexOfFirstParticipation, indexOfLastParticipation);
  return (
    <section className="recent-participations">
      <header className="flex items-center justify-between">
        <h2 className="recent-participations-label">Recent participation</h2>
      </header>
      <ParticipationTable participations={currentParticipations} />
      {totalPages > 1 && (
        <div className="my-4 w-full">
          <Pagination totalPages={totalPages} page={page} />
        </div>
      )}
    </section>
  );
};

export default RecentParticipations;
