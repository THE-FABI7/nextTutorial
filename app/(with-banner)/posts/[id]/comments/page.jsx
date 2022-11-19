import Image from "next/image";

/**
 * Obtenga la publicación con la identificación proporcionada de la API y vuelva a validarla cada 60
 * segundos.
 * @returns Una función que devuelve una promesa.
 */
const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //throw new Error("Error al cargar los comentarios"); =</prueba de errores al cargar comentarios

  return fetch(` https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

/**
 * Obtiene una publicación de la API y la representa
 * @returns Una función que devuelve un componente.
 */
export default async function Posts({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: "#444", fontSize: "10px" }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          {/* imagen sacada de https://avatars.dicebear.com/ */}
          <Image width='50' height='50'
            alt={comment.name}
            src={`https://avatars.dicebear.com/api/micah/${comment.email}.svg`}
          />
          <h2>{comment.name}</h2>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
