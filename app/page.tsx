import { GamesGrid } from "@/app/_components/games-grid";
import styles from "./page.module.scss";
import { Box, Typography } from "@mui/joy";

const Page = () => {
  return (
    <main className={styles.container}>
      <Box className={styles.pageTitle}>
        <Typography level="title-lg" className={styles.pageTitleText}>
          NBA SCHEDULE - {new Date().toLocaleDateString()}
        </Typography>
      </Box>
      <GamesGrid />
    </main>
  );
};

export default Page;
