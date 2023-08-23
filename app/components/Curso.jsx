export default function Curso(props) {
  console.log(props);
  const { nombreCurso, notaCurso } = props;
  return (
    <div className="un-curso">
      <div style={{ margin: 10 + "px", width: 60 + "%" }}>{nombreCurso}</div>
      <div style={{ margin: 10 + "px", width: 40 + "%" }}>{notaCurso}</div>
    </div>
  );
}
