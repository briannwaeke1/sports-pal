import { GamesGrid } from "@/components/games-grid";
import Typography from "@mui/joy/Typography";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.pageTitle}>
        <Typography level="h1">
          Scheduled NBA Games {new Date().toLocaleDateString()}
        </Typography>
      </div>
      <GamesGrid />
    </main>
  );
}
