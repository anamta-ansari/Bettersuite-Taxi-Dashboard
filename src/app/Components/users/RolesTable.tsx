'use client';

import { Role } from '@/types/user';

interface RolesTableProps {
  roles: Role[];
}

export const RolesTable: React.FC<RolesTableProps> = ({ roles }) => {
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
                Status ▼
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Created At ▼
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{role.name}</div>
                  <div className="flex gap-2 text-sm">
                    <button className="text-blue-600 hover:underline">Edit</button>
                    <span className="text-gray-400">|</span>
                    <button className="text-red-600 hover:underline">Delete Permanently</button>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-block w-3 h-3 rounded-full ${
                    role.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                  }`}></span>
                </td>
                <td className="px-4 py-3 text-gray-700">{role.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center px-4 py-3 border-t">
        <div className="text-sm text-gray-600">
          {roles.length} Items
        </div>
      </div>
    </div>
  );
};