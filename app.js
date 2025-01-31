async function fetchRandomUserData() {
    try {
      const res = await fetch('https://randomuser.me/api/');
      if (!res.ok) {
        throw new Error('There was an error fetching the user');
      }
      const data = await res.json();
      const user = data.results[0];
      const userData = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email
      };
      return userData;
    } catch (err) {
      console.log('Ah, we ran into an issue:', err);
      throw err;
    }
  }
  async function displayUserData() {
    try {
      const userData = await fetchRandomUserData();
      console.log('Here\'s a random person for you!');
      console.log('Name:', userData.name);
      console.log('Email:', userData.email);
    } catch (error) {
      console.log('Error:', error.message);
    }
  }
  displayUserData();