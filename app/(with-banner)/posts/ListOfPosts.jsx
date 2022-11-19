import { LikeButton } from "./LikeButton.jsx";
import Link from "next/link.js";

/**
 * "Obtenga publicaciones de la API y revalide el caché cada 60 segundos".
 *
 * El siguiente objeto es donde puede definir la estrategia de revalidación
 * @returns Un objeto con una propiedad next que tiene una propiedad revalidate.
 */
const fetchPosts = () => {
  console.log("Fetching posts...");
  console.log("casa");

  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

/**
 * Obtenemos las publicaciones, cortamos las primeras 5 y luego las mapeamos para crear una lista de
 * enlaces a cada publicación.
 * @returns Una matriz de elementos JSX
 */
export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={` /posts/${post.id}` }>
        <h2 style={{ color: "#737ade" }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
