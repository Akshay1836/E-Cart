import React, { useEffect, useState } from 'react'
import User from './User';

function UsersList() {
        const [users, setUsers] = useState([]);
  

      useEffect(() => {
        fetchdata();
      }, [])

    const fetchdata = async () => {
      const api=await fetch(`https://api.escuelajs.co/api/v1/users`)
      const result = await api.json();
      setUsers(result);
      console.log(result);
    };
  return (
    <div className='overflow-hidden'>
        <h2 className='text-2xl my-6 mt-20'>All Users</h2>
        <div className=" font-thin flex flex-wrap justify-center">
      
      {users && users.map((data) => {
        return (
            <User key={data.id}
              id={data.id}
              name={data.name}
              avatar={data.avatar}
              role={data.role}
              email={data.email}
            />
        );
      })}
  </div>
    </div>
  )
}

export default UsersList