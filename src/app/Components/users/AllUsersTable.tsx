'use client';

import { User } from '@/types/user';
import { UserTableRow } from './UserTableRow';

interface AllUsersTableProps {
  users: User[];
}

export const AllUsersTable: React.FC<AllUsersTableProps> = ({ users }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex items-center gap-4 px-4 py-3 border-b">
        <select className="border rounded px-2 py-1 text-sm">
          <option>15</option>
          <option>25</option>
          <option>50</option>
        </select>
        <select className="border rounded px-2 py-1 text-sm">
          <option>Bulk actions</option>
        </select>
        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
          Apply
        </button>
        <div className="ml-auto flex items-center gap-2">
          <input
            type="search"
            placeholder="Search"
            className="border rounded px-3 py-1 text-sm"
          />
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Name ▼
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Email ▼
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Role ▼
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Status ▼
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Created At ▼
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserTableRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center px-4 py-3 border-t">
        <div className="text-sm text-gray-600">
          {users.length} Items
        </div>
      </div>
    </div>
  );
};