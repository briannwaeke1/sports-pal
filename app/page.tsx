import { GameCard } from "@/components/game-card";
import Typography from "@mui/joy/Typography";
import { NBAGame } from "@/lib/types";
import { formatDate } from "@/lib/formatDate";
import { getScheduledGames } from "@/lib/getScheduledGames";
import styles from "./page.module.css";

const Page = async () => {
  const scheduledGames = await getScheduledGames(formatDate());
  return (
    <main className={styles.main}>
      <div className={styles.pageTitle}>
        <Typography level="h1">Scheduled NBA Games</Typography>
      </div>
      <div className={styles.grid}>
        {scheduledGames.games.map((game: NBAGame) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </main>
  );
};

export default Page;
