'use client';
import React from "react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UsersList({ value }) {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  // try {
  //   const res = await fetch('https://api.github.com/users')
  //   if (!res.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   const data = await res.json();
  //   setUsers(data);
  //   console.log('users', data)
  // } catch (error) {
  //   console.log('error', error)
    
  // }

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://api.github.com/users');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      console.log('data', data)
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };
  useEffect(() => {
   

    fetchUsers();
  }, [])
  

  const filteredUsers = users.filter(user =>
    user.login.toLowerCase().includes(value.toLowerCase())
  );
  const handleClick = (username) => {
    router.push(`/users/${username}`);
  }

  console.log('users', users)
  console.log('filteredUsers', filteredUsers)

  return (
    <div>
      {filteredUsers.map(user => (
        <div key={user.id}><button onClick={() => handleClick(user.id)}>{user.login}</button></div>
      ))}
    </div>
  )
}
