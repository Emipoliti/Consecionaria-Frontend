import React from "react";
import "../styles/components/pages/NovedadesPages.css";

const NovedadesPage = (props) => {
  return (
    <main className="holder-novedades">
      <h2>Novedades:</h2>
      <div className="novedades">
        <h3>Toyota Corolla 2013</h3>
        <h4>$2.100.000</h4>
        <p>
          Motor 1.8, 105.000 km, cubiertas nuevas, todos los services hechos, el
          mas full.
        </p>
      </div>
      <div className="novedades">
        <h3>Plan 0 km</h3>
        <h4>Fiat Kronos</h4>
        <p>
          Entregando $1.000.000 te financiamos el resto a taza 0. Podes hacerlo
          en 12, 24 o 48 cuotas.
        </p>
      </div>
      <div className="novedades">
        <h3>Honda Tornado 2019</h3>
        <h4>$890.000</h4>
        <p>250cc, cubiertas nuevas y solo 10.000 km.</p>
      </div>
      <div className="novedades">
        <h3>Plan Chevrolet Onix</h3>
        <p>Entregando $1.000.000 te financiamos el resto a taza 0. Podes hacerlo
          en 12, 24 o 48 cuotas.</p>
      </div>
      <div className="novedades">
        <h3>Plan Honda Twiisster </h3>
        <p>Entregando $500.000 te financiamos el resto a taza 0. Podes hacerlo
          en 12, 24 o 48 cuotas.</p>
      </div>
      <div className="novedades">
        <h3>Honda Tornado 2021</h3>
        <h4>1.100.000</h4>
        <p>OPORTUNIDAD: Solo 3.000 km.</p>
      </div>
      <div className="novedades">
        <h3>Audi TT</h3>
        <h4>10.000.000</h4>
        <p>Para los amantes de los motores grandes, Audi TT motor 3.0</p>
      </div>
    </main>
  );
};

export default NovedadesPage;
