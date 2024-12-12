import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav className={styles.conteiner}>
        <NavLink to="/" end>
          Сегодня
        </NavLink>
        <NavLink to="/4days">5 Дней</NavLink>
      </nav>
    </div>
  );
};

export default Menu;
