import { Typography } from "@mui/joy";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <nav className={styles.container}>
      <Typography level="h3">Sports Pal</Typography>
    </nav>
  );
};
