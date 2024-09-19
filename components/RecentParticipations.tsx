import { Pagination } from '@/components/dataTable/Pagination';
import { DataTable } from '@/components/dataTable/dataTable';
import { RecentParticipationsProps } from '@/lib/types/types';
import { columnsParticipation } from './dataTable/columnDefinition';

const RecentParticipations = ({ page = 1, participations = [] }: RecentParticipationsProps) => {
  const rowsPerPage = 5;
  const totalPages = Math.ceil(participations.length / rowsPerPage);
  const indexOfLastParticipation = page * rowsPerPage;
  const indexOfFirstParticipation = indexOfLastParticipation - rowsPerPage;

  const currentParticipations = participations.slice(indexOfFirstParticipation, indexOfLastParticipation);
  return (
    <section className="recent-participations">
      <header className="flex items-center justify-between border shadow-sm px-1 py-2 rounded-sm">
        <h2 className="recent-participations-label  ">Participations Recentes:</h2>
      </header>
      <DataTable data={currentParticipations} columns={columnsParticipation} />
      {totalPages > 1 && (
        <div className="my-4 w-full">
          <Pagination totalPages={totalPages} page={page} />
        </div>
      )}
    </section>
  );
};

export default RecentParticipations;
