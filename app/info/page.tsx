export default function info() {
  const datos = {
    nombre: "Daniel",
    notas: [
      { curso: "algebra" },
      { nota: 3.1 },
      { curso: "progra", nota: 5.2 },
      { curso: "taller", nota: 6.2 },
    ],
  };

  return (
    <main>
      <div>
        <h2>Información adicional</h2>
        <p>{datos.nombre}</p>
        <ul>
          {datos.notas.map((fila) => {
            // codigo extra
            const curso = fila?.curso || "indefinido";
            const nota = fila?.nota || "-";
            return <li>{curso + " " + nota}</li>;
          })}
        </ul>
      </div>
    </main>
  );
}
