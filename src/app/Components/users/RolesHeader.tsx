'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';

export const RolesHeader = () => {
  const router = useRouter();

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Roles</h1>
        <Button 
          variant="primary" 
          className="flex items-center gap-2"
          onClick={() => router.push('/users/roles-permissions/create')}
        >
          <span>+</span>
          Add New
        </Button>
      </div>

      <div className="flex gap-4 text-sm border-b">
        <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
          All (1)
        </button>
      </div>
    </div>
  );
};