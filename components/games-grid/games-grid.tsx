import { GameCard } from "@/components/game-card";
import { NBAGame } from "@/lib/types";
import { formatDate } from "@/lib/formatDate";
import { getScheduledGames } from "@/lib/getScheduledGames";
import { Box, Typography } from "@mui/joy";
import styles from "./games-grid.module.scss";

export async function GamesGrid() {
  const data = await getScheduledGames(formatDate());
  return (
    <Box className={styles.grid}>
      {data.games.length === 0 ? (
        <Typography className={styles.noGamesText}>No games today</Typography>
      ) : (
        data.games.map((game: NBAGame) => (
          <GameCard game={game} key={game.id} />
        ))
      )}
    </Box>
  );
}
