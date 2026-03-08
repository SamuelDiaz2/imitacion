import { useState } from "react";
import "./PorscheSection.css";

function PorscheSection() {

const [car] = useState({
    title: "Porsche 911",
    description: "El Porsche 911 es uno de los deportivos más icónicos del mundo.",
    image: "/img/911.jpg",
    button: "Más información"
});

return (
    <div className="contenedor">

        <img src={car.image} alt="Porsche 911" className="fondo"/>

        <div className="contenido">

            <h1 className="titulo">{car.title}</h1>

            <p className="descripcion">
                {car.description}
            </p>

            <button className="boton">
                {car.button}
            </button>

        </div>

    </div>
);
}

export default PorscheSection;