import styles from "./MainLayout.module.css";
import Time from "../components/Time";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <div className={styles.conteiner}>
        <Time></Time>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default MainLayout;
