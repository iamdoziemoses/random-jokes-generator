import React, { useState, useEffect } from "react";
import spinner from "../assets/spinner1.jpg";

const Jokes = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://api.chucknorris.io/jokes/random";

  const getJoke = () => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);
  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light --p">
        <h2 className="--text-center">Random Jokes Generator</h2>
        <div className="--line"></div>

        {isLoading ? (
          <div className="--center-all">
            <img src={spinner} alt="loading spinner" width="100" />
          </div>
        ) : (
          <>
            <h4>Joke id: {joke.id}</h4>
            <p>{joke.value}</p>
          </>
        )}

        <br />
        <button className="--btn --btn-primary" onClick={getJoke}>
          Generate Joke
        </button>
      </div>
    </section>
  );
};

export default Jokes;
