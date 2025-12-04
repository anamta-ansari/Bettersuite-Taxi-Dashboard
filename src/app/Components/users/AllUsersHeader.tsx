'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';

export const AllUsersHeader = () => {
  const router = useRouter();

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <div className="flex gap-2">
          <Button 
            variant="primary" 
            onClick={() => router.push('/users/add-user')}
            className="flex items-center gap-2"
          >
            <span>+</span>
            Add New
          </Button>
          <Button variant="secondary">
            <span>↓</span> Export
          </Button>
          <Button variant="secondary">
            <span>↑</span> Import
          </Button>
        </div>
      </div>

      <div className="flex gap-4 text-sm border-b">
        <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
          All (5)
        </button>
        <button className="pb-2 text-gray-600 hover:text-gray-800">
          Active (5)
        </button>
        <button className="pb-2 text-gray-600 hover:text-gray-800">
          Deactive (0)
        </button>
        <button className="pb-2 text-gray-600 hover:text-gray-800">
          Trash (0)
        </button>
      </div>
    </div>
  );
};