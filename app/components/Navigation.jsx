import Link from "next/link";
import styles from "./Navigation.module.css";

const link = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },{
    label: "Posts",
    route: "/posts",
  }
];

/**
 * Esta función devuelve un elemento de encabezado con un elemento de navegación dentro, que contiene
 * una lista desordenada de enlaces
 * @returns Un encabezado con nav y ul con li's que tienen enlaces a las rutas.
 */
export function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.Navigation}>
          {link.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
