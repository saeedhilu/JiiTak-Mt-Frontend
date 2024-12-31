import React from 'react';
import { useQuery } from 'react-query';  
import { fetchUserData } from '@/services/users/fetchUserData';


const UserList = () => {
  const { data: users, isLoading, error } = useQuery('users', fetchUserData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user data</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.role}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
