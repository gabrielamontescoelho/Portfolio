import { useState } from "react";

function Contato() {
    const [mostrarTelefone, setMostrarTelefone] = useState(false);

    return (
        <>
        <h3 className="titulo-secao">Contato</h3>

        <section>
            <div className="links-contato">
            <a href="https://www.linkedin.com/in/gabrielagcoelho"target="_blank">LinkedIn</a>
            <a href="https://github.com/gabrielamontescoelho" target="_blank">GitHub</a>
            </div>

            <button onClick={() => setMostrarTelefone(!mostrarTelefone)}>
            {mostrarTelefone ? "Ocultar telefone" : "Mostrar telefone"}
            </button>

            {mostrarTelefone && <p>Telefone: (21) 97938-2661</p>}
        </section>
        </>
    );
}

export default Contato;