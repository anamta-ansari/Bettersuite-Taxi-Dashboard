'use client';

import { useEffect, useState } from 'react';
import { AllUsersHeader } from '../../Components/users/AllUsersHeader';
import { AllUsersTable } from '../../Components/users/AllUsersTable';
import { User } from '@/types/user';

const initialUsers: User[] = [
  {
    id: '1',
    name: 'Ethan Clark',
    email: 'ethan.clark@adminexample.com',
    phone: '+1234567890',
    role: 'user',
    status: 'active',
    createdAt: '2025-01-23 11:22:04 AM'
  },
  {
    id: '2',
    name: 'Daniel Taylor',
    email: 'daniel.taylor@adminexample.com',
    phone: '+1234567891',
    role: 'user',
    status: 'active',
    createdAt: '2025-01-23 11:21:29 AM'
  },
  {
    id: '3',
    name: 'John Anderson',
    email: 'john.anderson@adminexample.com',
    phone: '+1234567892',
    role: 'user',
    status: 'active',
    createdAt: '2025-01-23 11:20:36 AM'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@adminexample.com',
    phone: '+1234567893',
    role: 'user',
    status: 'active',
    createdAt: '2025-01-23 11:20:00 AM'
  },
  {
    id: '5',
    name: 'Mia Walker',
    email: 'mia.walker@adminexample.com',
    phone: '+1234567894',
    role: 'user',
    status: 'active',
    createdAt: '2025-01-23 11:19:21 AM'
  }
];

export default function AllUsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  useEffect(() => {
    // Initialize localStorage with initial users if empty
    const storedUsers = localStorage.getItem('users');
    if (!storedUsers) {
      localStorage.setItem('users', JSON.stringify(initialUsers));
    } else {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Reload users when the page becomes visible (after navigation back)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
          setUsers(JSON.parse(storedUsers));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <AllUsersHeader />
        <AllUsersTable users={users} />
      </div>
    </div>
  );
}