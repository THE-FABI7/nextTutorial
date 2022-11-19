import { ListOfPosts } from "./ListOfPosts"

/**
 * Devuelve un elemento de sección que contiene un componente ListOfPosts
 * @returns Una función que devuelve una sección con una lista de publicaciones.
 */
export default async function PostsPage() {


  return (
    <section>
      <ListOfPosts/>
    </section>
  );
}
