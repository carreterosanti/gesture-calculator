import React from "react";
import { Link } from "react-router-dom";
import InfoSectionsCalculator from "./InfoSectionsCalculator";
import TopRightLinkIcon from "./TopRightLinkIcon";

export default function InfoCalculator() {
  return (
    <div className="display-column-center">
      <TopRightLinkIcon to="/" imgUrl="./images/exit-icon.png" />
      <div className="main-div-info">
        <h1>Introducción a la Calculadora</h1>
        <p>
          Comenzamos por identificar las tres secciones que componen de la
          calculadora.
        </p>
        <InfoSectionsCalculator />
        <h2>Sumar y Restar</h2>
        <p>
          Para sumar ó restar un dígito simplemente hay que deslizar hacia
          arriba ó hacia abajo en el número deseado en el teclado.
        </p>
        <p>
          Para sumar o restar números de más de un dígito, basta con ir
          acumulando los mismos en “Dígitos Parciales” mediante un click sobre
          el número del teclado. Luego para sumar o restar dicho número se
          realiza el mismo gesto de deslizamiento hacia arriba o hacia abajo
          sobre “Digitos Parciales” o sobre el último número que va a componer
          “Dígitos Parciales”
        </p>
        <h2>Digitos Parciales</h2>
        <p>
          Es posible bloquear el número presente en “Dígitos Parciales”,
          mediante un click sobre el mismo, evitando que este desaparezca al
          realizar una operación de suma o resta. Para desbloquear “Dígitos
          Parciales” basta con hacer un click nuevamente.
        </p>
        <h2>Eliminar</h2>
        <p>
          {
            "Mediante un deslizamiento hacia arriba en la tecla “<”, se reseteara a 0 el “Resultado Final”."
          }
        </p>
        <p>
          {
            "Por otro lado mediante un click sobre la tecla “<”, se eliminará el último el último dígito de “Dígitos Parciales”. Y con un deslizamiento hacia la izquierda sobre la tecla “<”, se eliminarán todos los dígitos de “Dígitos Parciales”"
          }
        </p>
      </div>
    </div>
  );
}
