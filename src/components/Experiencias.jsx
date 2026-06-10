import CardExperiencia from "./CardExperiencia";

function Experiencias() {
  const experiencias = [
    {
      cargo: "Estudante Serratec",
      descricao:
        "Desenvolvimento de aplicações Full Stack utilizando Java, Spring Boot, React e Banco de Dados.",
    },
    {
      cargo: "Projetos Acadêmicos",
      descricao:
        "Criação de APIs REST, integração com PostgreSQL e desenvolvimento de interfaces com React.",
    },
  ];

  return (
    <>
      <h3 className="titulo-secao">Experiências</h3>

      {experiencias.map((exp, index) => (
        <CardExperiencia
          key={index}
          cargo={exp.cargo}
          descricao={exp.descricao}
        />
      ))}
    </>
  );
}

export default Experiencias;