import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    usersdata();
  }, [])

  const usersdata = async () => {

    const response = await fetch("https://dummyjson.com/users");
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);

    setUsers(jsonData.users);
  }

  return (
    <>
      <h1 className="title">
        Dummy Data
      </h1>

      <div className="container">
        <table className="table-data">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th colSpan={2}>E-mail</th>
              <th colSpan={2}>Username</th>
              <th colSpan={2}>Domain</th>
              <th colSpan={2}>IP</th>
              <th colSpan={4}>University</th>
            </tr>

          </thead>


          <tbody>

            {users.map((values) => {
              return (

                <>
                  <tr>
                    <td>{values.id}</td>
                    <td><img src={values.image} className='profile-pic'/></td>
                    <td>{values.firstName}</td>
                    <td>{values.lastName}</td>
                    <td>{values.gender}</td>
                    <td colSpan={2}>{values.email}</td>
                    <td colSpan={2}>{values.username}</td>
                    <td colSpan={2}>{values.domain}</td>
                    <td colSpan={2}>{values.ip}</td>
                    <td colSpan={4}>{values.university}</td>
                  </tr>

                </>
              )
            })}

          </tbody>


        </table>
      </div>

    </>
  );
}

export default App;
