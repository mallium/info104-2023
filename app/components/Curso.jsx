export default function Curso(props) {
  const { nombreCurso, notaCurso } = props;
  return (
    <div className="un-curso">
      <div className="un-curso-nombre">{nombreCurso}</div>
      <div className="un-curso-nota">{notaCurso}</div>
    </div>
  );
}
