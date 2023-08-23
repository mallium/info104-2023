import Image from "next/image";

export default function Home() {
  const anchoImagen = 400;
  return (
    <main>
      <div className="patata">
        <h2>Hola Bienvenid@ a INFO104</h2>
        <p>
          Este es un curso muy interesante porque aprenderás a desarrollar
          aplicaciones Web
        </p>
        <center>
          <Image
            src="./next.svg"
            alt="logo next"
            width={anchoImagen}
            height={anchoImagen / 2}
          />
        </center>
      </div>
      <div>
        <h2>chao</h2>
        <p>...</p>
      </div>
    </main>
  );
}
