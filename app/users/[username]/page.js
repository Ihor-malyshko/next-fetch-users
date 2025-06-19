


export default async function UserPage({ params }) {
  const { username } = await params;
  const userId = username; // Assuming username is the userId for simplicity
  let userData;
  try {
    const res = await fetch(`https://api.github.com/users/${userId}`)
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    userData = await res.json();

  } catch (error) {
    console.log('error', error)
  }

  console.log('userData', userData)

//   Name
// Bio
// Location
// Followers
  // Following
  const { name, bio, location, followers, following } = userData ?? {};

  return (
    <div style={{ padding: '20px',  borderRadius: '8px' ,border: '1px solid #ccc'}}>
      <p>Name: {name}</p>
      <p>Bio: {bio}</p>
      <p>Location: {location}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
    </div>
  )
}
