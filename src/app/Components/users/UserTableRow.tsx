'use client';

import { User } from '@/types/user';

interface UserTableRowProps {
  user: User;
}

export const UserTableRow: React.FC<UserTableRowProps> = ({ user }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">
        <input type="checkbox" className="rounded" />
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
            {getInitials(user.name)}
          </div>
          <div>
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="flex gap-2 text-sm">
              <button className="text-blue-600 hover:underline">Edit</button>
              <span className="text-gray-400">|</span>
              <button className="text-red-600 hover:underline">Move To Trash</button>
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-gray-700">{user.email}</td>
      <td className="px-4 py-3 text-gray-700">{user.role}</td>
      <td className="px-4 py-3">
        <span className={`inline-block w-3 h-3 rounded-full ${
          user.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
        }`}></span>
      </td>
      <td className="px-4 py-3 text-gray-700">{user.createdAt}</td>
    </tr>
  );
};