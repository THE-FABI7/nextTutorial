import Link from "next/link"

/**
 * Obtenga la publicación con la identificación proporcionada de la API y vuelva a validarla cada 60
 * segundos.
 * @returns Una función que devuelve una promesa.
 */
const fetchLinkPosts = (id) => {
  return fetch(` https://jsonplaceholder.typicode.com/posts/${id}` , {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

/**
 * Obtiene una publicación de la API y la representa
 * @returns Una función que devuelve un componente.
 */
export default async function Posts({children,params }) {
  const { id } = params;
  const post = await fetchLinkPosts(id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments `}> Ver Comentarios</Link>
      {children}
    </article>
  );
}
