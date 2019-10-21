import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [start, setStart] = useState(false);
  const [message, setMessage] = useState("");

  const startReading = () => {
    setStart(true);

    const phrase = message.split(" ");

    let i = 0;

    let intervalId = setInterval(() => {
      if (phrase[i] === undefined) {
        clearInterval(intervalId);
        setWord(phrase[i - 1].toLocaleUpperCase());
      } else {
        setWord(phrase[i].toLocaleUpperCase());
        i++;
      }
    }, 100);
  };

  return (
    <section className="hero is-dark is-fullheight is-bold">
      <div className="hero-head">
        <div className="container has-text-centered" style={{ padding: 30 }}>
          <p align="center">
            <img src="images/icons/icon-128x128.png" alt="ReadingPot" />
          </p>
          <h1 className="title is-4">
            ReadingPot · Potencializador de leitura
          </h1>
          <h2 className="subtitle is-5">Aumente sua velocidade de leitura</h2>
          <textarea
            rows="5"
            value={message}
            className="textarea"
            placeholder="Insira um texto aqui. Em seguida, clique em 'Animar' para começar sua leitura. A cada 100ms uma palavra será exibida, evitando que você precise movimentar os olhos para realizar a leitura."
            onChange={e => setMessage(e.target.value)}
          />
          <br />
          <button
            onClick={() => startReading()}
            className="button is-large is-dark is-outlined is-inverted"
          >
            Animar
          </button>
        </div>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">{start && word}</h1>
        </div>
      </div>
      <div className="hero-footer">
        <div
          className="container has-text-centered"
          style={{ paddingBottom: 30 }}
        >
          <p>
            Feito por{" "}
            <a
              href="https://instagram.com/operfildoluiz"
              className="has-text-white"
            >
              Luiz Gonçalves
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
