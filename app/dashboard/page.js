export default async function page() {

  
    // try {
    //   const res = await fetch('https://api.github.com/users');
    //   if (!res.ok) {
    //     // throw new Error('Network response was not ok');
    //   }
    //   const data = await res.json();
    //   console.log('data', data)
    //   setUsers(data);
    // } catch (error) {
    //   console.error('Failed to fetch users:', error);
    // }
  
  return (
    // tabel of users with username and avatar and Link to GitHub profile
    <div>
      <h1>Users</h1>
      {/* <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td><img src={user.avatar_url} alt={user.login} width={50} /></td>
              <td>{user.login}</td>
              <td><a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}
