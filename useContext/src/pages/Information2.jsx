import React from "react";
import "./Information.css";
import { useNavigate } from "react-router-dom";

const Information = () => {

  const navigate = useNavigate();

  const Login = () => {
    navigate("/")
};

  return (
    <>
      <div className="info-container">
        <h1>
          ¿Qué es el <code>Efecto Mandela</code>?
        </h1>
        <p>
          El <strong>Efecto Mandela</strong> es un fenómeno donde un gran número
          de personas comparten un recuerdo colectivo erróneo sobre un evento o
          hecho histórico.
        </p>

        <h2>¿Por qué se llama así?</h2>
        <p>
          El nombre proviene del recuerdo común de que Nelson Mandela murió en
          prisión en los años 80, cuando en realidad fue liberado y vivió hasta
          2013. Muchas personas recuerdan vívidamente la "muerte" de Mandela en
          prisión, lo que llevó a la creación del término.
        </p>

        <h2>Ejemplos comunes</h2>
        <ul>
          <li>
            El logotipo de <code>Looney Tunes</code>: muchos lo recuerdan como{" "}
            <code>Looney Toons</code>.
          </li>
          <li>
            La frase de Darth Vader: se recuerda como "Luke, yo soy tu padre",
            pero en realidad es "No, yo soy tu padre".
          </li>
          <li>
            El personaje de Monopoly: mucha gente cree que tiene un monóculo,
            pero nunca lo ha tenido.
          </li>
        </ul>

        <h2>¿A qué se debe?</h2>
        <p>
          Las teorías varían: desde simples errores de memoria y confabulaciones
          colectivas, hasta ideas más extravagantes como viajes en el tiempo o
          realidades alternativas. Lo cierto es que el cerebro humano no siempre
          almacena los recuerdos de forma precisa.
        </p><br />
      <button className="dashboard-button" onClick={Login}>
        Login
      </button>
      </div>
    </>
  );
};

export default Information;
