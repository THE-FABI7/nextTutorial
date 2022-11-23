import Image from "next/image";

/**
 * Devuelve un elemento de sección con un elemento h1 y un componente de imagen
 * @returns Una sección con un título y una imagen.
 */
export default function HomePage() {
  return (
    <section>
      <h1>Bienvenidos a FabiApp</h1>
      <p>
        Fabi app esta basada en el video del siguiente Tutorial:{" "}
        <a
          style={{ color: "yellow" }}
          href="https://www.youtube.com/watch?v=pFT8wD2uRSE"
        >
          next js
        </a>{" "}
        conservando sus estilos y formatos
      </p>
      <p>Cabe destacar que los post funcionan con conexion a internet :)</p>
    </section>
  );
}
