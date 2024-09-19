import { Pagination } from '@/components/dataTable/Pagination';
import { DataTable } from '@/components/dataTable/dataTable';
import { TableUserProps } from '@/lib/types/types';
import { columnsUserDef } from './dataTable/columnDefUser';

const UserTable = ({ page = 1, users = [] }: TableUserProps) => {
  const rowsPerPage = 5;
  const totalPages = Math.ceil(users?.length / rowsPerPage);
  const indexOfLastUsers = page * rowsPerPage;
  const indexOfFirstUsers = indexOfLastUsers - rowsPerPage;

  const currentUsers = users?.slice(indexOfFirstUsers, indexOfLastUsers);
  return (
    <section className="recent-participations">
      <header className="flex items-center justify-between border shadow-sm px-1 py-2 rounded-sm">
        <h2 className="recent-participations-label  ">Utilisateurs:</h2>
      </header>
      <DataTable data={currentUsers} columns={columnsUserDef} />
      {totalPages > 1 && (
        <div className="my-4 w-full">
          <Pagination totalPages={totalPages} page={page} />
        </div>
      )}
    </section>
  );
};

export default UserTable;
