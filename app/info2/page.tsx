import Curso from "@/app/components/Curso";
export default function info2() {
  const datos = {
    nombre: "Daniel",
    notas: [
      { curso: "algebra", nota: 3.8 },
      { curso: "calculo", nota: 3.1 },
      { curso: "progra", nota: 5.2 },
      { curso: "taller", nota: 6.2 },
    ],
  };

  return (
    <main>
      <div>
        <h2>Información adicional</h2>
        <p>{datos.nombre}</p>
        <div className="lista-cursos">
          {datos.notas.map((fila) => {
            // codigo extra
            const curso = fila?.curso || "indefinido";
            const nota = fila?.nota || "-";
            return <Curso nombreCurso={curso} notaCurso={nota} />;
          })}
        </div>
      </div>
    </main>
  );
}
