import Image from "next/image";
import styles from "./page.module.css";
import { fetchNbaSchedule } from "@/lib/fetch-nba-schedule";
import { MOCK_ODDS_DATA } from "@/lib/mock-data";
import { GameCard } from "@/components/game-card";
import Typography from "@mui/joy/Typography";

export default function Home() {
  // const nbaSchedule = await fetchNbaSchedule();
  const nbaSchedule = MOCK_ODDS_DATA;
  return (
    <main className={styles.main}>
      <div className={styles.pageTitle}>
        <Typography level="h1">Daily NBA Schedule</Typography>
      </div>
      <div className={styles.grid}>
        {nbaSchedule.map((game: any) => (
          <GameCard game={game} key={game.GameId} />
        ))}
      </div>
    </main>
  );
}
