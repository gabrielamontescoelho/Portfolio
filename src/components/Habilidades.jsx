function Habilidades() {
    const habilidades = [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "PostgreSQL",
    "Git",
    "GitHub",
    ];

    return (
        <>
        <h3 className="titulo-secao">Habilidades</h3>

        <section className="card-habilidades">
            <ul>
            {habilidades.map((habilidade, index) => (
                <li key={index}>{habilidade}</li>
            ))}
            </ul>
        </section>
        </>
    );
}

export default Habilidades;