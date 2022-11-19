"use client";

import { useState } from "react";

/**
 * LikeButton es una función que toma una propiedad de identificación y devuelve un botón que muestra
 * un corazón rojo o un corazón delineado dependiendo de si se ha hecho clic en el botón.
 * @returns Una función que devuelve un componente.
 */
export function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>{liked ? "💗" : "💞"}</button>
  );
}
