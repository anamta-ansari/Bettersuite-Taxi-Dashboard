'use client';

import { useEffect, useState } from 'react';
import { RolesHeader } from '../../Components/users/RolesHeader';
import { RolesTable } from '../../Components/users/RolesTable';
import { Role } from '@/types/user';

const initialRoles: Role[] = [
  {
    id: '1',
    name: 'Dispatcher',
    status: 'active',
    createdAt: '2025-10-15 03:11:41 PM'
  }
];

export default function RolesPermissionsPage() {
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  useEffect(() => {
    // Initialize localStorage with initial roles if empty
    const storedRoles = localStorage.getItem('roles');
    if (!storedRoles) {
      localStorage.setItem('roles', JSON.stringify(initialRoles));
    } else {
      setRoles(JSON.parse(storedRoles));
    }
  }, []);

  // Reload roles when the page becomes visible (after navigation back)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const storedRoles = localStorage.getItem('roles');
        if (storedRoles) {
          setRoles(JSON.parse(storedRoles));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <RolesHeader />
        <RolesTable roles={roles} />
      </div>
    </div>
  );
}