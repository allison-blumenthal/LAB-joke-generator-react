const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

// eslint-disable-next-line no-new
const getJoke = () => {
  // eslint-disable-next-line no-new
  new Promise((resolve, reject) => {
    fetch(`${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default getJoke;
