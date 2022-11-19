import {Counter} from './posts/counter.jsx'

/**
 * Toma un accesorio para children y devuelve un div con un h1 y el accesorio para children
 * @returns Los hijos del componente.
 */
export default function postLayout({ children }) {
  return (
    <div>
      <marquee style ={{background: 'white', color: 'blue'}} >..Fabi es el mejor progamador..</marquee>
   
      {children}
    </div>
  );
}
