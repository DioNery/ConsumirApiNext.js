import { useEffect, useState } from 'react';

const Home = () => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        setJoke(data.value);
      } catch (error) {
        console.error('Erro ao buscar piada:', error);
      }
    };

    fetchJoke();
  }, []);

  return (
    <div>
      <h1>Chuck Norris Joke</h1>
      {joke && <p>{joke}</p>}
    </div>
  );
};

export default Home;
