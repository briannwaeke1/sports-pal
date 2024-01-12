import styles from "./page.module.css";
import { fetchNbaSchedule } from "@/lib/fetch-nba-schedule";
import { GameCard } from "@/components/game-card";
import Typography from "@mui/joy/Typography";

const Page = async () => {
  const nbaSchedule = await fetchNbaSchedule();
  return (
    <main className={styles.main}>
      <div className={styles.pageTitle}>
        <Typography level="h1">Daily NBA Schedule</Typography>
      </div>
      <div className={styles.grid}>
        {nbaSchedule.games.map((game: any) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </main>
  );
};

export default Page;
